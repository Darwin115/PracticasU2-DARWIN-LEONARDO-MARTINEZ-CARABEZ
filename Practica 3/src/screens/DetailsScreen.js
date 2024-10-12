import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text> </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Details')}>
        <Text style={styles.buttonText}>Go to Details... again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Main')}>
        <Text style={styles.buttonText}>Go to Main</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
