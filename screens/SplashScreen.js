import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../config/colors';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';



export default function SplashScreen() {

    return (
    <View style={styles.splaceScreen}>
        <Image source={require('../assets/splashScreen.png')}/>
        <MaterialIcons 
            name='flag'
            size={200}
            style={styles.splaceScreenLogo}
        />
        <Text style={styles.splaceScreenLogoText}>Dev</Text>
    </View>
    )
}


const styles = StyleSheet.create({

    
    splaceScreen: {
        flex: 1,
        backgroundColor: 'hotpink',
        alignItems: 'center',
    },
    splaceScreenLogo: {
        top: '30%',
    },
    splaceScreenLogoText: {
        top: '10%',
        color: colors.silver,
        fontSize: 50
    }

})