import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/button/BackButton';
import CourseCard from '../components/carts/CourseCard';
import CourseIncludes from '../components/carts/CourseIncludes';
import MoreCourseCard from '../components/carts/MoreCourseCard';
import HeaderImagePlayer from '../components/images/HeaderImagePlayer';
import EnrollButton from '../components/button/EnrollButton';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('coursecontent');
  const includesData = [
    { icon: 'videocam-outline', text: '2 hr 32 min video' },
    { icon: 'download-outline', text: 'Downloadable resources' },
    { icon: 'infinite-outline', text: 'Lifetime access' },
    { icon: 'phone-portrait-outline', text: 'Access on mobile and TV' },
    { icon: 'ribbon-outline', text: 'Certificate of completion' },
  ];

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

        {/* Header Image */}
        <View style={styles.header}>
          <HeaderImagePlayer
            imageUrl="https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100"
            onPress={() => {
              console.log('Play button clicked');
            }}
          />
        </View>

        {/* Course Info */}
        <CourseCard
          title="सुभाषित प्रबोध - (Hindi)"
          subtitle="संस्कृत सुभाषितों का अद्वितीय संग्रह"
          rating={4.5}
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
              fontSize: 20,
              fontWeight: '600',
              color: '#111',
            }}>
              Course Content
            </Text>
            {[1, 2, 3, 4, 5].map((item) => (
              <View key={item} style={styles.lessonRow}>

                {/* Left Circle Number */}
                <View style={styles.circle}>
                  <Text style={styles.circleText}>
                    {item.toString().padStart(2, '0')}
                  </Text>
                </View>

                {/* Middle Content */}
                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonTitle}>
                    मङ्गलाचरणम् - Mangala...
                  </Text>
                  <Text style={styles.duration}>02 Mins</Text>
                </View>

                {/* Right Play Button */}
                <View style={styles.playBtn}>
                  <Ionicons name="play" size={16} color="#fff" />
                </View>

              </View>
            ))}
          </View>
        )}

        {activeTab === 'requirements' && (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>Requirements</Text>

            <Text style={styles.descText}>
              • Basic understanding of Sanskrit{"\n"}
              • Interest in learning Subhashits{"\n"}
              • मोबाइल या लैपटॉप की सुविधा
            </Text>

            <TouchableOpacity>
              <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
          </View>)}

        {activeTab === 'description' && (
          <View style={styles.sectionContainer}>
            <Text style={styles.heading}>Description</Text>

            <Text style={styles.descText}>
              This course provides a unique collection of Sanskrit Subhashits
              with Hindi explanation. It helps learners understand the deep
              meaning of ancient wisdom in a simple and practical way.
            </Text>

            <TouchableOpacity>
              <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
          </View>)}

        {activeTab === 'rating' && (
          <View style={styles.ratingContainer}>

            {/* Top Rating */}
            <Text style={styles.ratingValue}>4.5</Text>
            <Text style={styles.reviewText}>2 Reviews</Text>

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

            <Text style={styles.heading}>Course Rating</Text>

            {/* Review 1 */}
            <View style={styles.reviewBox}>
              <Text style={styles.userName}>Dhairya Joshi</Text>
              <Text style={styles.reviewMsg}>
                "Really this collection is gems of wisdom..."
              </Text>
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
    fontSize: 16,
    fontWeight: '600',
  },

  tabWrapper: {
    backgroundColor: '#063B44', 
    paddingVertical: 10,
  },

  activeTabText: {
    color: '#F9851C',          
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
    fontWeight: 'bold',
    color: '#333',
  },

  lessonInfo: {
    flex: 1,
    marginLeft: 12,
  },

  lessonTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },

  duration: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2A44',
    marginBottom: 10,
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
    margin: 15,
    backgroundColor: '#F5F6F8',
    padding: 15,
    borderRadius: 12,
  },

  ratingValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1F2A44',
  },

  reviewText: {
    color: '#777',
  },

  reviewBox: {
    marginTop: 10,
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1F2A44',
  },

  reviewMsg: {
    color: '#555',
    marginTop: 4,
  },

  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4A7BD0',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
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
});