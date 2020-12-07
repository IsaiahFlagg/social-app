import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global'

import colors from '../config/colors';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';



export default function WelcomeScreen() {

    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const [userData, setUserData] = useState([
        {email: 'isaiahnflagg@gmail.com', password: 'cisco123', key: '1'},
    ]);

    const addUserData = (data) => {
        data.key = Math.random().toString();
        setUserData((currentUserData) => {
            return [data, ...currentUserData];
        });
        setRegisterModalOpen(false);
    }
console.log(userData);

    return (


        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>

            <View>
                <Modal visible={loginModalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.loginModalContent}>
                            <MaterialIcons
                                name='close'
                                size={35}
                                style={styles.modalClose}
                                onPress={() => setLoginModalOpen(false)}
                            />
                            <LoginForm />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
            <View>
                <Modal visible={registerModalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.registerModalContent}>
                            <MaterialIcons
                                name='close'
                                size={35}
                                style={styles.modalClose}
                                onPress={() => setRegisterModalOpen(false)}
                            />
                            <RegisterForm addUserData={addUserData} />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>

            <View style={styles.logoContainer}>

                <Text style={styles.title}>Flagg's Dev Community</Text>
            </View>

            <View style={styles.loginButton}>
                <Text style={styles.loginButtonText} onPress={() => setLoginModalOpen(true)}>Login</Text>
            </View>

            <View style={styles.registerButton}>
                <Text style={styles.registerButtonText} onPress={() => setRegisterModalOpen(true)} >Register</Text>
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
    },
    modalClose: {
        marginLeft: 335,
        margin: 10,
        borderWidth: 1,
        borderColor: colors.silver,
        padding: 5,
        borderRadius: 10,
        width: 45,
    },
    loginModalContent: {
        flex: 1,
    },
    registerModalContent: {
        flex: 1,
    }

})
