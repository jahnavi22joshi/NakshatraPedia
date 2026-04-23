import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CourseIncludes = ({ items }) => {
  return (
    <View style={styles.includes}>
      <Text style={styles.sectionTitle}>This course includes:</Text>

      {items.map((item, index) => (
        <View key={index} style={styles.includeItem}>
          <Ionicons name={item.icon} size={18} color="#fff" />
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
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
  },

  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },

  includeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  includeText: {
    color: '#fff',
    marginLeft: 8,
  },
});