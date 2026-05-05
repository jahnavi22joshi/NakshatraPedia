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

export default function ListCourses1() {

  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.courses);

  console.log("🔥 Redux State:", { data, loading, error });

  const [fontsLoaded] = useAppFonts();

  useEffect(() => {
    console.log("🚀 API CALL TRIGGERED");

    const payload = {
      filters: {
        keyword: "",
        Category: [],
        SubCategory: [],
        Level: [],
        isFree: null,
        ratingCount: [],
      },
      limit: 4,
      page: 1,
    };

    dispatch(fetchCourses(payload));
  }, []);

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
  const IMAGE_BASE_URL = "https://testadmin.nakshatrapedia.com/uploads/";
  const removeHtmlTags = (html) => {
    return html?.replace(/<[^>]*>/g, "") || "";
  };

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
            uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
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
              createdBy={item.createdBy || "Nakshatrapedia"}
              duration={`${Math.floor(item.customData.totalVideoDurationInHrs)} H`}
              lecture={`${item.customData.totalLectureCount} Lectures`}
              level={item.courseLevel.title}
              avgRating={item.avgRating}
              avgRatingCount={item.customData.totalRatingCount}
              oldPrice={`₹${item.offerAmountInInr || 0}`}
              price={`₹${item.amountInInr || 0}`}
              image={`${IMAGE_BASE_URL}${item.imageUrl}`}
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