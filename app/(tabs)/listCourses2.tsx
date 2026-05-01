import { Feather, Ionicons } from "@expo/vector-icons";
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

export default function CourseList() {
  const courses = [
    {
      id: 1,
      title: "पाणिनीय शिक्षा - Hindi",
      desc: "महर्षि पाणिनि का शिक्षा ग्रन्थ - सटीक संस्कृत भाषा और वैदिक उच्चारण के लिए मूलभूत मार्गदर्शिका",
      createdBy: "Nakshatrapedia",
      duration: "13 H",
      lecture: "48 Lectures",
      level: "All Levels",
      rating: "4.5",
      oldPrice: "₹1000",
      price: "₹500",
      image:
        "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2Fcourse%2FPaniniya-siksha-course-image-hindi-01%2015-01-2026.jpg&w=1920&q=100",
    },
    {
      id: 2,
      title: "सुभाषित प्रबोध - (Hindi)",
      desc: "संस्कृत सुभाषितों का अद्वितीय संग्रह",
      createdBy: "Nakshatrapedia",
      duration: "2 H",
      lecture: "124 Lectures",
      level: "All Levels",
      rating: "4",
      oldPrice: "₹850",
      price: "₹551",
      image:
        "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
    },
    {
      id: 1,
      title: "पाणिनीय शिक्षा - Hindi",
      desc: "महर्षि पाणिनि का शिक्षा ग्रन्थ - सटीक संस्कृत भाषा और वैदिक उच्चारण के लिए मूलभूत मार्गदर्शिका",
      createdBy: "Nakshatrapedia",
      duration: "13 H",
      lecture: "48 Lectures",
      level: "All Levels",
      rating: "4.5",
      oldPrice: "₹1000",
      price: "₹500",
      image:
        "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2Fcourse%2FPaniniya-siksha-course-image-hindi-01%2015-01-2026.jpg&w=1920&q=100",
    },
    {
      id: 2,
      title: "सुभाषित प्रबोध - (Hindi)",
      desc: "संस्कृत सुभाषितों का अद्वितीय संग्रह",
      createdBy: "Nakshatrapedia",
      duration: "2 H",
      lecture: "124 Lectures",
      level: "All Levels",
      rating: "4",
      oldPrice: "₹850",
      price: "₹551",
      image:
        "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#002D3B" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, jahN 👋</Text>
          <Text style={styles.subText}>Let’s start learning</Text>
        </View>

        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
          }}
          style={styles.avatar}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.heading}>
            All <Text style={styles.orange}>Featured Courses</Text>
          </Text>

          <View style={styles.grid}>
            {courses.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.courseImg} />

                <View style={styles.cardBody}>
                  <Text numberOfLines={1} style={styles.courseTitle}>
                    {item.title}
                  </Text>

                  <Text numberOfLines={2} style={styles.desc}>
                    {item.desc}
                  </Text>

                  {/* Info Row */}
                  <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                      <Feather name="clock" size={13} color="#777" />
                      <Text style={styles.infoText}>{item.duration}</Text>
                    </View>

                    <View style={styles.infoItem}>
                      <Ionicons
                        name="play-circle-outline"
                        size={14}
                        color="#777"
                      />
                      <Text style={styles.infoText}>
                        {item.lecture}
                      </Text>
                    </View>

                    <View style={styles.infoItem}>
                      <Feather name="bar-chart-2" size={13} color="#777" />
                      <Text style={styles.infoText}>{item.level}</Text>
                    </View>
                  </View>

                  {/* Bottom Row */}
                  <View style={styles.bottomRow}>
                    <View style={styles.ratingWrap}>
                      <Ionicons name="star" size={14} color="#fbbf24" />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>

                    <View style={styles.priceWrap}>
                      <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    top: 30
  },

  header: {
    backgroundColor: "#002D3B",
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
  },

  subText: {
    fontSize: 14,
    color: "#D7E2E8",
    marginTop: 4,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  content: {
    padding: 14,
    marginBottom: 20
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F1F3D",
    marginBottom: 14,
  },

  orange: {
    color: "#F7931E",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 4,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  courseImg: {
    width: "100%",
    height: 110,
  },

  cardBody: {
    padding: 10,
  },

  courseTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F1F3D",
  },

  desc: {
    fontSize: 12,
    color: "#7B7B8D",
    marginTop: 4,
    lineHeight: 16,
  },

  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 6,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F8",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },

  infoText: {
    fontSize: 10,
    color: "#555",
    marginLeft: 4,
  },

  bottomRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ratingWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    fontSize: 12,
    fontWeight: "700",
    color: "#fbbf24",
    marginLeft: 4,
  },
  priceWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  oldPrice: {
    fontSize: 12,
    color: "#1F1F3D",
    textDecorationLine: "line-through",
    marginRight: 4,
    marginTop: 2
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F1F3D",
  },
});