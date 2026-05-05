import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e', // Custom background
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', // White text
    fontSize: 20,
  },
});
