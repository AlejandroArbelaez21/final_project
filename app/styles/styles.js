import { StyleSheet } from 'react-native'
import color from './colors'

//Styles for SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.WHITE,
    }
})

//Styles for LoginScreen
const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.WHITE,
        justifyContent: 'center',
        padding: 5,
    },

    logo: {
        paddingTop: 50,
        marginBottom: -15,
        alignItems: 'center',
    },

    btnMain: {
        width: 280,
        marginTop:15,
        marginBottom: 15,
        backgroundColor: color.ORANGE,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.ORANGE,
        width: 280,
        borderWidth: 2,
        marginBottom: 15,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
    },

    txtTransparent: {
        color: color.ORANGE,
        fontSize: 14,
    }
})

export { loginStyles, splashStyles }