import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
      style={styles.moreCourseCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: image }}
        style={styles.moreCourseImage}
      />

      <View style={styles.moreCourseContent}>
        <Text
          numberOfLines={1}
          style={styles.moreCourseTitle}
        >
          {title}
        </Text>

        <View style={styles.metaRow}>
          <Ionicons
            name="school-outline"
            size={14}
            color="#333"
          />
          <Text style={styles.metaText}>{students}</Text>

          <Ionicons
            name="time-outline"
            size={13}
            color="#333"
          />
          <Text style={styles.metaText}>{duration}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹{price}</Text>
          <Text style={styles.oldPrice}>₹{oldPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoreCourseCard;

const styles = StyleSheet.create({
  moreCourseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    marginBottom: 80,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },

  moreCourseImage: {
    width: 92,
    height: 62,
    borderRadius: 8,
    resizeMode: 'cover',
  },

  moreCourseContent: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },

  moreCourseTitle: {
    fontSize: 14,
    color: '#111',
    fontFamily: 'PlayfairBold',
    marginBottom: 2,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaText: {
    marginLeft: 4,
    marginRight: 10,
    fontSize: 12,
    color: '#111',
    fontFamily: 'PoppinsRegular',
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontSize: 16,
    color: '#111',
    fontFamily: 'PoppinsSemiBold',
    marginRight: 6,
  },

  oldPrice: {
    fontSize: 10,
    color: '#666',
    textDecorationLine: 'line-through',
    fontFamily: 'PoppinsRegular',
    marginTop: 6
  },
});