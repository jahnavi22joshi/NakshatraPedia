import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";

type StylesType = {
  kitMainCard: StyleProp<ViewStyle>;
  kitCartImage: StyleProp<ImageStyle>;
  kitTextContainer: StyleProp<ViewStyle>;
  kitText: StyleProp<TextStyle>;
  kitPriceContainer: StyleProp<ViewStyle>;
  kitPrice: StyleProp<TextStyle>;
  kitDiscount: StyleProp<TextStyle>;
};

type Props = {
  styles: StylesType;
  title: string;
  image: string;
  price: string;
  discountPrice: string;
  onPress?: () => void;
};

const KitCard: React.FC<Props> = ({
  styles,
  title,
  image,
  price,
  discountPrice,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.kitMainCard}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {/* Left Image */}
      <Image
        source={{ uri: image }}
        style={styles.kitCartImage}
      />

      {/* Right Content */}
      <View style={styles.kitTextContainer}>
        <Text style={styles.kitText}>{title}</Text>

        <View style={styles.kitPriceContainer}>
          <Text style={styles.kitPrice}>{price}</Text>
          <Text style={styles.kitDiscount}>{discountPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default KitCard;