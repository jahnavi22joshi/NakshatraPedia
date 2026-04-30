import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface BackButtonProps {
  onPress: () => void;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  iconName?: React.ComponentProps<typeof Ionicons>['name'];
}

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  size = 24,
  color = '#fff',
  style,
  iconName = 'arrow-back-sharp',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});