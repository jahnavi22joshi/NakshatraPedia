import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const HeaderImagePlayer = ({ imageUrl, onPress }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.headerImage}
      />
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
    transform: [{ translateX: 80 }, { translateY: 50 }],
  },
});