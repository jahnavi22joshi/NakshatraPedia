import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
import Animated, { FadeIn, FadeOut, SlideInLeft, SlideOutLeft } from "react-native-reanimated";
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
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);

  useFocusEffect(
    React.useCallback(() => {
      const payload = {
        filters: {
          keyword: "",
          Category: [],
          SubCategory: [],
          Level: [],
          isFree: null,
          ratingCount: [],
        },
        page: 1,
      };
      dispatch(fetchCourses(payload));
    }, [])
  );

  // Add this state
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    "Newest First",
    "Oldest First",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const [filters, setFilters] = React.useState({
    rating: [],
    category: [],
    subCategory: [],
    level: [],
    price: [],
  });

  const [showFilter, setShowFilter] = React.useState(false);

  const [visibleCount, setVisibleCount] = useState(3);

  const courses = data?.data?.data || [];
  const [searchText, setSearchText] = useState("");


  // Search Filter
  const filteredCourses = courses.filter((item) =>
    item.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {

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

  const handleSortSelect = (option: string) => {
    setSortBy(option);
    setShowSortDropdown(false);
  };

  const handleRatingSelect = (r: number) => {
    setFilters((prev) => {
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
    setFilters((prev) => {
      const exists = prev.level.includes(lvl);

      const updatedLevels = exists
        ? prev.level.filter((l) => l !== lvl)
        : [...prev.level, lvl];

      return {
        ...prev,
        level: updatedLevels,
      };
    });
  };

  const handlePriceSelect = (p: string) => {
    setFilters((prev) => {
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

  const handleApplyFilters = () => {
    const payload = {
      filters: {
        keyword: "",
        Category: filters.category,
        SubCategory: filters.subCategory,

        Level:
          filters.level.includes("All") ||
            filters.level.includes("Expert")
            ? []
            : filters.level,

        isFree:
          filters.price.length === 1
            ? filters.price.includes("Free")
              ? true
              : false
            : null,

        ratingCount: filters.rating,
      },
      page: 1,
    };

    dispatch(fetchCourses(payload));
    setShowFilter(false);
  };

  const loadMore = ({ nativeEvent }) => {
    const paddingToBottom = 20;

    const isNearBottom =
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom;


    if (isNearBottom && visibleCount < filteredCourses.length) {
      setVisibleCount((prev) => prev + 3);
    }
  };


  if (!fontsLoaded) return null;

  if (loading) {
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

      <View className="flex-row items-center">

        {/* Sort Dropdown */}
        <View
          className="relative mr-3"
          style={{
            zIndex: 1000,
            elevation: 999,
          }}
        >



          {/* Dropdown */}
          {showSortDropdown && (
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
                        index !== sortOptions.length - 1 ? 1 : 0,

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
                )
              })}
            </View>
          )}
        </View>
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

          <View className="flex-row justify-between items-center mb-4 px-4">

            <Text className="text-2xl text-[#1F1F3D]">
              All <Text className="text-[#F7931E]">Featured Courses</Text>
            </Text>

            <View className="flex-row items-center">

              {/* Sort */}
              <TouchableOpacity
                onPress={() => setShowSortDropdown(!showSortDropdown)}
                className="mr-4"
              >
                <FontAwesome name="sort" size={28} color="black" />
              </TouchableOpacity>

              {/* Filter */}
              <TouchableOpacity onPress={() => setShowFilter(true)}>
                <FontAwesome name="filter" size={28} color="black" />
              </TouchableOpacity>

            </View>

          </View>

          {filteredCourses.length > 0 ? (
            sortedCourses.slice(0, visibleCount).map((item, index) => (

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

          {visibleCount < sortedCourses.length && (
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
          {/* Overlay */}
          <Animated.View
            entering={FadeIn.duration(180)}
            exiting={FadeOut.duration(180)}
            className="absolute inset-0 bg-black/30"
          />

          {/* Filter Drawer */}
          <Animated.View
            entering={SlideInLeft.duration(250)}
            exiting={SlideOutLeft.duration(220)}
            className="absolute top-0 bottom-0 left-0 w-[80%] bg-[#002D3B] px-5 pt-16 pb-8"
            style={{
              elevation: 10,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 6,
            }}
          >
            <Text className="text-2xl font-bold text-white mb-5">
              Filter Courses
            </Text>

            {/* Rating */}
            <Text className="mb-3 font-semibold text-white text-base">
              Rating
            </Text>

            <View className="flex-row flex-wrap mb-5">
              {[1, 2, 3, 4, 5].map((r) => {
                const isSelected = filters.rating.includes(r);

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
                const isSelected = filters.level.includes(lvl);

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
                const isSelected = filters.price.includes(p);

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
                variant="blue"
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