import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors';



export default function WelcomeScreen() {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
            
            <Text style={styles.title}>Flaggs Dev Community</Text>
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.black,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.silver,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },
    loginButtonText: {
        textAlign: 'center',
        color: colors.white,
        top: '10%',
        fontSize: 35,
    },
    registerButtonText: {
        textAlign: 'center',
        top: '10%',
        fontSize: 35,
    },
    title: {
        color: colors.silver,
        fontSize: 30,
    }

})
