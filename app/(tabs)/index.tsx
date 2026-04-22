import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import courseIcon from '../../assets/icons/course.png';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('coursecontent');

  return (
    <View style={styles.container}>

      <ScrollView>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => console.log('Back Button is Pressed')}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>


        {/* Header Image */}
        <View style={styles.header}>
          <Image
            // source={require('./assets/images/course.png')}
            // source={require('../../assets/images/course.png')} --true
            source={{ uri: 'https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2FSubhashit-prabodh-NP-Hindi%2009-12-2025.jpg&w=1920&q=100' }}
            style={styles.headerImage}
          />
          <TouchableOpacity style={styles.playButton}>
            <MaterialCommunityIcons name="play-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Course Info */}
        <View style={styles.card}>
          <Text style={styles.title}>सुभाषित प्रबोध - (Hindi)</Text>
          <Text style={styles.subtitle}>
            संस्कृत सुभाषितों का अद्वितीय संग्रह
          </Text>

          <View style={styles.ratingRow}>
            <Text>⭐ 4.5 (2 reviews)</Text>
            <Ionicons name="person" size={16} color="#555" style={{ marginLeft: 8 }} />
            <Text style={{ margin: 3 }}>20</Text>
          </View>

          <View style={styles.ratingRow}>
            <Text style={styles.price}>₹551</Text>
            <Text style={styles.oldPrice}>₹850</Text>
            <Text style={styles.discount}>35% off </Text>
          </View>

          {/* Coupon Section */}
          <View style={styles.couponContainer}>
            <Text style={styles.couponText}>Apply Coupon</Text>

            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>

          {/* Top Row: Cart + Wishlist */}
          <View style={styles.topRow}>
            <TouchableOpacity style={styles.cartBtnLarge}>
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wishlistBtn}>
              <Ionicons name="heart-outline" size={22} color="#ff4d4d" />
            </TouchableOpacity>
          </View>

          {/* Bottom Row: Buy Now */}
          <TouchableOpacity style={styles.buyBtnFull}>
            <Text style={styles.btnText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.includes}>
          <Text style={styles.sectionTitle}>This course includes:</Text>

          <View style={styles.includeItem}>
            <Ionicons name="videocam-outline" size={18} color="#fff" />
            <Text style={styles.includeText}>2 hr 32 min video</Text>
          </View>

          <View style={styles.includeItem}>
            <Ionicons name="download-outline" size={18} color="#fff" />
            <Text style={styles.includeText}>Downloadable resources</Text>
          </View>

          <View style={styles.includeItem}>
            <Ionicons name="infinite-outline" size={18} color="#fff" />
            <Text style={styles.includeText}>Lifetime access</Text>
          </View>

          <View style={styles.includeItem}>
            <Ionicons name="phone-portrait-outline" size={18} color="#fff" />
            <Text style={styles.includeText}>Access on mobile and TV</Text>
          </View>

          <View style={styles.includeItem}>
            <Ionicons name="ribbon-outline" size={18} color="#fff" />
            <Text style={styles.includeText}>Certificate of completion</Text>
          </View>
        </View>

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

        <View style={styles.mccontainer}>

          <Text style={styles.price}>More Courses</Text>


          <View style={styles.mccard}>
            <Image
              source={{
                uri: "https://nakshatrapedia.com/_next/image?url=https%3A%2F%2Fadmin.nakshatrapedia.com%2Fuploads%2F%2Fcourse%2Fhero%202%20(1)%2009-12-2025.jpg&w=1920&q=100",
              }}
              style={styles.mcimage}
            />

            <View style={styles.mccontent}>
              <Text numberOfLines={1} style={styles.mctitle}>
                Learn Sanskrit Language
              </Text>

              <View style={styles.metaRow}>
                <Ionicons name="school-outline" size={16} color="#222" />
                <Text style={styles.metaText}> 4581</Text>

                <Ionicons
                  name="time-outline"
                  size={16}
                  color="#222"
                  style={{ marginLeft: 15 }}
                />
                <Text style={styles.metaText}> 24 Hours</Text>
              </View>

              <View style={styles.priceRow}>
                <Text style={styles.price}>₹700</Text>
                <Text style={styles.oldPrice}>₹2100</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Enroll Button */}
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          Enroll Course - ₹551 <Text style={styles.oldPrice850}>₹850</Text>
        </Text>

        <TouchableOpacity style={styles.Btn}>
          <MaterialIcons name="navigate-next" size={20} color="#F9851C" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 15,
    zIndex: 10,
    padding: 10,
    borderRadius: 20
  },
  header: {
    position: 'relative'
  },

  headerImage: {
    width: '100%',
    height: 250
  },

  playButton: {
    position: 'absolute',
    top: 200,
    right: 35,
    alignSelf: 'flex-end',
    backgroundColor: '#0a7c6b',
    padding: 18,
    borderRadius: 40,
    zIndex: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: -21,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    zIndex: 5
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

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 5
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

  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    // marginVertical: 10,
  },

  couponText: {
    fontSize: 14,
    color: '#333',
  },

  applyBtn: {
    backgroundColor: 'rgba(249, 133, 28, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  cartBtnLarge: {
    flex: 0.8,
    backgroundColor: '#002B3B',
    paddingVertical: 8,   // 👈 reduced from 12
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },

  wishlistBtn: {
    flex: 0.2,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 6,   // 👈 reduced
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  buyBtnFull: {
    marginTop: 8,
    backgroundColor: '#ff7a00',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  includes: {
    backgroundColor: '#002B3B',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
  },

  includeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  includeText: {
    color: '#fff',
    marginLeft: 8,
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
    backgroundColor: '#EDEDED',  // 👈 light pill
  },

  tabText: {
    color: '#fff',               // 👈 inactive text white
    fontSize: 16,
    fontWeight: '600',
  },

  tabWrapper: {
    backgroundColor: '#063B44',  // 👈 dark teal
    paddingVertical: 10,
  },

  activeTabText: {
    color: '#F9851C',            // 👈 orange active text
  },

  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
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

  // ⭐ Rating
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

  lesson: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  bottomBtn: {
    backgroundColor: '#ff7a00',
    padding: 15,
    alignItems: 'center'
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

  enrollText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  strike: {
    textDecorationLine: "line-through",
    opacity: 0.8,
  },

  arrowCircle: {
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  cardContent: {
    flex: 1,
    marginLeft: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  meta: {
    fontSize: 14,
    color: "#333",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  mccontainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  mccard: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 25,
    padding: 15,

    // subtle glow/border feel
    borderWidth: 1,
    borderColor: "#D9D9FF",

    shadowColor: "#AAB0FF",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  mcimage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: "cover",
  },
  mccontent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  mctitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9851C',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  buttonText: {
    fontSize: 14,
    color: 'white',
  },

  oldPrice850: {
    textDecorationLine: 'line-through',
    opacity: 0.8,
  },

  Btn: {
    backgroundColor: 'white',
    width: 36,
    height: 36,
    borderRadius: 18, // half of width/height = perfect circle
    justifyContent: 'center',
    alignItems: 'center',
  },

});