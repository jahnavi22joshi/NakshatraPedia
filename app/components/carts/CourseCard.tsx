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
  updatedAt: number | string;
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
  updatedAt,
  onApply,
  onAddToCart,
  onWishlist,
  onBuyNow,
}) => {
  const [couponCode, setCouponCode] = useState<string>('');

  return (
    <View className="bg-white mx-[15px] mt-[-21px] rounded-lg p-[15px] z-10"
      style={{ elevation: 5 }}>
      <Text className="text-[26px] mb-1" numberOfLines={2}
        style={{ fontFamily: 'InterMedium' }}>{title}</Text>

      <Text className="my-[2px] text-base" numberOfLines={2}
        style={{ fontFamily: 'InterMedium' }}>{subtitle}</Text>

      <View className="flex-row items-center my-[2px]">
        <Text className="text-xs"
          style={{ fontFamily: 'InterMedium' }}>
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

        <Text className="my-[2px] mx-[2px] text-xs"
          style={{ fontFamily: 'InterMedium' }}>{students}</Text>
      </View>

      <View className="flex-row items-center my-[2px]">
        <MaterialIcons name="update" size={16} color="black" />
        <Text className="my-[2px] mx-[2px] text-xs"
          style={{ fontFamily: 'InterMedium' }}>Last updated {updatedAt}</Text>
      </View>


      <View className="flex-row items-center">
        <Text className="text-2xl my-[5px]"
          style={{ fontFamily: 'PoppinsMedium' }}>₹{price}</Text>
        <Text className="top-[3px] ml-1 text-sm text-gray-500 line-through"
          style={{ fontFamily: 'PoppinsRegular' }}>₹{oldPrice}</Text>
        <Text className="top-[3px] text-base mx-[5px]"
          style={{ fontFamily: 'PoppinsMedium' }}>{discount}% off</Text>
      </View>

      {/* Coupon Section */}
      <View className="flex-row justify-between items-center bg-gray-100 py-[2px] px-3 rounded-lg">
        <TextInput
          className="flex-1 text-sm text-gray-800"
          style={{ fontFamily: 'PoppinsMedium' }}
          placeholder="Enter Coupon"
          placeholderTextColor="#999"
          value={couponCode}
          onChangeText={setCouponCode}
        />

        <TouchableOpacity
          className="bg-orange-400/20 py-1.5 px-5 rounded-md"
          style={[
            couponCode.trim() !== '' && { backgroundColor: 'orange' },
          ]}
          onPress={onApply}
        >
          <Text className="text-white text-sm"
            style={{ fontFamily: 'PoppinsMedium' }}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Top Row */}
      <View className="flex-row items-center mt-2.5">
        <CustomButton
          title="Add to Cart"
          variant="blue"
          onPress={onAddToCart}
          className=" flex-[0.9] mr-2"
        />

        <TouchableOpacity
          className="flex-[0.4] border border-[#ddd] py-2 rounded-lg items-center justify-center bg-white"
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
        className='mt-2'
      />
    </View>
  );
};

export default CourseCard;