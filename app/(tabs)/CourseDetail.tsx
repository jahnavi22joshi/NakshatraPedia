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
import useAppFonts from "../config/useAppFonts";

export default function CourseDeatil() {
    const [activeTab, setActiveTab] = useState('coursecontent');
    const includesData = [
        { icon: 'videocam-outline', text: '2 hr 32 min video' },
        { icon: 'download-outline', text: 'Downloadable resources' },
        { icon: 'infinite-outline', text: 'Lifetime access' },
        { icon: 'phone-portrait-outline', text: 'Access on mobile and TV' },
        { icon: 'ribbon-outline', text: 'Certificate of completion' },
    ];

    const [lessons, setLessons] = useState([]);

    // const lessons = [
    //     {
    //         id: 1,
    //         title: 'प्रस्तावना',
    //         duration: '01 Lecture | 01 Mins',
    //         subLessons: [
    //             { title: 'Introduction', time: '01:44' },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         title: 'सुभाषितम्',
    //         duration: '05 Lecture | 06 Mins',
    //         subLessons: [
    //             { title: 'स्वादुकाव्यरसोन्मिश्रं वाक्यार्थमुपभुञ्जते।...', time: '01:04' },
    //             { title: 'धर्मो यशो नयो दाक्ष्यं मनोहारि सुभाषितम्।...', time: '01:09' },
    //             { title: 'सुभाषितमयं द्रव्यं सङ्ग्रही न भवेन्नरः।...', time: '01:04' },
    //             { title: 'बोद्धारो मत्सरग्रस्ताः प्रभवः स्मय दूषिताः।...', time: '01:27' },
    //             { title: 'द्राक्षा म्लानमुखी जाता शर्करा चाश्मताङ्गता।...', time: '01:16' },
    //         ],
    //     },
    //     {
    //         id: 3,
    //         title: 'श्रीनाथजी दर्शनम्',
    //         duration: '04 Mins',
    //         subLessons: ['Morning Darshan', 'Rajbhog', 'Shayan'],
    //     },
    // ];

    const [expandedId, setExpandedId] = useState(null);

    const toggleDropdown = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const [fontsLoaded] = useAppFonts();

    if (!fontsLoaded) return null;


    const params = useLocalSearchParams();

    const slug = Array.isArray(params.slug)
        ? params.slug[0]
        : params.slug;

    // console.log("RECEIVED SLUG  ", slug);

    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        if (!slug) return;

        fetch(`https://testadmin.nakshatrapedia.com/api/course/getAllCourseDetail?slug=${slug}`)
            .then(res => res.json())
            .then(res => {
                console.log("FULL API  ", res);
                console.log("FULL courseSection Array ", res?.data?.data?.courseSection);
                setCourseData(res?.data?.data);
                const sections = res?.data?.data?.courseSection || [];

                console.log("SECTIONS ✅", sections); // you already confirmed this works

                const formattedLessons = sections.map((section: any) => ({
                    id: section.id,
                    title: section.name,
                    duration: `${section.sectionLecture?.length || 0} Lectures`,
                    subLessons: (section.sectionLecture || []).map((lecture: any) => ({
                        title: lecture.name,
                        time: lecture.duration || "00:00",
                    })),
                }));

                console.log("LESSONS ✅", formattedLessons);

                setLessons(formattedLessons);

            })
            .catch(err => console.log("ERROR  ", err));
    }, [slug]);

    const IMAGE_BASE_URL = "https://testadmin.nakshatrapedia.com/uploads";

    const formatDate = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    const discount = Math.round(
        ((courseData?.amountInInr - courseData?.offerAmountInInr) /
            courseData?.amountInInr) *
        100
    );
    const youLearnData =
        courseData?.courseIntendedLearnerInfo
            ?.filter((item) => item.type === "learn")
            .map((item) => ({
                text: item.name,
            })) || [];


    const [bundles, setBundles] = useState([]);
    const [bundleLoading, setBundleLoading] = useState(false);

    useEffect(() => {
        if (!courseData?.id) return;

        setBundleLoading(true);

        fetch(
            `https://testadmin.nakshatrapedia.com/api/bundle/getLimitedBundles?courseId=${courseData.id}&limit=3`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log("BUNDLE API  ", res);
                console.log("BUNDLE API Data  ", res?.data?.data);
                setBundles(res?.data?.data || []);
            })
            .catch((err) => console.log(err))
            .finally(() => setBundleLoading(false));
    }, [courseData?.id]);

    const [moreCourses, setMoreCourses] = useState([]);
    const [moreLoading, setMoreLoading] = useState(false);

    useEffect(() => {
        if (!courseData?.id || !courseData?.categoryId) return;

        setMoreLoading(true);

        fetch(
            `https://testadmin.nakshatrapedia.com/api/course/getLimitedCourses?courseId=${courseData.id}&categoryId=${courseData.categoryId}&limit=2`
        )
            .then((res) => res.json())
            .then((res) => {
                // console.log("MORE COURSES 👉", JSON.stringify(res, null, 2));
                setMoreCourses(res?.data?.data || []);
            })
            .catch((err) => console.log("ERROR 👉", err))
            .finally(() => setMoreLoading(false));
    }, [courseData?.id, courseData?.categoryId]);

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
                                uri: courseData?.imageUrl
                                    ? encodeURI(`${IMAGE_BASE_URL}${courseData.imageUrl}`)
                                    : "https://via.placeholder.com/300", // fallback
                            }}
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
                        title={courseData?.title}
                        subtitle={courseData?.subTitle}
                        rating={courseData?.avgRating}
                        reviews={2}
                        students={courseData?.udemyStudentCount}
                        updatedAt={formatDate(courseData?.updatedAt)}
                        price={courseData?.offerAmountInInr}
                        oldPrice={courseData?.amountInInr}
                        discount={discount}
                        onApply={() => console.log('Apply Coupon')}
                        onAddToCart={() => console.log('Add to Cart')}
                        onWishlist={() => console.log('Wishlist')}
                        onBuyNow={() => console.log('Buy Now')}
                    />
                </View>

                {/* You'll Learn */}
                <YouLearn items={youLearnData} />

                {/* Kit Card */}
                {bundles.map((item, index) => {
                    const imageUrl = `https://testadmin.nakshatrapedia.com/uploads${item.imageUrl}`;

                    // console.log("IMAGE URL ", imageUrl);
                    // console.log("RAW imageUrl  ", item.imageUrl);

                    return (
                        <KitCard
                            key={index}
                            title={item.title}
                            image={encodeURI(imageUrl)}
                            price={`₹${item.offerAmountInInr}`}
                            discountPrice={`₹${item.amountInInr}`}
                            onPress={() => console.log("Bundle clicked  ", item)}
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
                    sectionsCount={courseData?.customData?.totalSectionCount}
                    lecturesCount={courseData?.customData?.totalLectureCount}
                    hrCount={Math.floor(courseData?.customData?.totalVideoDurationInHrs)}
                    lessons={lessons}
                    expandedId={expandedId}
                    toggleDropdown={toggleDropdown}
                />

                {/* More Course */}
                <View className="bg-white py-2.5 px-4 mb-20">
                    <Text className="text-2xl"
                        style={{ fontFamily: 'PlayfairSemiBold' }}>More Courses</Text>

                    {moreCourses.map((item, index) => {
                        const imageUrl = item.imageUrl
                            ? encodeURI(
                                `https://testadmin.nakshatrapedia.com/uploads${item.imageUrl}`
                            )
                            : "https://via.placeholder.com/300";

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
                                image={imageUrl}
                                onPress={() => console.log("Course Clicked 👉", item)}
                            />
                        );
                    })}
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