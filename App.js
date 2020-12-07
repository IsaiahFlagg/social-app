import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SplashScreen from './screens/SplashScreen';


export default function App() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
 
});
