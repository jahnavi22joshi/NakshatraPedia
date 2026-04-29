import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/button/BackButton';
import EnrollButton from '../components/button/EnrollButton';
import CourseCard from '../components/carts/CourseCard';
import CourseIncludes from '../components/carts/CourseIncludes';
import MoreCourseCard from '../components/carts/MoreCourseCard';


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

  return (

    <View style={styles.container}>
      <ScrollView>
        <BackButton
          onPress={console.log('Button Pressed------123--')
          }
          color="white"
          style={{
            position: 'absolute',
            top: 50,
            left: 20,
            zIndex: 999,
            elevation: 10
          }}
        />

        {/* Header + Floating Button + Card */}
        <View style={{ position: 'relative' }}>

          {/* Header Image */}
          <View style={styles.header}>
            <Image
              source={{
                uri: "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
              }}
              style={{
                width: '100%',
                height: 200,
              }}
            />
          </View>

          {/* Floating Button */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 30,
              bottom: -15,
              width: 63,
              height: 63,
              zIndex: 999,
              elevation: 10,
            }}
            onPress={() => console.log('Floating Button Pressed')}
          >
            <Image
              // source={
              //   expandedId === item.id
              //     ? require("../assets/icons/chevron-up.png")
              //     : require("../assets/icons/chevron-down.png")
              // }
              source={require('../assets/icons/play.png')}
              style={{
                width: 63,
                height: 63,
                resizeMode: "contain",
              }}
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
        <TouchableOpacity style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          borderRadius: 22,
          paddingVertical: 17,
          paddingHorizontal: 15,
          marginHorizontal: 16,
          marginVertical: 15,
          alignItems: "center",

          // Shadow for iOS
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 8,

          // Shadow for Android
          elevation: 4,
        }} activeOpacity={0.9}>
          {/* Left Image */}
          <Image
            source={{
              uri: "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100",
            }}
            style={{
              width: 99,
              height: 56,
              resizeMode: "cover",
            }}
          />

          {/* Right Content */}
          <View style={{
            flex: 1,
            marginLeft: 9,
            justifyContent: "space-between",
          }}>
            <Text style={{
              fontSize: 14,
              fontWeight: "500",
              color: "#1D1D3C",
              marginBottom: 15,
              fontFamily: 'HalantMedium'
            }}>Ultimate Sanskrit Learning Kit</Text>

            <View style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
              <Text style={{
                fontSize: 14,
                color: "#0E3A52",
                marginRight: 9,
                fontFamily: 'PoppinsMedium',

              }}>₹899</Text>
              <Text style={{
                fontSize: 14,
                color: "#444",
                textDecorationLine: "line-through",
                fontFamily: 'PoppinsMedium',

              }}>₹3650</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Course Includes */}
        <CourseIncludes items={includesData} />

        {/* Course Content */}
        <View style={styles.tabWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabContainer}
          >
            {['Course Content', 'Requirements', 'Description', 'Rating'].map((tab, index) => {
              const key = tab.toLowerCase().replace(' ', '');

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveTab(key)}
                  style={[
                    styles.tab,
                    activeTab === key && styles.activeTab
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === key && styles.activeTabText
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {activeTab === 'coursecontent' && (
          <View style={styles.content}>
            <Text style={{
              fontSize: 24,
              color: '#111',
              fontFamily: 'PlayfairSemiBold'
            }}>
              Course Content
            </Text>

            <Text style={{
              fontSize: 12,
              fontFamily: 'InterMedium',
              color: '#111',
              marginVertical: 5
            }}>
              28 sections | 124 lectures | 1 hr 32 min
            </Text>
            {lessons.map((item, index) => (
              <View key={item.id}>
                {/* Main Row */}
                <TouchableOpacity
                  style={styles.lessonRow}
                  onPress={() => toggleDropdown(item.id)}
                >
                  {/* Left Circle */}
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>
                      {(index + 1).toString().padStart(2, '0')}
                    </Text>
                  </View>

                  {/* Middle Content */}
                  <View style={styles.lessonInfo}>
                    <Text style={styles.lessonTitle}>{item.title}</Text>
                    <Text style={styles.duration}>{item.duration}</Text>
                  </View>

                  {/* Right Down Arrow */}
                  <Image
                    source={require('../assets/icons/course-play.png')}
                    width={18}
                    height={18}
                  />
                </TouchableOpacity>


                {/* Dropdown List */}
                {expandedId === item.id && (
                  <View style={styles.dropdownBox}>
                    {item.subLessons.map((sub, i) => (
                      <TouchableOpacity key={i} style={styles.subLessonRow}>

                        {/* Left Icon */}
                        <Ionicons
                          name="desktop-outline"
                          size={20}
                          color="#555"
                          style={{ marginRight: 12 }}
                        />

                        {/* Title */}
                        <Text style={styles.subLessonTitle}> {typeof sub === 'string' ? sub : sub.title}</Text>

                        {/* Duration */}
                        <Text style={styles.subLessonDuration}> {typeof sub === 'string' ? sub : sub.time}</Text>

                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}

          </View>
        )}

        {activeTab === 'requirements' && (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>Requirements</Text>

            <View style={{ marginTop: 10, }}>
              <View style={styles.pointRow}>
                <Ionicons name="checkmark-circle-outline" size={18} color="#002B3B" />
                <Text style={{
                  fontSize: 16,
                  color: '#555',
                  lineHeight: 20,
                  marginHorizontal: 5,
                  fontFamily: 'PoppinsRegular'
                }}>पूर्व ज्ञान की आवश्यकता नहीं है</Text>
              </View>
            </View>
          </View>)}

        {activeTab === 'description' && (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>Description</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
              fontFamily: 'PoppinsRegular'
            }}>सुभाषित प्रबोध - यह एक ऐसा संग्रह है जिसमें सुभाषितों (सुविचारों) का ध्यान-पूर्वक चयन किया गया है।</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
              marginVertical: 5,
              fontFamily: 'PoppinsRegular'
            }}>प्रत्येक सुभाषित को निम्न प्रकार से प्रस्तुत किया गया है :</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
              fontFamily: 'PoppinsRegular'
            }}>- स्पष्ट उच्चारण</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
              marginVertical: 5,
              fontFamily: 'PoppinsRegular'
            }}>और इसमें व्याकरणिक विश्लेषण भी है जैसे :</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
              fontFamily: 'PoppinsRegular'
            }}>- सरल पदच्छेद</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
              marginVertical: 5,
              fontFamily: 'PoppinsRegular'
            }}>- अनुवाद</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
            }}>- अन्वय - अर्थात् सुभाषित का गद्य रूप समझाया गया है।</Text>

            <Text style={{
              fontSize: 14,
              color: '#555',
              lineHeight: 20,
              marginVertical: 5,
              fontFamily: 'PoppinsRegular'
            }}>यह संग्रह संस्कृत भाषा सीखने वालों को संस्कृत शब्दावली (vocabulary) बढ़ाने में भी सहायता करेगा।</Text>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: '#202244',
                  fontSize: 15,
                  fontFamily: 'PoppinsRegular',
                  fontWeight: '600',
                }}
              >
                View More
              </Text>

              <Ionicons
                name="chevron-down"
                size={18}
                color="#202244"
                style={{ marginLeft: 4, marginTop: 2 }}
              />
            </TouchableOpacity>
          </View>)}

        {activeTab === 'rating' && (
          <View style={styles.ratingContainer}>

            {/* Top Rating */}
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <Text style={styles.ratingValue}>4.5</Text>
              <Text style={[styles.reviewText, { marginTop: 15, marginStart: 50 }]}>2 Reviews</Text>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Ionicons
                  key={i}
                  name={i <= 4 ? "star" : "star-half"}
                  size={18}
                  color="#F9851C"
                />
              ))}
            </View>

            <Text style={{
              fontSize: 20,
              color: '#1F2A44',
              marginVertical: 8,
              fontFamily: 'PlayfairSemiBold'

            }}>Course Rating</Text>

            {/* Review 1 */}
            <View style={styles.reviewRow}>
              <View style={styles.avatar}>
                <Text>DJ</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.userName}>Dhairya Joshi</Text>
                <Text style={styles.reviewMsg}>
                  "Really this collection is gems of wisdom..."
                </Text>

                <View style={styles.metaRow}>
                  <Ionicons name="heart" size={16} color="red" />
                  <Text style={styles.metaText}>21</Text>

                  <Text style={styles.metaText}>January 21, 2025</Text>
                </View>
              </View>

              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={14} color="#F9851C" />
                <Text style={{ marginLeft: 4 }}>5.0</Text>
              </View>
            </View>

            {/* Review 2 */}
            <View style={styles.reviewRow}>
              <View style={styles.avatar}>
                <Text>DT</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.userName}>Divya T</Text>
                <Text style={styles.reviewMsg}>
                  "Very nicely explained."
                </Text>

                <View style={styles.metaRow}>
                  <Ionicons name="heart" size={16} color="red" />
                  <Text style={styles.metaText}>211</Text>

                  <Text style={styles.metaText}>November 10, 2025</Text>
                </View>
              </View>

              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={14} color="#F9851C" />
                <Text style={{ marginLeft: 4 }}>5.0</Text>
              </View>
            </View>

          </View>)}

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
      <EnrollButton
        price={551}
        oldPrice={850}
        onPress={() => console.log('Enroll Clicked')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    position: 'relative'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  subtitle: {
    color: '#666',
    marginVertical: 5,
    fontSize: 16,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5
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
    marginHorizontal: 5
  },
  includes: {
    backgroundColor: '#002B3B',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
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
    borderRadius: 20,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#EDEDED',
  },

  tabText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'JostSemiBold'
  },

  tabWrapper: {
    backgroundColor: '#063B44',
    paddingVertical: 10,
  },

  activeTabText: {
    color: '#F9851C',
    fontSize: 15,
    fontFamily: 'JostSemiBold'
  },

  content: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // 👈 divider
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
    margin: 15,
  },

  heading: {
    fontSize: 24,
    color: '#1F2A44',
    marginBottom: 10,
    fontFamily: 'PlayfairSemiBold'
  },

  descText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  viewMore: {
    color: '#0a7c6b',
    marginTop: 10,
    fontWeight: '600',
  },

  ratingContainer: {
    marginHorizontal: 15,
    backgroundColor: '#F5F6F8',
    padding: 15,
    borderRadius: 12,
  },

  ratingValue: {
    fontSize: 36,
    color: '#1F2A44',
    fontFamily: 'PlayfairSemiBold'
  },

  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },


  reviewText: {
    color: '#777',
    marginHorizontal: 40
  },

  reviewBox: {
    marginTop: 10,
  },

  userName: {
    fontSize: 16,
    color: '#1F2A44',
    fontFamily: 'Jost_600SemiBold'
  },

  reviewMsg: {
    color: '#555',
    marginTop: 4,
    fontFamily: 'Jost_600SemiBold'
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
    borderWidth: 1,
    borderColor: '#4A7BD0',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
  },

  metaText: {
    marginLeft: 5,
    marginRight: 10,
    fontSize: 12,
    color: '#555',
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
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
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
});
