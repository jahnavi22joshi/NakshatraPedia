import { Ionicons } from "@expo/vector-icons";
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
import useAppFonts from "../config/useAppFonts";

export default function ListCourses1() {
  const courses = [
    {
      id: 1,
      title: "पाणिनीय शिक्षा - Hindi",
      desc: "महर्षि पाणिनि का शिक्षा ग्रन्थ - सटीक संस्कृत भाषा और वैदिक उच्चारण के लिए मूलभूत मार्गदर्शिका",
      createdBy: "Nakshatrapedia",
      duration: "13 hr 19 min",
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
      duration: "2 hr 32 min",
      lecture: "124 Lectures",
      level: "All Levels",
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
      duration: "13 hr 19 min",
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
      duration: "2 hr 32 min",
      lecture: "124 Lectures",
      level: "All Levels",
      oldPrice: "₹850",
      price: "₹551",
      image:
        "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
    },
  ];

  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

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

              <View style={styles.info}>
                <Image source={{ uri: item.image }} style={styles.courseImg} />

                <Text numberOfLines={1} style={styles.courseTitle}>
                  {item.title}
                </Text>

                <Text numberOfLines={2} style={styles.desc}>
                  {item.desc}
                </Text>


                <Text numberOfLines={1} style={styles.createdBy}>
                  {item.createdBy}
                </Text>

                {/* Student + Duration */}
                <View style={styles.metaRow}>
                  {/* <View style={styles.metaItem}>
                    <Ionicons
                      name="people-outline"
                      size={14}
                      color="#777"
                    />
                    <Text style={styles.metaText}>
                      {item.duration}
                    </Text>
                  </View> */}

                  <View style={styles.metaItem}>
                    {/* <Feather name="clock" size={13} color="#777" /> */}
                    <Text style={styles.metaText}>
                      {item.duration}
                    </Text>
                  </View>

                  <View style={styles.metaItem}>
                    {/* <Feather name="clock" size={13} color="#777" /> */}
                    <Text style={styles.metaText}>
                      {item.lecture}
                    </Text>
                  </View>

                  <View style={styles.metaItem}>
                    <Text style={styles.metaText}>
                      {item.level}
                    </Text>
                  </View>
                </View>

                {/* Rating + Price */}
                <View style={styles.bottomRow}>
                  <View style={styles.ratingWrap}>
                    <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                    <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                    <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                    <Ionicons name="star" size={14} color="#fbbf24" style={{ marginRight: 3 }} />
                    <Ionicons name="star" size={14} color="grey" style={{ marginRight: 6 }} />
                    <Text style={styles.rating}>
                      {/* {item.rating} */}
                    </Text>
                  </View>

                  <Text style={styles.oldPrice}>{item.oldPrice}</Text>

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
    backgroundColor: "#FFFFFF",
    top: 30,
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
    padding: 14,
    backgroundColor: 'white',
    marginBottom: 10
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
    borderRadius: 6,
    padding: 10,
    marginBottom: 14,
    elevation: 2,
    shadowRadius: 2,
  },

  courseImg: {
    width: '100%',
    height: 128,
    borderRadius: 6,
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
    marginTop: 8
  },

  desc: {
    fontSize: 14,
    color: "#777",
    lineHeight: 16,
    marginTop: 4,
    fontFamily: 'InterMedium',
  },

  createdBy: {
    fontSize: 14,
    color: "#777",
    lineHeight: 16,
    marginTop: 4,
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
    margin: 1
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


