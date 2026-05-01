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
    oldPrice,
    price,
    image,
}: ListCourseCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.info}>
                <Image source={{ uri: image }} style={styles.courseImg} />

                <Text numberOfLines={1} style={styles.courseTitle}>
                    {title}
                </Text>

                <Text numberOfLines={2} style={styles.desc}>
                    {desc}
                </Text>

                <Text numberOfLines={1} style={styles.createdBy}>
                    {createdBy}
                </Text>

                <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                        <Text style={styles.metaText}>{duration}</Text>
                    </View>

                    <View style={styles.metaItem}>
                        <Text style={styles.metaText}>{lecture}</Text>
                    </View>

                    <View style={styles.metaItem}>
                        <Text style={styles.metaText}>{level}</Text>
                    </View>
                </View>

                <View style={styles.bottomRow}>
                    <View style={styles.ratingWrap}>
                        <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                        <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                        <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                        <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                        <Ionicons name="star" size={14} color="grey" style={{ marginRight: 6 }} />
                    </View>

                    <Text style={styles.oldPrice}>{oldPrice}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 6,
        marginBottom: 14,
        elevation: 2,
        shadowRadius: 2,
    },

    courseImg: {
        width: "100%",
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
        fontWeight: "bold",
        paddingHorizontal: 10,
        marginTop: 8,
    },

    desc: {
        fontSize: 14,
        color: "#777",
        lineHeight: 16,
        marginTop: 4,
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
        fontWeight: "600",
    },

    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        paddingHorizontal: 10,
        marginBottom: 8,
    },

    ratingWrap: {
        flexDirection: "row",
        alignItems: "center",
    },

    oldPrice: {
        fontSize: 14,
        color: "#1F1F3D",
        marginStart: 130,
        textDecorationLine: "line-through",
        marginTop: 4,
    },

    price: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1F1F3D",
    },
});