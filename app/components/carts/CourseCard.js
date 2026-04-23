import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CourseCard = ({
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
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      <View style={styles.ratingRow}>
        <Text>⭐ {rating} ({reviews} reviews)</Text>
        <Ionicons name="person" size={16} color="#555" style={{ marginLeft: 8 }} />
        <Text style={{ margin: 3 }}>{students}</Text>
      </View>

      <View style={styles.ratingRow}>
        <Text style={styles.price}>₹{price}</Text>
        <Text style={styles.oldPrice}>₹{oldPrice}</Text>
        <Text style={styles.discount}>{discount}% off </Text>
      </View>

      {/* Coupon Section */}
      <View style={styles.couponContainer}>
        <Text style={styles.couponText}>Apply Coupon</Text>

        <TouchableOpacity style={styles.applyBtn} onPress={onApply}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Top Row */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.cartBtnLarge} onPress={onAddToCart}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.wishlistBtn} onPress={onWishlist}>
          <Ionicons name="heart-outline" size={22} color="#ff4d4d" />
        </TouchableOpacity>
      </View>

      {/* Bottom Row */}
      <TouchableOpacity style={styles.buyBtnFull} onPress={onBuyNow}>
        <Text style={styles.btnText}>Buy Now</Text>
      </TouchableOpacity>
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
    zIndex: 5
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  subtitle: {
    color: '#666',
    marginVertical: 5,
    fontSize: 16,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5
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
    marginHorizontal: 5
  },

  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  couponText: {
    fontSize: 14,
    color: '#333',
  },

  applyBtn: {
    backgroundColor: 'rgba(249, 133, 28, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  applyText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  cartBtnLarge: {
    flex: 0.8,
    backgroundColor: '#002B3B',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },

  wishlistBtn: {
    flex: 0.2,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 6,
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
    fontWeight: 'bold',
    fontSize: 14,
  },
});