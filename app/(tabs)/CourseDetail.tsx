import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/button/BackButton';
import EnrollButton from '../components/button/EnrollButton';
import CourseCard from '../components/carts/CourseCard';
import CourseIncludes from '../components/carts/CourseIncludes';
import KitCard from '../components/carts/KitCard';
import MoreCourseCard from '../components/carts/MoreCourseCard';
import YouLearn from '../components/carts/YouLearn';
import CourseTabs from '../components/tab/CourseTabsSection';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchBundles, fetchCourseDetails, fetchMoreCourses } from "../redux/slices/CourseSlice";
import { calculateDiscount, formatDate, getYouLearnData } from "../utils/helpers";

export default function CourseDeatil() {
    const [activeTab, setActiveTab] = useState('coursecontent');
    const {
        IMAGE_BASE_URL,
        PLACEHOLDER_URL,
    } = Constants.expoConfig?.extra || {};
    const [expandedId, setExpandedId] = useState(null);
    const toggleDropdown = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };
    const params = useLocalSearchParams();
    const slug = Array.isArray(params.slug)
        ? params.slug[0]
        : params.slug;
    const {
        courseDetails,
        lessons,
        bundles,
        moreCourses,
        bundleLoading,
        moreLoading
    } = useAppSelector((state: any) => state.courses);
    const dispatch = useAppDispatch();
    const [imgError, setImgError] = useState(false);
    const includesData = [
        {
            icon: 'videocam-outline', text:
                `${Math.floor(courseDetails?.customData?.totalVideoDurationInHrs)} H of min video`
        },
        { icon: 'download-outline', text: 'Downloadable resources' },
        { icon: 'infinite-outline', text: 'Lifetime access' },
        { icon: 'phone-portrait-outline', text: 'Access on mobile and TV' },
        { icon: 'ribbon-outline', text: 'Certificate of completion' },
    ];

    useEffect(() => {
        if (slug) {
            dispatch(fetchCourseDetails(slug));
        }
    }, [slug]);

    useEffect(() => {

        if (!courseDetails?.id) return;

        dispatch(fetchBundles(courseDetails.id));

        if (courseDetails?.categoryId) {
            dispatch(
                fetchMoreCourses({
                    courseId: courseDetails.id,
                    categoryId: courseDetails.categoryId,
                })
            );
        }
    }, [courseDetails?.id, courseDetails?.categoryId]);

    const finalUrl = `${IMAGE_BASE_URL}${courseDetails?.imageUrl}`;
    console.log("IMAGE URL 👉", finalUrl);

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
                            source={
                                !imgError && courseDetails?.imageUrl
                                    ? { uri: `${IMAGE_BASE_URL}${courseDetails.imageUrl}` }
                                    : { uri: PLACEHOLDER_URL }
                            }
                            onError={() => setImgError(true)}
                            className="w-full h-[200px]"
                        />
                    </View>

                    {/* Floating Button */}
                    <TouchableOpacity
                        className="absolute right-[30px] bottom-[-14px] w-[63px] h-[63px] z-50"
                        style={{ elevation: 10 }}
                        onPress={() => console.log('Floating Button Pressed')}
                    >
                        <Image
                            source={require('../assets/icons/play.png')}
                            className="w-[63px] h-[63px]"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                </View>

                {/* Course Info */}
                <View>
                    <CourseCard
                        title={courseDetails?.title}
                        subtitle={courseDetails?.subTitle}
                        rating={courseDetails?.avgRating}
                        reviews={2}
                        students={courseDetails?.udemyStudentCount}
                        updatedAt={formatDate(courseDetails?.updatedAt)}
                        price={courseDetails?.offerAmountInInr}
                        oldPrice={courseDetails?.amountInInr}
                        discount={calculateDiscount(
                            courseDetails?.amountInInr,
                            courseDetails?.offerAmountInInr
                        )}
                        onApply={() => console.log('Apply Coupon')}
                        onAddToCart={() => console.log('Add to Cart')}
                        onWishlist={() => console.log('Wishlist')}
                        onBuyNow={() => console.log('Buy Now')}
                    />
                </View>

                {/* You'll Learn */}
                <YouLearn items={getYouLearnData(courseDetails)} />

                {/* Kit Card */}
                {bundles.map((item, index) => {
                    const hasImage = item?.imageUrl && item.imageUrl.trim() !== "";

                    return (
                        <KitCard
                            key={index}
                            title={item.title}
                            image={item?.imageUrl?.trim()
                                ? `${IMAGE_BASE_URL}${item.imageUrl}`
                                : PLACEHOLDER_URL}
                            price={`₹${item.offerAmountInInr}`}
                            discountPrice={`₹${item.amountInInr}`}
                            onPress={() => console.log("Bundle clicked", item)}
                        />
                    );
                })}

                {/* Course Includes */}
                <CourseIncludes items={includesData} />

                {/* Course Content */}
                <CourseTabs
                    styles={styles}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    sectionsCount={courseDetails?.customData?.totalSectionCount}
                    lecturesCount={courseDetails?.customData?.totalLectureCount}
                    hrCount={Math.floor(courseDetails?.customData?.totalVideoDurationInHrs)}
                    lessons={lessons}
                    expandedId={expandedId}
                    toggleDropdown={toggleDropdown}
                />

                {/* More Course */}
                <View className="bg-white py-2.5 px-4 mb-20">
                    <Text className="text-2xl"
                        style={{ fontFamily: 'PlayfairSemiBold' }}>More Courses</Text>

                    {moreCourses.map((item, index) => {

                        return (
                            <MoreCourseCard
                                key={index}
                                title={item.title}
                                students={item.customData?.studentPurchaseCount || 0}
                                duration={`${Math.floor(
                                    item.customData?.totalVideoDurationInHrs || 0
                                )} Hours`}
                                price={item.offerAmountInInr}
                                oldPrice={item.amountInInr}
                                image={item?.imageUrl?.trim()
                                    ? `${IMAGE_BASE_URL}${item.imageUrl}`
                                    : PLACEHOLDER_URL}
                                onPress={() => console.log("Course Clicked", item)}
                            />
                        );
                    })}
                </View>
            </ScrollView>

            {/* Bottom Enroll Button */}
            <View className="absolute bottom-0 left-0 right-0 py-2">
                <EnrollButton
                    price={courseDetails?.offerAmountInInr}
                    oldPrice={courseDetails?.amountInInr}
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