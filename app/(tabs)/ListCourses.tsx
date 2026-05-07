import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../components/button/CustomButton";
import ListCourseCard from "../components/carts/ListCourseCard";
import useAppFonts from "../config/useAppFonts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCourses } from "../redux/slices/CourseSlice";
import { removeHtmlTags } from '../utils/helpers';
export default function ListCourses() {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    PLACEHOLDER_URL,
    IMAGE_BASE_URL,
    DEFAULT_AVATAR,
  } = Constants.expoConfig?.extra || {};

  const { data, loading, error } = useAppSelector((state) => state.courses);
  const [fontsLoaded] = useAppFonts();

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

  const [filters, setFilters] = React.useState({
    rating: null,
    category: [],
    level: [],
    price: null,
  });

  const [showFilter, setShowFilter] = React.useState(false);

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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 bg-white pt-6">
          <View className="flex-row justify-between items-center mb-4 px-4">
            {/* Left Text */}
            <Text className="text-2xl text-[#1F1F3D]">
              All <Text className="text-[#F7931E]">Featured Courses</Text>
            </Text>

            {/* Right Icon */}
            <TouchableOpacity onPress={() => setShowFilter(true)}>
              <FontAwesome name="filter" size={35} color="black" />
            </TouchableOpacity>
          </View>

          {data?.data?.data?.map((item, index) => (

            <ListCourseCard
              key={index}
              title={item.title}
              desc={removeHtmlTags(item.description)}
              // createdBy={item.createdBy || "Nakshatrapedia"}
              createdBy={'Nakshatrapedia'}
              duration={`${Math.floor(item.customData.totalVideoDurationInHrs)} H`}
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
                  pathname: "/(tabs)/CourseDetail",
                  params: { slug: item.slug },
                });
              }}
            />

          ))}
        </View>
      </ScrollView>
      {showFilter && (
        <View className="absolute bottom-0 left-0 right-0  bg-[#002D3B] rounded-t-3xl p-5 shadow-lg mx-2.5">

          <Text className="text-xl color-white font-bold mb-4">Filter Courses</Text>

          {/* Rating */}
          <Text className="mb-2 font-semibold color-white">Rating</Text>
          <View className="flex-row mb-4">
            {[1, 2, 3, 4, 5].map((r) => (
              <Text
                key={r}
                onPress={() =>
                  setFilters((prev) => ({
                    ...prev,
                    rating: prev.rating === r ? null : r,
                  }))
                }
                className={`px-3 py-1.5 rounded-full mr-2 ${filters.rating === r ? "bg-[#F9851C]" : "bg-gray-100"
                  } ${filters.rating === r ? "text-white" : "text-black"}`}
              >
                {r}★
              </Text>
            ))}
          </View>

          {/* Level */}
          <Text className="mb-2 font-semibold text-white">Level</Text>

          <View className="flex-row mb-4 flex-wrap">
            {["All", "Beginner", "Intermediate", "Expert"].map((lvl) => {
              const isSelected =
                lvl === "All"
                  ? filters.level.length === 0
                  : filters.level.includes(lvl);

              return (
                <Text
                  key={lvl}
                  onPress={() => {
                    if (lvl === "All") {
                      // Reset everything → show all courses
                      setFilters((prev) => ({
                        ...prev,
                        level: [],
                      }));
                    } else {
                      setFilters((prev) => {
                        const exists = prev.level.includes(lvl);

                        let updatedLevels = exists
                          ? prev.level.filter((l) => l !== lvl)
                          : [...prev.level, lvl];

                        return {
                          ...prev,
                          level: updatedLevels,
                        };
                      });
                    }
                  }}
                  className={`px-3 py-1.5 rounded-full mr-2 mb-2 ${isSelected ? "bg-[#F9851C]" : "bg-gray-100 border border-gray-200"
                    } ${isSelected ? "text-white font-semibold" : "text-black"}`}
                >
                  {lvl}
                </Text>
              );
            })}
          </View>

          {/* Price */}
          <Text className="mb-2 font-semibold color-white">Price</Text>
          <View className="flex-row mb-4">
            {["Free", "Paid"].map((p) => (
              <Text
                key={p}
                onPress={() =>
                  setFilters((prev) => ({
                    ...prev,
                    price: prev.price === p ? null : p,
                  }))
                }
                className={`px-3 py-1.5 rounded-full mr-2 ${filters.price === p ? "bg-[#F9851C]" : "bg-gray-100"
                  } ${filters.price === p ? "text-white" : "text-black"}`}
              >
                {p}
              </Text>
            ))}
          </View>

          {/* Buttons */}
          <View className="flex-row justify-between mt-4">
            <CustomButton
              title="Cancel"
              variant="blue"
              onPress={() => setShowFilter(false)}

              className=" flex-[0.5] mr-2"
            />

            <CustomButton
              title="Apply"
              variant="orange"
              onPress={() => {
                const payload = {
                  filters: {
                    keyword: "",
                    Category: filters.category,
                    SubCategory: [],
                    Level: filters.level,
                    isFree:
                      filters.price === "Free"
                        ? true
                        : filters.price === "Paid"
                          ? false
                          : null,
                    ratingCount: filters.rating ? [filters.rating] : [],
                  },
                  page: 1,
                };

                dispatch(fetchCourses(payload));
                setShowFilter(false);
              }}
              className=" flex-[0.5] mr-2"
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}