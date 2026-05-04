import React from 'react';
import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  variant?: 'blue' | 'orange' | 'activeTab' | 'inactiveTab';
  onPress: () => void;
  style?: ViewStyle | any;
  textStyle?: TextStyle | any;
  className?: string;     
  textClassName?: string;  
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'blue',
  onPress,
  style,
  textStyle,
  className = '',
  textClassName = '',
}) => {
  const isActiveTab = variant === 'activeTab';
  const isInactiveTab = variant === 'inactiveTab';

  // 🎨 Background (still dynamic)
  const backgroundColor =
    variant === 'blue'
      ? '#002B3B'
      : variant === 'orange'
      ? '#ff7a00'
      : isActiveTab
      ? '#002B3B'
      : '#F2F4F7';

  // 🎨 Text color
  const textColor =
    isActiveTab || variant === 'blue' || variant === 'orange'
      ? '#fff'
      : '#555';

  return (
    <TouchableOpacity
      className={`py-2.5 px-[18px] rounded-lg items-center justify-center mr-2.5 ${className}`}
      style={[{ backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        className={`text-base ${textClassName}`}
        style={[{ color: textColor, fontFamily: 'PoppinsMedium' }, textStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;