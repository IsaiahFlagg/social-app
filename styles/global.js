import { StyleSheet } from 'react-native';
import colors from '../config/colors'

export const globalStyles = StyleSheet.create({
    buttonText: {
        fontFamily: 'fredokaone-regular',
    },
    container: {
        flex:1,
        padding: 35
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: colors.black,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },
    formTitle: {
        color: 'hotpink',
        textAlign: 'center',
        marginBottom: 50,
        fontSize: 50,
    }
})