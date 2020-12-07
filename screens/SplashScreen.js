import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../config/colors';
import React, { useState } from 'react';



export default function SplashScreen() {

    return (
    <View style={styles.splaceScreen}>
        <Image source={require('../assets/splashScreenIcon.png')} style={styles.imageLogo}/>
        
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
    splaceScreenLogoText: {
        top: '11%',
        color: colors.silver,
        fontSize: 50
    },
    imageLogo: {
        width: 200,
        height: 200,
        top: '30%'
    }

})