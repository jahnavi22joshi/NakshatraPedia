// components/CourseCard.tsx

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ListCourseCardProps {
    title: string;
    desc: string;
    createdBy: string;
    duration: string;
    lecture: string;
    level: string;
    studentEnroll: string;
    avgRating: number;
    avgRatingCount: number,
    oldPrice: string;
    price: string;
    image: string;
}

export default function ListCourseCard({
    title,
    desc,
    createdBy,
    duration,
    lecture,
    level,
    avgRating,
    avgRatingCount,
    studentEnroll,
    oldPrice,
    price,
    image,
}: ListCourseCardProps) {
    return (
        <View className="flex-row bg-white rounded-md mb-3.5 mx-3" style={styles.cardShadow}>
            <View className="flex-1 justify-between">
                <Image source={{ uri: image }} className="w-full h-40 rounded-t-md" />

                <Text numberOfLines={1} className="text-xl font-bold px-2.5 mt-2 text-[#1F1F3D]">
                    {title}
                </Text>

                <Text numberOfLines={2} className="text-sm text-gray-500 leading-4 mt-1 px-2.5">
                    {desc}
                </Text>

                <Text numberOfLines={1} className="text-sm text-gray-500 leading-4 mt-1 px-2.5">
                    {createdBy}
                </Text>

                <View className="flex-row mt-2 px-2.5">
                    <View className="flex-row items-center bg-gray-100 px-2 py-1 rounded-md mr-2">
                        <Text className="text-xs text-gray-600 font-semibold">{duration}</Text>
                    </View>

                    <View className="flex-row items-center bg-gray-100 px-2 py-1 rounded-md mr-2">
                        <Text className="text-xs text-gray-600 font-semibold">{lecture}</Text>
                    </View>

                    <View className="flex-row items-center bg-gray-100 px-2 py-1 rounded-md mr-2">
                        <Text className="text-xs text-gray-600 font-semibold">{level}</Text>
                    </View>

                    <View className="flex-row items-center bg-gray-100 px-2 py-1 rounded-md mr-2">
                        <Text className="text-xs text-gray-600 font-semibold">{studentEnroll}</Text>
                    </View>
                </View>

                <View className="flex-row justify-between items-center mt-2 px-2.5 mb-2">

                    {/* Stars */}
                    <View className="flex-row items-center">
                        <Ionicons name="star" size={14} color="#fbbf24" />
                        {/* <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                        <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                        <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                        <Ionicons name="star" size={14} color="grey" style={{ }} /> */}
                        <Text numberOfLines={1} className="text-xl font-bold px-1 mt-1 text-[#1F1F3D]">
                            {avgRating}
                        </Text>
                         <Text numberOfLines={1} className="text-xl font-bold mt-1 text-[#1F1F3D]">
                            ({avgRatingCount})
                        </Text>
                    </View>

                    {/* Price Group (RIGHT SIDE FIX) */}
                    <View className="flex-row items-center">

                        <Text className="text-sm text-gray-600 line-through mr-1 mt-0.5">
                            {oldPrice}
                        </Text>

                        <Text className="text-lg font-bold text-[#1F1F3D]">
                            {price}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardShadow: {
        elevation: 2,
        shadowRadius: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
    },
});