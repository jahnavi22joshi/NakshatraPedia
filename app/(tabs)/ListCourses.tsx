import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import ListCourseCard from "../components/carts/ListCourseCard";
import useAppFonts from "../config/useAppFonts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCourses } from "../redux/slices/CourseSlice";
import { removeHtmlTags } from '../utils/helpers';
import { useFocusEffect } from "@react-navigation/native";
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

  if (!fontsLoaded) return null;

  if (loading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text>Loading courses...</Text>
      </SafeAreaView>
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
          <Text className="text-2xl text-[#1F1F3D] mb-4 px-2">
            All <Text className="text-[#F7931E]">Featured Courses</Text>
          </Text>

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
    </SafeAreaView>
  );
}