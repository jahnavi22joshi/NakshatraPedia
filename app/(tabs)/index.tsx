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
    <View className='flex-1 bg-white'>
      <ScrollView>
        <BackButton
          onPress={() => console.log('Button Pressed------123--')
          }
          color="white"
          style={{ elevation: 10 }}
          className="absolute top-[50px] left-5 z-50"
        />

        {/* Header + Floating Button + Card */}
        <View className="relative">
          {/* Header Image */}
          <View className="relative">
            <Image
              source={{
                uri: "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
              }}
              className='w-full h-[200px]'
            />
          </View>

          {/* Floating Button */}
          <TouchableOpacity
            className="absolute right-[30px] bottom-[-14px] w-[63px] h-[63px] z-50"
            style={{ elevation: 10 }}
            onPress={() => console.log('Floating Button Pressed')}
          >
            <Image
              // source={
              //   expandedId === item.id
              //     ? require("../assets/icons/chevron-up.png")
              //     : require("../assets/icons/chevron-down.png")
              // }
              source={require('../assets/icons/play.png')}
              className="w-[63px] h-[63px]"
              resizeMode="contain"
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
        <View className="bg-white py-2.5 px-5">
          <Text className="text-2xl"
            style={{ fontFamily: 'PlayfairSemiBold' }}>More Courses</Text>

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
      <View className="absolute bottom-0 left-0 right-0 py-2">
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



  activeTab: {
    backgroundColor: '#EDEDED',
  },


  activeTabText: {
    color: '#F9851C',
    fontSize: 14,
    fontFamily: 'JostSemiBold'
  },
  playBtn: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#0a7c6b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewMore: {
    color: '#0a7c6b',
    marginTop: 10,
    fontWeight: '600',
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  reviewBox: {
    marginTop: 10,
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
});