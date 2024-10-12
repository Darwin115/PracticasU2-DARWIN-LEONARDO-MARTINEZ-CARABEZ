import react from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import DetailsScreen from "/DetailsScreen";

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
       
        <NavigationButton title="Ir a la Pantalla de Detalles" onPress={() => navigation.navigate('Details')} />
        <StatusBar style="auto" />
      </View>
    );
  }