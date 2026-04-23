import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderImagePlayer = ({ imageUrl, onPress }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.headerImage}
      />

      <TouchableOpacity style={styles.playButton} onPress={onPress}>
        <MaterialCommunityIcons
          name="play-circle-outline"
          size={40}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderImagePlayer;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
});