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
import CustomButton from '../button/CustomButton';

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
            <View className="bg-[#002B3B] py-2.5">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tabContainer}
                >
                    {['Course Content', 'Requirements', 'Description', 'Rating'].map(
                        (tab, index) => {
                            const key = tab.toLowerCase().replace(' ', '');

                            return (
                                <CustomButton
                                    key={index}
                                    title={tab}
                                    onPress={() => setActiveTab(key)}
                                    className="py-2.5 px-4.5 rounded-lg mr-2.5"
                                    style={[
                                        activeTab === key && styles.activeTab,
                                    ]}
                                    textStyle={[
                                        activeTab === key && styles.activeTabText,
                                    ]}
                                    textClassName='text-white text-base'
                                />
                            );
                        }
                    )}
                </ScrollView>
            </View>

            {/* Course Content */}
            {activeTab === 'coursecontent' && (
                <>
                    <View>
                        <Text className="text-2xl text-gray-900 mt-2.5 mx-4"
                            style={{ fontFamily: 'PlayfairSemiBold' }}>
                            Course Content
                        </Text>

                        <Text className="text-xs text-gray-900 mt-1 mx-4"
                            style={{ fontFamily: 'InterMedium' }}>
                            28 sections | 124 lectures | 1 hr 32 min
                        </Text>
                    </View>

                    <View
                        className="bg-white px-2.5 pt-2.5 mx-4 my-4 rounded-xl"
                        style={shadows.card}>
                        <View
                            className="flex-row justify-between items-center"
                        >
                            <Text className="text-sm text-gray-900 mt-1"
                                style={{ fontFamily: 'JostSemiBold' }}>
                                Section 01 - Introduction - प्रस्तावना
                            </Text>

                            <Text className="text-sm text-gray-900 mt-1"
                                style={{ fontFamily: 'JostSemiBold' }}>
                                10 min
                            </Text>
                        </View>

                        {lessons.map((item, index) => (
                            <View key={item.id}>
                                <TouchableOpacity
                                    className="flex-row items-center py-3 border-b border-gray-200"
                                    onPress={() => toggleDropdown(item.id)}
                                >
                                    <View className="w-11 h-11 rounded-full bg-gray-200 items-center justify-center">
                                        <Text className="text-gray-800 text-sm"
                                            style={{ fontFamily: 'Jost_600SemiBold' }}>
                                            {(index + 1).toString().padStart(2, '0')}
                                        </Text>
                                    </View>

                                    <View className="flex-1 ml-3">
                                        <Text className="text-lg"
                                            style={{ fontFamily: 'Jost_600SemiBold' }}>
                                            {item.title}
                                        </Text>

                                        <Text className="text-xs text-gray-500 mt-0.5"
                                            style={{ fontFamily: 'Jost_600SemiBold' }}>
                                            {item.duration}
                                        </Text>
                                    </View>

                                    <Image
                                        source={require('../../assets/icons/course-play.png')}
                                        className="w-4.5 h-4.5 mr-2.5"
                                    />
                                </TouchableOpacity>

                                {expandedId === item.id && (
                                    <View className="pl-[58px] py-2">
                                        {item.subLessons.map((sub, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                className="flex-row items-center py-3.5 border-b border-gray-100"
                                            >
                                                <Ionicons
                                                    name="desktop-outline"
                                                    size={20}
                                                    color="#555"
                                                    style={{ marginRight: 12 }}
                                                />

                                                <Text className="flex-1 text-sm text-gray-900"
                                                    style={{ fontFamily: 'InterBold' }}>
                                                    {typeof sub === 'string'
                                                        ? sub
                                                        : sub.title}
                                                </Text>

                                                <Text
                                                    className="text-xs text-gray-500"
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

                    <View className="h-px bg-gray-300 my-3" />
                </>
            )}

            {/* Requirements */}
            {activeTab === 'requirements' && (
                <View className="bg-white px-3.5 pt-2.5">
                    <Text className="text-2xl"
                        style={{ fontFamily: 'PlayfairSemiBold' }}>Requirements</Text>

                    <View className="mt-2.5">
                        <View className="flex-row items-start mb-2.5">
                            <Image
                                source={require('../../assets/icons/req-icon.png')}
                                className="w-[18px] h-[18px]" />

                            <Text className="text-sm mx-2.5"
                                style={{ fontFamily: 'PoppinsRegular' }}>
                                पूर्व ज्ञान की आवश्यकता नहीं है
                            </Text>
                        </View>

                        <View
                            className="h-px bg-gray-300 my-3"
                        />
                    </View>
                </View>
            )}

            {/* Description */}
            {activeTab === 'description' && (
                <View className="bg-white px-3.5 pt-2.5">
                    <Text className="text-2xl"
                        style={{ fontFamily: 'PlayfairSemiBold' }}>Description</Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        सुभाषित प्रबोध - यह एक ऐसा संग्रह है जिसमें
                        सुभाषितों (सुविचारों) का ध्यान-पूर्वक चयन किया
                        गया है।
                    </Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        प्रत्येक सुभाषित को निम्न प्रकार से प्रस्तुत
                        किया गया है :
                    </Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        - स्पष्ट उच्चारण
                    </Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        और इसमें व्याकरणिक विश्लेषण भी है जैसे :
                    </Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        - सरल पदच्छेद
                    </Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        - अनुवाद
                    </Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        - अन्वय - अर्थात् सुभाषित का गद्य रूप
                        समझाया गया है।
                    </Text>

                    <Text className="text-sm text-gray-600 leading-5 my-1.5"
                        style={{ fontFamily: 'PoppinsRegular' }}>
                        यह संग्रह संस्कृत भाषा सीखने वालों को संस्कृत
                        शब्दावली (vocabulary) बढ़ाने में भी सहायता
                        करेगा।
                    </Text>

                    <TouchableOpacity
                        className="flex-row items-center justify-center self-center mt-3"
                    >
                        <Text className="text-sm text-[#202244] font-semibold"
                            style={{ fontFamily: 'PoppinsRegular' }}>
                            View More
                        </Text>

                        <Ionicons
                            name="chevron-down"
                            size={18}
                            color="#202244"
                            className="ml-1 mt-0.5"
                        />
                    </TouchableOpacity>

                    <View className="h-px bg-gray-300 my-3" />
                </View>
            )}

            {/* Rating */}
            {activeTab === 'rating' && (
                <View className="bg-white px-3.5 pt-2.5">
                    <View className="flex-row items-center">
                        <Text className="text-4xl ml-5"
                            style={{ fontFamily: 'PlayfairSemiBold' }}>4.5</Text>
                        <Text className="text-lg mt-2.5 mx-10"
                            style={{ fontFamily: 'PlayfairBold' }}>
                            2 Reviews
                        </Text>
                    </View>

                    <View className="flex-row my-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Ionicons
                                key={i}
                                name={i <= 4 ? 'star' : 'star-half'}
                                size={18}
                                color="#F9851C"
                            />
                        ))}
                    </View>

                    <Text className="text-xl text-[#1F2A44] mt-2 mb-3.5"
                        style={{ fontFamily: 'PlayfairSemiBold' }}>
                        Course Rating
                    </Text>
                    {/* Review 1 */}
                    <View className="flex-row mt-1">
                        <View className="w-10 h-10 rounded-full bg-gray-300 items-center justify-center mr-2.5">
                            <Text>DJ</Text>
                        </View>

                        <View className='flex-1'>
                            <Text className="text-base font-bold"
                                style={{ fontFamily: 'Jost_600SemiBold' }}>Dhairya Joshi</Text>
                            <Text className="mt-1"
                                style={{ fontFamily: 'Halant_500Medium' }}>
                                "Really this collection is gems of wisdom..."
                            </Text>

                            <View className="flex-row items-center mt-6.5 mt-6">
                                <Ionicons name="heart" size={16} color="red" />
                                <Text className="ml-1 mr-2.5 text-xs font-bold ">21</Text>

                                <Text className="ml-1 mr-2.5 text-xs font-bold">January 21, 2025</Text>
                            </View>
                        </View>

                        <View className="flex-row border-2 border-[#4D81E5] bg-[#E8F1FF] rounded-full px-2 py-0.5 h-[30px]">
                            <Ionicons name="star" size={14} color="#F9851C" style={{ top: 2 }} />
                            <Text className='ml-1'>5.0</Text>
                        </View>
                    </View>

                    {/* Review 2 */}
                    <View className="flex-row mt-4">
                        <View className="w-10 h-10 rounded-full bg-gray-300 items-center justify-center mr-2.5">
                            <Text>DT</Text>
                        </View>

                        <View className='flex-1'>
                            <Text className="text-base font-bold"
                                style={{ fontFamily: 'Jost_600SemiBold' }}>Divya T</Text>
                            <Text className="mt-1"
                                style={{ fontFamily: 'Halant_500Medium' }}>
                                "Very nicely explained."
                            </Text>

                            <View className="flex-row items-center mt-6.5 mt-6">
                                <Ionicons name="heart" size={16} color="red" />
                                <Text className="ml-1 mr-2.5 text-xs font-bold ">21</Text>

                                <Text className="ml-1 mr-2.5 text-xs font-bold">January 21, 2025</Text>
                            </View>
                        </View>

                        <View className="flex-row border-2 border-[#4D81E5] bg-[#E8F1FF] rounded-full px-2 py-0.5 h-[30px]">
                            <Ionicons name="star" size={14} color="#F9851C" style={{ top: 2 }} />
                            <Text className='ml-1'>5.0</Text>
                        </View>
                    </View>

                    <View
                        className="border-t border-gray-200 mt-4 pt-4"
                    ></View>
                </View>
            )}
        </>
    );
};

export default CourseTabs;

export const shadows = {
    card: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 5,
    },
};