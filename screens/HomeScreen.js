import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen() {
    return (
        <View style={styles.homeScreen}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  
})
