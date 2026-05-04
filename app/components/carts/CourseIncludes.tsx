import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IncludeItem {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  text: string;
}

interface CourseIncludesProps {
  items: IncludeItem[];
}

const CourseIncludes: React.FC<CourseIncludesProps> = ({ items }) => {
  return (
    <View className="bg-[#002B3B] px-5 py-3.5 mb-3.5">
      <Text className="mb-1.5 text-white text-base"
        style={{ fontFamily: 'PoppinsMedium' }}>This course includes:</Text>

      {items.map((item, index) => (
        <View key={index} className="flex-row items-center mb-1">
          <Ionicons
            name={item.icon}
            size={14}
            color="#fff"
          />
          <Text className="text-white ml-2 text-xs"
            style={{ fontFamily: 'PoppinsMedium' }}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default CourseIncludes;