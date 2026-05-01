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
import { Ionicons, Feather } from "@expo/vector-icons";

export default function ListCourses1() {
  const courses = [
    {
      id: 1,
      title: "Subhaashita Prabodha",
      desc: "Learn timeless Sanskrit wisdom through classic verses.",
      students: "21",
      duration: "2H",
      rating: "4.5",
      price: "₹499",
      image:
        "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2Fcourse%2FPaniniya-siksha-course-image-hindi-01%2015-01-2026.jpg&w=1920&q=100",
    },
    {
      id: 2,
      title: "Learn Sanskrit Basics",
      desc: "Master grammar, pronunciation and daily vocabulary.",
      students: "15",
      duration: "3H",
      rating: "4.7",
      price: "₹399",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800",
    },
    {
      id: 3,
      title: "Bhagavad Gita Wisdom",
      desc: "Explore practical teachings of the Bhagavad Gita.",
      students: "30",
      duration: "5H",
      rating: "4.9",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
    },
    {
      id: 4,
      title: "Vedic Philosophy",
      desc: "Understand ancient Vedic thought and life values.",
      students: "18",
      duration: "4H",
      rating: "4.6",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800",
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

          {courses.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.courseImg} />

              <View style={styles.info}>
                <Text numberOfLines={1} style={styles.courseTitle}>
                  {item.title}
                </Text>

                <Text numberOfLines={2} style={styles.desc}>
                  {item.desc}
                </Text>

                {/* Student + Duration */}
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <Ionicons
                      name="people-outline"
                      size={14}
                      color="#777"
                    />
                    <Text style={styles.metaText}>
                      {item.students}
                    </Text>
                  </View>

                  <View style={styles.metaItem}>
                    <Feather name="clock" size={13} color="#777" />
                    <Text style={styles.metaText}>
                      {item.duration}
                    </Text>
                  </View>
                </View>

                {/* Rating + Price */}
                <View style={styles.bottomRow}>
                  <View style={styles.ratingWrap}>
                    <Ionicons
                      name="star"
                      size={14}
                      color="#F7931E"
                    />
                    <Text style={styles.rating}>
                      {item.rating}
                    </Text>
                  </View>

                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    top:30
  },

  header: {
    backgroundColor: "#002D3B",
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },

  subText: {
    fontSize: 14,
    color: "#D5E2E7",
    marginTop: 4,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  content: {
    padding: 15,
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

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 10,
    marginBottom: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  courseImg: {
    width: 110,
    height: 128,
    borderRadius: 14,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },

  courseTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F1F3D",
  },

  desc: {
    fontSize: 12,
    color: "#777",
    lineHeight: 17,
    marginTop: 3,
  },

  metaRow: {
    flexDirection: "row",
    marginTop: 8,
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
  },

  ratingWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    fontSize: 12,
    fontWeight: "700",
    color: "#F7931E",
    marginLeft: 4,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F1F3D",
  },
});


