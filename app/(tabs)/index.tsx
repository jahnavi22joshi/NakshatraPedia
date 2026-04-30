import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/button/BackButton';
import EnrollButton from '../components/button/EnrollButton';
import CourseCard from '../components/carts/CourseCard';
import CourseIncludes from '../components/carts/CourseIncludes';
import KitCard from '../components/carts/KitCard';
import MoreCourseCard from '../components/carts/MoreCourseCard';
import CourseTabs from '../components/tab/CourseTabsSection';
import useAppFonts from "../config/useAppFonts";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('coursecontent');
  const includesData = [
    { icon: 'videocam-outline', text: '2 hr 32 min video' },
    { icon: 'download-outline', text: 'Downloadable resources' },
    { icon: 'infinite-outline', text: 'Lifetime access' },
    { icon: 'phone-portrait-outline', text: 'Access on mobile and TV' },
    { icon: 'ribbon-outline', text: 'Certificate of completion' },
  ];

  const lessons = [
    {
      id: 1,
      title: 'प्रस्तावना',
      duration: '01 Lecture | 01 Mins',
      subLessons: [
        { title: 'Introduction', time: '01:44' },
      ],
    },
    {
      id: 2,
      title: 'सुभाषितम्',
      duration: '05 Lecture | 06 Mins',
      subLessons: [
        { title: 'स्वादुकाव्यरसोन्मिश्रं वाक्यार्थमुपभुञ्जते।...', time: '01:04' },
        { title: 'धर्मो यशो नयो दाक्ष्यं मनोहारि सुभाषितम्।...', time: '01:09' },
        { title: 'सुभाषितमयं द्रव्यं सङ्ग्रही न भवेन्नरः।...', time: '01:04' },
        { title: 'बोद्धारो मत्सरग्रस्ताः प्रभवः स्मय दूषिताः।...', time: '01:27' },
        { title: 'द्राक्षा म्लानमुखी जाता शर्करा चाश्मताङ्गता।...', time: '01:16' },
      ],
    },
    {
      id: 3,
      title: 'श्रीनाथजी दर्शनम्',
      duration: '04 Mins',
      subLessons: ['Morning Darshan', 'Rajbhog', 'Shayan'],
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleDropdown = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) return null;

  return (

    <View style={styles.container}>
      <ScrollView >
        <BackButton
          onPress={() => console.log('Button Pressed------123--')
          }
          color="white"
          style={styles.backButton}
        />

        {/* Header + Floating Button + Card */}
        <View style={styles.headerImage}>

          {/* Header Image */}
          <View style={styles.headerImage}>
            <Image
              source={{
                uri: "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
              }}
              style={styles.headerImageSize}
            />
          </View>

          {/* Floating Button */}
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => console.log('Floating Button Pressed')}
          >
            <Image
              // source={
              //   expandedId === item.id
              //     ? require("../assets/icons/chevron-up.png")
              //     : require("../assets/icons/chevron-down.png")
              // }
              source={require('../assets/icons/play.png')}
              style={styles.playButtonImage}
            />
          </TouchableOpacity>

        </View>

        {/* Course Info */}
        <View>
          <CourseCard
            title="सुभाषित प्रबोध - (Hindi)"
            subtitle="संस्कृत सुभाषितों का अद्वितीय संग्रह"
            rating={5}
            reviews={2}
            students={20}
            price={551}
            oldPrice={850}
            discount={35}
            onApply={() => console.log('Apply Coupon')}
            onAddToCart={() => console.log('Add to Cart')}
            onWishlist={() => console.log('Wishlist')}
            onBuyNow={() => console.log('Buy Now')}
          />
        </View>

        {/* Kit Card */}
        <KitCard
          styles={styles}
          title="Ultimate Sanskrit Learning Kit"
          image="https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
          price="₹899"
          discountPrice="₹3650"
          onPress={() => console.log("Clicked")}
        />

        {/* Course Includes */}
        <CourseIncludes items={includesData} />

        {/* Course Content */}
        <CourseTabs
          styles={styles}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          lessons={lessons}
          expandedId={expandedId}
          toggleDropdown={toggleDropdown}
        />

        {/* More Course */}
        <View style={styles.mccontainer}>
          <Text style={styles.heading}>More Courses</Text>

          <MoreCourseCard
            title="Learn Sanskrit Language"
            students={4581}
            duration="24 Hours"
            price={700}
            oldPrice={2100}
            image="https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2Fhero%202%20(1)%2009-12-2025.jpg&w=1920&q=100"
            onPress={() => console.log('Course Clicked')}
          />
        </View>
      </ScrollView>

      {/* Bottom Enroll Button */}
      <View style={styles.enrollBtn}>
        <EnrollButton
          price={551}
          oldPrice={850}
          onPress={() => console.log('Enroll Clicked')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 999,
    elevation: 10
  },
  headerImage: {
    position: 'relative'
  },
  headerImageSize: {
    width: '100%',
    height: 200,
  },

  playButton: {
    position: 'absolute',
    right: 30,
    bottom: -14,
    width: 63,
    height: 63,
    zIndex: 999,
    elevation: 10,
  },
  playButtonImage: {
    width: 63,
    height: 63,
    resizeMode: "contain",
  },
  kitMainCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 14,
    alignItems: "center",

    // Shadow for iOS
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,

    // Shadow for Android
    elevation: 4,
  },
  kitCartImage: {
    width: 99,
    height: 56,
    resizeMode: "cover",
  },
  kitTextContainer: {
    marginLeft: 8,
  },
  kitText: {
    fontFamily: 'HalantMedium',
    fontSize: 14,
    marginBottom: 12,
  },
  kitPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  kitPrice: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    color: "#0E3A52",
    marginRight: 8,
  },
  kitDiscount: {
    fontSize: 14,
    color: "#444",
    textDecorationLine: "line-through",
    fontFamily: 'PoppinsRegular',
  },
  courseContentText: {
    fontSize: 24,
    color: '#111',
    fontFamily: 'PlayfairSemiBold',
    marginTop: 10,
    marginHorizontal: 16
  },
  courseContentInfoText: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#111',
    marginTop: 4,
    marginHorizontal: 16
  },

  sessionRowInfoText: {
    fontSize: 14,
    fontFamily: 'JostSemiBold',
    color: '#111',
    marginTop: 4,
  },
  sessionRowInfoNumberText: {
    fontSize: 12,
    fontFamily: 'JostSemiBold',
    color: '#111',
    marginTop: 4,
  },
  requirementsText: {
    fontSize: 14,
    marginHorizontal: 10,
    fontFamily: 'PoppinsRegular'
  },
  descText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    fontFamily: 'PoppinsRegular',
    marginVertical: 6
  },
  viewMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
  },
  viewMoreText: {
    color: '#202244',
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
    fontWeight: '600',
  },
  downIcon: {
    marginLeft: 4, marginTop: 2
  },
  topRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateIcon: { flexDirection: 'row', marginVertical: 4 },
  courseRatingText: {
    fontSize: 20,
    color: '#1F2A44',
    marginVertical: 8,
    fontFamily: 'PlayfairSemiBold',
    marginBottom: 14
  },
  reviewSpace: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    marginTop: 16,
    paddingTop: 16,
  },
  enrollBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  subtitle: {
    color: '#666',
    marginVertical: 4,
    fontSize: 16,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4
  },

  oldPrice: {
    top: 2,
    marginHorizontal: 2,
    color: '#888',
    textDecorationLine: 'line-through',
  },

  discount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 4
  },
  includes: {
    backgroundColor: '#002B3B',
    padding: 14,
    marginHorizontal: 14,
    marginTop: 14,
    marginBottom: 14,
    borderRadius: 10,
  },

  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  tab: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#EDEDED',
  },

  tabText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'JostSemiBold'
  },

  tabWrapper: {
    backgroundColor: '#002B3B',
    paddingVertical: 10,
  },

  activeTabText: {
    color: '#F9851C',
    fontSize: 14,
    fontFamily: 'JostSemiBold'
  },

  content: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 5,

  },

  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  circle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleText: {
    color: '#333',
    fontFamily: 'Jost_600SemiBold',
    fontSize: 14
  },

  lessonInfo: {
    flex: 1,
    marginLeft: 12,
    marginTop: -10
  },

  lessonTitle: {
    fontSize: 18,
    fontFamily: 'Jost_600SemiBold',
  },

  duration: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
    fontFamily: 'Jost_600SemiBold',
  },

  playBtn: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#0a7c6b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  heading: {
    fontSize: 24,
    // marginBottom: 10,
    fontFamily: 'PlayfairSemiBold'
  },
  viewMore: {
    color: '#0a7c6b',
    marginTop: 10,
    fontWeight: '600',
  },

  ratingContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 10,
  },

  ratingValue: {
    fontSize: 36,
    fontFamily: 'PlayfairSemiBold',
    marginStart: 18,
  },

  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  reviewText: {
    marginTop: 10,
    marginStart: 50,
    fontFamily: 'PlayfairBold',
    fontSize: 18,
    marginHorizontal: 40
  },

  reviewBox: {
    marginTop: 10,
  },

  userName: {
    fontSize: 16,
    fontFamily: 'Jost_600SemiBold',
    fontWeight: 'bold'
  },

  reviewMsg: {
    marginTop: 4,
    fontFamily: 'Halant_500Medium'
  },

  reviewRow: {
    flexDirection: 'row',
    marginTop: 4,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  ratingBadge: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderWidth: 2.5,
    borderColor: '#4D81E5',
    backgroundColor: '#E8F1FF',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    height: 30
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
  },

  rateCount: {
    marginLeft: 4,
    marginRight: 10,
    fontSize: 12,
    fontWeight: 'bold'
  },

  enrollButton: {
    backgroundColor: "#FF7A00",
    borderRadius: 40,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  mccontainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dropdownBox: {
    paddingLeft: 58,
    paddingVertical: 8,
  },

  subLessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },

  subLessonTitle: {
    flex: 1,
    fontSize: 14,
    color: '#111',
    fontFamily: 'InterBold'
  },

  subLessonDuration: {
    fontSize: 12,
    color: '#666',
  },
  partitanLine: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  }
});
