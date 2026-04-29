import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CourseIncludes = ({ items }) => {
  return (
    <View style={styles.includes}>
      <Text style={styles.sectionTitle}>This course includes:</Text>

      {items.map((item, index) => (
        <View key={index} style={styles.includeItem}>
          <Ionicons name={item.icon} size={14} color="#fff" />
          <Text style={styles.includeText}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default CourseIncludes;

const styles = StyleSheet.create({
  includes: {
    backgroundColor: '#002B3B',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
  },

  sectionTitle: {
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'PoppinsMedium',
    fontSize: 16
  },

  includeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  includeText: {
    color: '#fff',
    marginLeft: 8,
    fontFamily: 'PoppinsMedium',
    fontSize: 12
  },
});