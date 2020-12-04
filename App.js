import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const getFonts = () => Font.loadAsync({
  'fredokaone-regular': require('./assets/fonts/FredokaOne-Regular.ttf'),
});

export default function App() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
