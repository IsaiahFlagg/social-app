import React from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import FlatButton from './FlatButton'
import { globalStyles } from '../styles/global'

const loginSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),


})

export default function LoginForm() {


    return (
        <View style={styles.form}>
        <Text style={styles.formTitle}>Login</Text>
            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addUserData(values);
                }} 
            >
                {(props) => (
                    <View>
                        

                        <TextInput
                            style={styles.input}
                            placeholder='example123@email.com'
                            onChangeText={props.handleChange('email')}
                            value={props.values.title}
                            onBlur={props.handleBlur('email')}
                        />
                      

                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder='password'
                            onChangeText={props.handleChange('password')}
                            value={props.values.body}
                            onBlur={props.handleBlur('password')}
                        />
                        
                    
                       <FlatButton text='submit' onPress={props.handleSubmit} />
                      

                    </View>

                )}
            </Formik>
        </View>
    )
}

                

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 30,
    },
    input: {
        borderBottomWidth: 3,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 50,
        
    },
    formTitle: {
        color: 'hotpink',
        textAlign: 'center',
        marginBottom: 50,
        fontSize: 50,
    }
})