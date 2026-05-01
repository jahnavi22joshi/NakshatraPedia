import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../button/CustomButton';

interface CourseCardProps {
  title: string;
  subtitle: string;
  rating: number | string;
  reviews: number | string;
  students: number | string;
  price: number | string;
  oldPrice: number | string;
  discount: number | string;
  onApply: () => void;
  onAddToCart: () => void;
  onWishlist: () => void;
  onBuyNow: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subtitle,
  rating,
  reviews,
  students,
  price,
  oldPrice,
  discount,
  onApply,
  onAddToCart,
  onWishlist,
  onBuyNow,
}) => {
  const [couponCode, setCouponCode] = useState<string>('');

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subTitle}>{subtitle}</Text>

      <View style={styles.ratingRow}>
        <Text style={styles.ratingText}>
          {rating}{' '}
          <Ionicons name="star" size={14} color="#FCCB40" />
          <Ionicons name="star" size={14} color="#FCCB40" />
          <Ionicons name="star" size={14} color="#FCCB40" />
          <Ionicons name="star" size={14} color="#FCCB40" />
          <Ionicons name="star" size={14} color="#FCCB40" /> ({reviews} reviews)
        </Text>

        <Ionicons
          name="person"
          size={16}
          style={{ marginLeft: 6 }}
        />

        <Text style={styles.studentText}>{students}</Text>
      </View>

      <View style={styles.updateTextContainer}>
        <MaterialIcons name="update" size={16} color="black" />
        <Text style={styles.studentText}>Last updated 12 January 2026</Text>
      </View>


      <View style={styles.priceRow}>
        <Text style={styles.price}>₹{price}</Text>
        <Text style={styles.oldPrice}>₹{oldPrice}</Text>
        <Text style={styles.discount}>{discount}% off</Text>
      </View>

      {/* Coupon Section */}
      <View style={styles.couponContainer}>
        <TextInput
          style={styles.couponText}
          placeholder="Enter Coupon"
          placeholderTextColor="#999"
          value={couponCode}
          onChangeText={setCouponCode}
        />

        <TouchableOpacity
          style={[
            styles.applyBtn,
            couponCode.trim() !== '' && { backgroundColor: 'orange' },
          ]}
          onPress={onApply}
        >
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Top Row */}
      <View style={styles.topRow}>
        <CustomButton
          title="Add to Cart"
          variant="blue"
          onPress={onAddToCart}
          style={styles.customButton}
        />

        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={onWishlist}
        >
          <Ionicons
            name="heart"
            size={26}
            color="#002B3B"
          />
        </TouchableOpacity>
      </View>

      {/* Bottom Row */}
      <CustomButton
        title="Buy Now"
        variant="orange"
        onPress={onBuyNow}
        style={{ marginTop: 8 }}
      />
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: -21,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    zIndex: 5,
  },

  title: {
    fontSize: 26,
    fontFamily: 'InterMedium',
    marginBottom: 4
  },

  subTitle: {
    marginVertical: 2,
    fontFamily: 'InterMedium',
    fontSize: 16,

  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    fontFamily: 'InterMedium',
    fontSize: 12,
  },

  studentText: {
    marginVertical: 2,
    marginHorizontal: 2,
    fontFamily: 'InterMedium',
    fontSize: 12,
  },
  updateTextContainer: {
    flexDirection: 'row', alignItems: 'center', marginVertical: 2,
  },

  price: {
    fontSize: 24,
    marginVertical: 5,
    fontFamily: 'PoppinsMedium',
  },

  oldPrice: {
    top: 3,
    marginStart: 4,
    color: '#888',
    textDecorationLine: 'line-through',
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
  },

  discount: {
    top: 3,
    fontSize: 16,
    marginHorizontal: 5,
    fontFamily: 'PoppinsMedium',
  },

  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  couponText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'PoppinsMedium',
    flex: 1,
  },

  applyBtn: {
    backgroundColor: 'rgba(249, 133, 28, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  applyText: {
    color: '#fff',
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  customButton: { flex: 0.8, marginRight: 8 },

  cartBtnLarge: {
    flex: 0.7,
    backgroundColor: '#002B3B',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },

  wishlistBtn: {
    flex: 0.4,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 8,
    
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  buyBtnFull: {
    marginTop: 8,
    backgroundColor: '#ff7a00',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'PoppinsMedium',
  },
});