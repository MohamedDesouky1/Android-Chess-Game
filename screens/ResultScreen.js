import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over!</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ResultScreen;
