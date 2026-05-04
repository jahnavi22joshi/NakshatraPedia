import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface MoreCourseCardProps {
  title: string;
  students: string | number;
  duration: string;
  price: string | number;
  oldPrice: string | number;
  image: string;
  onPress: () => void;
}

const MoreCourseCard: React.FC<MoreCourseCardProps> = ({
  title,
  students,
  duration,
  price,
  oldPrice,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center bg-white rounded-3xl py-3.5 px-4 my-2.5 mb-20"
      style={styles.moreCourseShadow}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: image }}
        className="w-[92px] h-[62px] rounded-lg"
      />

      <View className="flex-1 ml-3.5 justify-center">
        <Text
          numberOfLines={1}
          className="text-sm text-gray-900 mb-0.5"
          style={{ fontFamily: 'PlayfairBold' }}
        >
          {title}
        </Text>

        <View className="flex-row items-center">
          <Ionicons
            name="school-outline"
            size={14}
            color="#333"
          />
          <Text className="ml-1 mr-2.5 text-xs text-gray-900"
            style={{ fontFamily: 'PoppinsRegular' }}>{students}</Text>

          <Ionicons
            name="time-outline"
            size={13}
            color="#333"
          />
          <Text className="ml-1 mr-2.5 text-xs text-gray-900"
            style={{ fontFamily: 'PoppinsRegular' }}>{duration}</Text>
        </View>

        <View className="flex-row items-center">
          <Text className="text-base text-gray-900 mr-1.5"
            style={{ fontFamily: 'PoppinsSemiBold' }}>₹{price}</Text>
          <Text className="text-xs text-gray-500 line-through mt-1.5"
            style={{ fontFamily: 'PoppinsRegular' }}>₹{oldPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoreCourseCard;

const styles = StyleSheet.create({
  moreCourseShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
});