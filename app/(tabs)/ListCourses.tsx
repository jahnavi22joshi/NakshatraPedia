import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import CustomButton from "../components/button/CustomButton";
import ListCourseCard from "../components/carts/ListCourseCard";
import useAppFonts from "../config/useAppFonts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCourses } from "../redux/slices/CourseSlice";
import { removeHtmlTags } from '../utils/helpers';
export default function ListCourses() {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [sortBy, setSortBy] = useState("");
  const {
    PLACEHOLDER_URL,
    IMAGE_BASE_URL,
    DEFAULT_AVATAR,
  } = Constants.expoConfig?.extra || {};
  const { data, loading, error } = useAppSelector((state) => state.courses);
  const [fontsLoaded] = useAppFonts();
  const [searchText, setSearchText] = useState("");
  const initialFilters = {
    rating: [],
    category: [],
    subCategory: [],
    level: [],
    price: [],
  };

  const [filters, setFilters] = React.useState(initialFilters);
  const [tempFilters, setTempFilters] = React.useState(initialFilters);
  const [showFilter, setShowFilter] = React.useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [page, setPage] = useState(1);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {

    setPage(1);
    setAllCourses([]);

  }, [searchText, filters, sortBy]);

  const sortOptions = [
    "Newest First",
    "Oldest First",
    "Price: Low to High",
    "Price: High to Low",
  ];
  const sortedCourses = [...allCourses].sort((a, b) => {

    // Newest First
    if (sortBy === "Newest First") {
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    }

    // Oldest First
    if (sortBy === "Oldest First") {
      return (
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime()
      );
    }

    // Price Low to High
    if (sortBy === "Price: Low to High") {
      return (
        (a.amountInInr || 0) -
        (b.amountInInr || 0)
      );
    }

    // Price High to Low
    if (sortBy === "Price: High to Low") {
      return (
        (b.amountInInr || 0) -
        (a.amountInInr || 0)
      );
    }

    return 0;
  });

  useEffect(() => {

    console.log("🚀 API HIT PAGE =>", page);


    const delayDebounce = setTimeout(() => {

      const payload = {
        filters: {
          keyword: searchText.trim(),
          Category: filters.category,
          SubCategory: filters.subCategory,
          Level: filters.level.includes("All") ? [] : filters.level,
          isFree:
            filters.price.length === 1
              ? filters.price.includes("Free")
              : null,
          ratingCount: filters.rating,
        },

        sortBy: sortBy,

        page: page,
        limit: 3,
      };

      dispatch(fetchCourses(payload));

    }, 500);

    return () => clearTimeout(delayDebounce);

  }, [searchText, filters, sortBy, page]);

  useEffect(() => {

    const newCourses = data?.data?.data || [];

    console.log(
      `✅ PAGE ${page} RECEIVED =>`,
      newCourses.length,
      "courses"
    );

    if (page === 1) {
      setAllCourses(newCourses);
    } else {
      setAllCourses((prev) => [...prev, ...newCourses]);
    }
    if (newCourses.length < 3) {
      console.log("🛑 PAGINATION ENDED");
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    setLoadingMore(false);

  }, [data]);

  const handleApplyFilters = () => {

    setFilters(tempFilters);

    setShowFilter(false);
  };

  const handleSortSelect = (option: string) => {
    setSortBy(option);
    setShowSortDropdown(false);
  };
  const handleRatingSelect = (r: number) => {
    setTempFilters((prev) => {
      const exists = prev.rating.includes(r);

      const updatedRatings = exists
        ? prev.rating.filter((item) => item !== r)
        : [...prev.rating, r];

      return {
        ...prev,
        rating: updatedRatings,
      };
    });
  };
  const handleLevelSelect = (lvl: string) => {
    setTempFilters((prev) => {
      if (lvl === "All") {
        return {
          ...prev,
          level: ["All"],
        };
      }

      let updatedLevels = prev.level.filter((item) => item !== "All");

      if (updatedLevels.includes(lvl)) {
        updatedLevels = updatedLevels.filter((item) => item !== lvl);
      } else {
        updatedLevels.push(lvl);
      }

      if (updatedLevels.length === 0) {
        updatedLevels = ["All"];
      }

      return {
        ...prev,
        level: updatedLevels,
      };
    });
  };
  const handlePriceSelect = (p: string) => {
    setTempFilters((prev) => {
      const exists = prev.price.includes(p);

      const updatedPrices = exists
        ? prev.price.filter((item) => item !== p)
        : [...prev.price, p];

      return {
        ...prev,
        price: updatedPrices,
      };
    });
  };
  const loadMore = ({ nativeEvent }) => {

    const paddingToBottom = 20;

    const isNearBottom =
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom;

    if (
      isNearBottom &&
      !loading &&
      !loadingMore &&
      hasMore
    ) {

      setLoadingMore(true);

      setPage((prev) => {

        const nextPage = prev + 1;

        console.log("📄 NEXT PAGE =>", nextPage);

        return nextPage;
      });
    }
  };

  if (!fontsLoaded) return null;

  if (loading && page === 1 && allCourses.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-white">

        <ActivityIndicator size="large" color="#F7931E" />
        <Text className="mt-4 text-base text-[#1F1F3D]">
          Courses Loading...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="light-content" backgroundColor="#002D3B" />

      {/* Header */}
      <View className="bg-[#002D3B] px-5 pt-3.5 pb-5 flex-row justify-between items-center rounded-b-3xl">
        <View>
          <Text className="text-3xl text-white font-bold">Hi, jahN 👋</Text>
          <Text className="text-sm text-[#D5E2E7] mt-1">
            Let’s start learning
          </Text>
        </View>

        <Image
          source={{
            uri: DEFAULT_AVATAR,
          }}
          className="w-[52px] h-[52px] rounded-full"
        />
      </View>

      {/* Search Bar */}
      <View className="px-4 mt-3">
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-2 border border-gray-200">

          <FontAwesome
            name="search"
            size={16}
            color="#6B7280"
          />

          <TextInput
            placeholder="Search courses..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
            className="flex-1 ml-3 text-black py-0"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={loadMore}
        scrollEventThrottle={200}
      >
        <View className="flex-1 bg-white pt-3">

          <View className="flex-row gap-3 mb-2 px-4">

            {/* Sort */}
            {/* Sort */}
            <View
              style={{
                position: "relative",
                zIndex: 9999,
              }}
            >
              <TouchableOpacity
                className="flex-row items-center justify-center gap-1 h-10 px-4 bg-white border border-gray-300 rounded-full"
                onPress={() =>
                  setShowSortDropdown(!showSortDropdown)
                }
              >
                <Text className="text-sm font-semibold text-[#1F1F3D]">
                  Sort
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={14}
                  color="#1F1F3D"
                />
              </TouchableOpacity>

              {showSortDropdown && (
                <>
                  {/* Outside Click */}
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                      setShowSortDropdown(false)
                    }
                    style={{
                      position: "absolute",
                      top: -1000,
                      bottom: -1000,
                      left: -1000,
                      right: -1000,
                    }}
                  />

                  {/* Your Existing Dropdown */}
                  <View
                    className="absolute top-[55px] left-0 w-[220px] bg-white rounded-[18px] border border-[#E5E7EB] z-10 shadow-md"
                    style={{ elevation: 20 }}
                  >
                    {sortOptions.map((option, index) => {
                      const isSelected = sortBy === option;

                      return (
                        <TouchableOpacity
                          key={index}
                          activeOpacity={0.8}
                          onPress={() => handleSortSelect(option)}
                          style={{
                            paddingVertical: 14,
                            paddingHorizontal: 16,
                            backgroundColor: isSelected
                              ? "#F7931E"
                              : "#FFFFFF",

                            borderBottomWidth:
                              index !== sortOptions.length - 1
                                ? 1
                                : 0,

                            borderBottomColor: "#F3F4F6",
                          }}
                        >
                          <Text
                            className={`text-base ${isSelected
                              ? "text-white"
                              : "text-black"
                              }`}
                            style={{
                              fontFamily: "PoppinsMedium",
                            }}
                          >
                            {option}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </>
              )}
            </View>

            {/* Filter */}
            <TouchableOpacity className="flex-row items-center justify-center gap-1 h-10 px-4 bg-white border border-gray-300 rounded-full"
              onPress={() => {
                setTempFilters(filters);
                setShowFilter(true);
              }}            >
              <Text className="text-sm font-semibold text-[#1F1F3D]">
                Filter
              </Text>

              <Feather name="sliders" size={14} color="#1F1F3D" />
            </TouchableOpacity>

          </View>

          <View className="flex-row justify-between items-center mb-4 px-4">
            <Text className="text-2xl text-[#1F1F3D]">
              All <Text className="text-[#F7931E]">Featured Courses</Text>
            </Text>

          </View>

          {allCourses.length > 0 ? (
            sortedCourses.map((item, index) => (

              <ListCourseCard
                key={index}
                title={item.title}
                desc={removeHtmlTags(item.description)}
                createdBy={"Nakshatrapedia"}
                duration={`${Math.floor(
                  item.customData.totalVideoDurationInHrs
                )} H`}
                lecture={`${item.customData.totalLectureCount} Lectures`}
                level={item.courseLevel.title}
                avgRating={item.avgRating}
                avgRatingCount={item.customData.totalRatingCount}
                oldPrice={`₹${item.offerAmountInInr || 0}`}
                price={`₹${item.amountInInr || 0}`}
                image={
                  item?.imageUrl && item.imageUrl.trim() !== ""
                    ? `${IMAGE_BASE_URL}${item.imageUrl}`
                    : PLACEHOLDER_URL
                }
                studentEnroll={`${item.customData.studentPurchaseCount} Enroll`}
                onPress={() => {
                  router.push({
                    pathname: "/CourseDetail",
                    params: { slug: item.slug },
                  });
                }}
              />

            ))
          ) : (
            <View className="flex-1 items-center justify-center mt-20 px-5">

              <FontAwesome
                name="search"
                size={60}
                color="#9CA3AF"
              />

              <Text className="text-xl font-bold text-[#1F1F3D] mt-4">
                No Courses Found
              </Text>

              <Text className="text-gray-500 text-center mt-2">
                Try changing your filters or search criteria.
              </Text>

            </View>
          )}

          {loadingMore && (
            <View className="flex-1 items-center justify-center bg-white">

              <ActivityIndicator size="large" color="#F7931E" />
              <Text className="mt-2 text-base text-[#1F1F3D]">
                More Course Loading...
              </Text>

            </View>
          )}

        </View>
      </ScrollView>
      {showFilter && (
        <>
          {/* Grey Background */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowFilter(false)}
            className="absolute inset-0"
          >

            <Animated.View
              entering={FadeIn.duration(250)}
              exiting={FadeOut.duration(200)}
              className="absolute inset-0 bg-gray-900/50"
            />
          </TouchableOpacity>


          {/* Bottom Sheet */}
          <Animated.View
            entering={SlideInDown.duration(450)}
            exiting={SlideOutDown.duration(350)}
            className="absolute bottom-0 left-0 right-0 bg-[#002D3B] px-5 pt-6 pb-8 rounded-t-[30px]"
            style={{
              elevation: 12,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 10,
            }}
          >
            <View className="items-center mb-5">
              <View className="w-14 h-1.5 rounded-full bg-gray-400" />
            </View>

            <Text className="text-2xl font-bold text-white mb-5">
              Filter Courses
            </Text>

            {/* Rating */}
            <Text className="mb-3 font-semibold text-white text-base">
              Rating
            </Text>

            <View className="flex-row flex-wrap mb-5">
              {[1, 2, 3, 4, 5].map((r) => {
                const isSelected = tempFilters.rating.includes(r);

                return (
                  <Text
                    key={r}
                    onPress={() => handleRatingSelect(r)}
                    className={`px-4 py-2 rounded-full mr-2 mb-2 ${isSelected
                      ? "bg-[#F9851C] text-white"
                      : "bg-white text-black"
                      }`}
                  >
                    {r}★
                  </Text>
                );
              })}
            </View>

            {/* Level */}
            <Text className="mb-3 font-semibold text-white text-base">
              Level
            </Text>

            <View className="flex-row flex-wrap mb-5">
              {["All", "Beginner", "Intermediate", "Expert"].map((lvl) => {
                const isSelected = tempFilters.level.includes(lvl);

                return (
                  <Text
                    key={lvl}
                    onPress={() => handleLevelSelect(lvl)}
                    className={`px-4 py-2 rounded-full mr-2 mb-2 ${isSelected
                      ? "bg-[#F9851C] text-white"
                      : "bg-white text-black"
                      }`}
                  >
                    {lvl}
                  </Text>
                );
              })}
            </View>

            {/* Price */}
            <Text className="mb-3 font-semibold text-white text-base">
              Price
            </Text>

            <View className="flex-row flex-wrap mb-5">
              {["Free", "Paid"].map((p) => {
                const isSelected = tempFilters.price.includes(p);

                return (
                  <Text
                    key={p}
                    onPress={() => handlePriceSelect(p)}
                    className={`px-4 py-2 rounded-full mr-2 mb-2 ${isSelected
                      ? "bg-[#F9851C] text-white"
                      : "bg-white text-black"
                      }`}
                  >
                    {p}
                  </Text>
                );
              })}
            </View>

            {/* Buttons */}
            <View className="flex-row mt-6">
              <CustomButton
                title="Cancel"
                variant="red"
                onPress={() => setShowFilter(false)}
                className="flex-1 mr-2"
              />

              <CustomButton
                title="Apply"
                variant="orange"
                onPress={handleApplyFilters}
                className="flex-1 ml-2"
              />
            </View>
          </Animated.View>
        </>
      )}
    </SafeAreaView>
  );
}