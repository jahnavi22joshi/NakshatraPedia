// components/CourseTabs.tsx

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type SubLesson =
    | string
    | {
        title: string;
        time: string;
    };

type Lesson = {
    id: number;
    title: string;
    duration: string;
    subLessons: SubLesson[];
};

type Props = {
    styles: any;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    lessons: Lesson[];
    expandedId: number | null;
    toggleDropdown: (id: number) => void;
};

const CourseTabs: React.FC<Props> = ({
    styles,
    activeTab,
    setActiveTab,
    lessons,
    expandedId,
    toggleDropdown,
}) => {
    return (
        <>
            {/* Tabs */}
            <View style={styles.tabWrapper}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tabContainer}
                >
                    {['Course Content', 'Requirements', 'Description', 'Rating'].map(
                        (tab, index) => {
                            const key = tab.toLowerCase().replace(' ', '');

                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setActiveTab(key)}
                                    style={[
                                        styles.tab,
                                        activeTab === key && styles.activeTab,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.tabText,
                                            activeTab === key && styles.activeTabText,
                                        ]}
                                    >
                                        {tab}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }
                    )}
                </ScrollView>
            </View>

            {/* Course Content */}
            {activeTab === 'coursecontent' && (
                <>
                    <View>
                        <Text style={styles.courseContentText}>
                            Course Content
                        </Text>

                        <Text style={styles.courseContentInfoText}>
                            28 sections | 124 lectures | 1 hr 32 min
                        </Text>
                    </View>

                    <View style={styles.content}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={styles.sessionRowInfoText}>
                                Section 01 - Introduction - प्रस्तावना
                            </Text>

                            <Text style={styles.sessionRowInfoNumberText}>
                                10 min
                            </Text>
                        </View>

                        {lessons.map((item, index) => (
                            <View key={item.id}>
                                <TouchableOpacity
                                    style={styles.lessonRow}
                                    onPress={() => toggleDropdown(item.id)}
                                >
                                    <View style={styles.circle}>
                                        <Text style={styles.circleText}>
                                            {(index + 1).toString().padStart(2, '0')}
                                        </Text>
                                    </View>

                                    <View style={styles.lessonInfo}>
                                        <Text style={styles.lessonTitle}>
                                            {item.title}
                                        </Text>

                                        <Text style={styles.duration}>
                                            {item.duration}
                                        </Text>
                                    </View>

                                    <Image
                                        source={require('../../assets/icons/course-play.png')}
                                        style={{ width: 18, height: 18 }}
                                    />
                                </TouchableOpacity>

                                {expandedId === item.id && (
                                    <View style={styles.dropdownBox}>
                                        {item.subLessons.map((sub, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.subLessonRow}
                                            >
                                                <Ionicons
                                                    name="desktop-outline"
                                                    size={20}
                                                    color="#555"
                                                    style={{ marginRight: 12 }}
                                                />

                                                <Text style={styles.subLessonTitle}>
                                                    {typeof sub === 'string'
                                                        ? sub
                                                        : sub.title}
                                                </Text>

                                                <Text
                                                    style={styles.subLessonDuration}
                                                >
                                                    {typeof sub === 'string'
                                                        ? ''
                                                        : sub.time}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>

                    <View
                        style={{
                            height: 1,
                            backgroundColor: '#E0E0E0',
                            marginVertical: 12,
                        }}
                    />
                </>
            )}

            {/* Requirements */}
            {activeTab === 'requirements' && (
                <View style={styles.sectionContainer}>
                    <Text style={styles.heading}>Requirements</Text>

                    <View style={{ marginTop: 10 }}>
                        <View style={styles.pointRow}>
                            <Image
                                source={require('../../assets/icons/req-icon.png')}
                                style={{ width: 18, height: 18 }}
                            />

                            <Text style={styles.requirementsText}>
                                पूर्व ज्ञान की आवश्यकता नहीं है
                            </Text>
                        </View>

                        <View
                            style={{
                                height: 1,
                                backgroundColor: '#E0E0E0',
                                marginVertical: 12,
                            }}
                        />
                    </View>
                </View>
            )}

            {/* Description */}
            {activeTab === 'description' && (
                <View style={styles.sectionContainer}>
                    <Text style={styles.heading}>Description</Text>

                    <Text style={styles.descText}>
                        सुभाषित प्रबोध - यह एक ऐसा संग्रह है जिसमें
                        सुभाषितों (सुविचारों) का ध्यान-पूर्वक चयन किया
                        गया है।
                    </Text>

                    <Text style={styles.descText}>
                        प्रत्येक सुभाषित को निम्न प्रकार से प्रस्तुत
                        किया गया है :
                    </Text>

                    <Text style={styles.descText}>
                        - स्पष्ट उच्चारण
                    </Text>

                    <Text style={styles.descText}>
                        और इसमें व्याकरणिक विश्लेषण भी है जैसे :
                    </Text>

                    <Text style={styles.descText}>
                        - सरल पदच्छेद
                    </Text>

                    <Text style={styles.descText}>
                        - अनुवाद
                    </Text>

                    <Text style={styles.descText}>
                        - अन्वय - अर्थात् सुभाषित का गद्य रूप
                        समझाया गया है।
                    </Text>

                    <Text style={styles.descText}>
                        यह संग्रह संस्कृत भाषा सीखने वालों को संस्कृत
                        शब्दावली (vocabulary) बढ़ाने में भी सहायता
                        करेगा।
                    </Text>

                    <TouchableOpacity
                        style={styles.viewMoreContainer}
                    >
                        <Text style={styles.viewMoreText}>
                            View More
                        </Text>

                        <Ionicons
                            name="chevron-down"
                            size={18}
                            color="#202244"
                            style={styles.downIcon}
                        />
                    </TouchableOpacity>

                    <View style={styles.partitanLine} />
                </View>
            )}

            {/* Rating */}
            {activeTab === 'rating' && (
                <View style={styles.ratingContainer}>
                    <View style={styles.topRatingContainer}>
                        <Text style={styles.ratingValue}>4.5</Text>
                        <Text style={styles.reviewText}>
                            2 Reviews
                        </Text>
                    </View>

                    <View style={styles.rateIcon}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Ionicons
                                key={i}
                                name={i <= 4 ? 'star' : 'star-half'}
                                size={18}
                                color="#F9851C"
                            />
                        ))}
                    </View>

                    <Text style={styles.courseRatingText}>
                        Course Rating
                    </Text>
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
                                <Text style={styles.rateCount}>21</Text>

                                <Text style={styles.rateCount}>January 21, 2025</Text>
                            </View>
                        </View>

                        <View style={styles.ratingBadge}>
                            <Ionicons name="star" size={14} color="#F9851C" style={{ top: 2 }} />
                            <Text style={{ marginLeft: 4 }}>5.0</Text>
                        </View>
                    </View>

                    {/* Review 2 */}
                    <View
                        style={styles.reviewSpace}
                    >
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
                                    <Text style={styles.rateCount}>211</Text>

                                    <Text style={styles.rateCount}>November 10, 2025</Text>
                                </View>
                            </View>

                            <View style={styles.ratingBadge}>
                                <Ionicons name="star" size={14} color="#F9851C" style={{ top: 2 }} />
                                <Text style={{ marginLeft: 4 }}>5.0</Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={styles.reviewSpace}
                    ></View>
                </View>
            )}
        </>
    );
};

export default CourseTabs;