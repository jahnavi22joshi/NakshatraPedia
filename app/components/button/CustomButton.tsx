import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  variant?: 'blue' | 'orange' | 'activeTab' | 'inactiveTab';
  onPress: () => void;
  style?: ViewStyle | any;
  textStyle?: TextStyle | any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'blue',
  onPress,
  style,
  textStyle,
}) => {
  const isActiveTab = variant === 'activeTab';
  const isInactiveTab = variant === 'inactiveTab';

  const backgroundColor =
    variant === 'blue'
      ? '#002B3B'
      : variant === 'orange'
      ? '#ff7a00'
      : isActiveTab
      ? '#002B3B'
      : '#F2F4F7';

  const textColor =
    isActiveTab || variant === 'blue' || variant === 'orange'
      ? '#fff'
      : '#555';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  text: {
    fontSize: 16,
    fontFamily: 'PoppinsMedium',
  },
});