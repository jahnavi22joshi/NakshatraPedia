import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListCourseCard from "../components/carts/ListCourseCard";
import useAppFonts from "../config/useAppFonts";

export default function ListCourses1() {

  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <StatusBar barStyle="light-content" backgroundColor="#002D3B" />

      {/* Header */}
      <View className="bg-[#002D3B] px-5 pt-3.5 pb-5 flex-row justify-between items-center rounded-b-3xl">
        <View>
          <Text className="text-3xl text-white font-bold">Hi, jahN 👋</Text>
          <Text className="text-sm text-[#D5E2E7] mt-1">Let’s start learning</Text>
        </View>

        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
          }}
          className="w-[52px] h-[52px] rounded-full" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 bg-white pt-6 ">
          <Text className="text-2xl text-[#1F1F3D] mb-4 px-2"
          >
            All <Text className="text-[#F7931E]">Featured Courses</Text>
          </Text>

          <ListCourseCard
            title="पाणिनीय शिक्षा - Hindi"
            desc="महर्षि पाणिनि का शिक्षा ग्रन्थ - सटीक संस्कृत भाषा और वैदिक उच्चारण के लिए मूलभूत मार्गदर्शिका"
            createdBy="Nakshatrapedia"
            duration="13 hr 19 min"
            lecture="48 Lectures"
            level="All Levels"
            oldPrice="₹1000"
            price="₹500"
            image="https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2Fcourse%2FPaniniya-siksha-course-image-hindi-01%2015-01-2026.jpg&w=1920&q=100"
          />

          <ListCourseCard
            title="सुभाषित प्रबोध - (Hindi)"
            desc="महर्षि पाणिनि का शिक्षा ग्रन्थ - सटीक संस्कृत भाषा और वैदिक उच्चारण के लिए मूलभूत मार्गदर्शिका"
            createdBy="Nakshatrapedia"
            duration="2 hr 32 min"
            lecture="124 Lectures"
            level="All Levels"
            oldPrice="₹850"
            price="₹551"
            image="https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
          />

          <ListCourseCard
            title="पाणिनीय शिक्षा - Hindi"
            desc="महर्षि पाणिनि का शिक्षा ग्रन्थ - सटीक संस्कृत भाषा और वैदिक उच्चारण के लिए मूलभूत मार्गदर्शिका"
            createdBy="Nakshatrapedia"
            duration="13 hr 19 min"
            lecture="48 Lectures"
            level="All Levels"
            oldPrice="₹1000"
            price="₹500"
            image="https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2Fcourse%2FPaniniya-siksha-course-image-hindi-01%2015-01-2026.jpg&w=1920&q=100"
          />

          <ListCourseCard
            title="सुभाषित प्रबोध - (Hindi)"
            desc="महर्षि पाणिनि का शिक्षा ग्रन्थ - सटीक संस्कृत भाषा और वैदिक उच्चारण के लिए मूलभूत मार्गदर्शिका"
            createdBy="Nakshatrapedia"
            duration="2 hr 32 min"
            lecture="124 Lectures"
            level="All Levels"
            oldPrice="₹850"
            price="₹551"
            image="https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  content: {
    padding: 14,
    backgroundColor: 'white',
    marginBottom: 10
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 6,
    marginBottom: 14,
    elevation: 2,
    shadowRadius: 2,
  },
  courseImg: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  courseTitle: {
    fontSize: 20,
    color: "#1F1F3D",
    fontFamily: 'InterMedium',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 8
  },
  desc: {
    fontSize: 14,
    color: "#777",
    lineHeight: 16,
    marginTop: 4,
    fontFamily: 'InterMedium',
    paddingHorizontal: 10,
  },
  createdBy: {
    fontSize: 14,
    color: "#777",
    lineHeight: 16,
    marginTop: 4,
    paddingHorizontal: 10,
  },
  metaRow: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 10,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F8",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  metaText: {
    fontSize: 12,
    color: "#555",
    marginLeft: 4,
    fontWeight: "600",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 10,
    marginBottom: 8
  },
  ratingWrap: {
    flexDirection: "row",
    alignItems: "center",
    margin: 2
  },
  rating: {
    fontSize: 12,
    fontWeight: "700",
    color: "#F7931E",
    marginLeft: 4,
  },
  oldPrice: {
    fontSize: 14,
    color: "#1F1F3D",
    marginStart: 130,
    textDecorationLine: 'line-through',
    marginTop: 4
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F1F3D",
  },
});


