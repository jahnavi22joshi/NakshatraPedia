import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface BackButtonProps {
  onPress: () => void;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  className?: string;
  iconName?: React.ComponentProps<typeof Ionicons>['name'];
}

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  size = 24,
  color = '#fff',
  style,
  className = '',
  iconName = 'arrow-back-sharp',
}) => {
  return (
    <TouchableOpacity
      className={`p-2.5 ${className}`}
      style={style}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default BackButton;