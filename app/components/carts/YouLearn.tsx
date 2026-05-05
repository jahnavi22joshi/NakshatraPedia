import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface IncludeItem {
  text: string;
}

interface YouLearnProps {
  items: IncludeItem[];
}

const YouLearn: React.FC<YouLearnProps> = ({ items }) => {
  return (
    <View className="bg-[#002B3B] px-5 py-4 mb-4 mx-4 my-3 rounded-xl">

      <Text
        className="mb-2 text-white text-base"
        style={{ fontFamily: 'PoppinsMedium' }}
      >
        What you'll learn
      </Text>

      {items.map((item, index) => (
        <View key={index} className="flex-row items-start mb-2 px-1">

          <FontAwesome5
            name="check"
            size={14}
            color="white"
            style={{ marginTop: 2 }}
          />

          <Text
            className="text-white ml-2.5 text-xs flex-1 leading-4"
            style={{ fontFamily: 'PoppinsMedium' }}
          >
            {item.text}
          </Text>

        </View>
      ))}

    </View>
  );
};

export default YouLearn;