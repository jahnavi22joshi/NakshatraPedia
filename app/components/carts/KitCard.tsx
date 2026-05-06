import Constants from "expo-constants";
import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  title: string;
  image: string;
  price: string;
  discountPrice: string;
  onPress?: () => void;
};

const KitCard: React.FC<Props> = ({
  title,
  image,
  price,
  discountPrice,
  onPress,
}) => {
  const {
    PLACEHOLDER_URL,
  } = Constants.expoConfig?.extra || {};
  const [imgSrc, setImgSrc] = useState(image || PLACEHOLDER_URL);

  return (
    <TouchableOpacity
      className="flex-row bg-white rounded-lg py-4 px-4 mx-4 mb-3.5 items-center"
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.shadow}
    >
      {/* Left Image */}
      <Image
        source={{ uri: imgSrc }}
        // className="w-[99px] h-[56px]"
        style={{ width: 99, height: 56 }}
        resizeMode="cover"
        onError={() => setImgSrc(PLACEHOLDER_URL)}
      />

      {/* Right Content */}
      <View className="ml-2 flex-1">
        <Text
          className="text-sm mb-3"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontFamily: "HalantMedium" }}
        >
          {title}
        </Text>

        <View className="flex-row items-center">
          <Text
            className="text-sm mr-2 text-[#0E3A52]"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            {price}
          </Text>

          <Text
            className="text-sm text-gray-700 line-through"
            style={{ fontFamily: "PoppinsRegular" }}
          >
            {discountPrice}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default KitCard;

const styles = {
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
};