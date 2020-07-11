import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Linking,
    Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {

    const { colors } = useTheme();

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 6 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const updateSecureTextEntry = () => {
          setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 6 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 6 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    getRol = async (username, password) => {
        try {      
            const baseUrl = 'http://microservices.dev.rappi.com/api/rt-auth-helper/user/type?email=' + username;
            const response = await fetch(baseUrl);
            const rappiData = await response.json();
            const role = rappiData.user_type;
            if (role === 'courier'){
                await logCourier(username, password);
            } else {
                Alert.alert('Debes ser Rappi Tendero para ingresar');
            }
        }
        catch {
            Alert.alert('Ha ocurrido un problema. Intenta nuevamente');
            console.log('There has been a problem with your fetch operation');
        }
    }

    logCourier = async (usernameRappi, passwordRappi) => {
        try {
            const baseUrl = 'http://microservices.dev.rappi.com/api/login/storekeeper';
            const response = await fetch(baseUrl, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'uuid': '550e8400-e29b-41d4-a716-4466554400001234567',
                    'platform': '2'
                },
                body: JSON.stringify({
                    client_secret: "W8dOKF1mdHaG9wBNyoOCEBgHajO66GEl81lTDu2P",
                    client_id: "74HzD01JbhZ44iE1kh7Gt6dfNjEKrtWiz0FqTUDQ",
                    username: usernameRappi,
                    password: passwordRappi,
                    scope:"all"
                })
            });
            const rappiData = await response.json();
            const profile = rappiData.storekeeper_type;
            if(profile === 'rappitendero'){
                navigation.navigate('Courier', { rappiData });
            } else {
                Alert.alert('Email o contraseña incorrectos. Intenta nuevamente');
                console.log('wrong email or password');
            }
        }
        catch {
            Alert.alert('Ha ocurrido un problema. Intenta nuevamente');
            console.log('There has been a problem with your fetch operation');
        }
    }
   
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#ff2426' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton={10000}
                    delay={1500}
                    source={require('../resources/images/rappilogo.png')}
                    style={styles.logo}
                />
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                duration={1000}
                style={[styles.footer, { backgroundColor: colors.background }]}
            >
                <Text style={[styles.text_footer, { color: colors.text }]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput 
                        placeholder="Tu email"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, { color: colors.text }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                    : null}
                </View>
                { data.isValidUser ? null : 
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={500}
                    >
                        <Text style={styles.errorMsg}>Ingresa un email válido</Text>
                    </Animatable.View>
                }
                <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>Contraseña</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput 
                        placeholder="Tu contraseña"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                            <Feather 
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        :
                            <Feather 
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                { data.isValidPassword ? null : 
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={500}
                    >
                    <Text style={styles.errorMsg}>La contraseña debe tener al menos 6 dígitos</Text>
                    </Animatable.View>
                }
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {getRol(data.username, data.password)}}
                    >
                        <Text style={[styles.textSign, { color:'#fff' }]}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.8, justifyContent: 'flex-end', alignContent: 'center'}}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('http://bit.ly/2ozOyOF')}
                    >
                        <Text style={[styles.textSignUp, { color: '#ff2426' }]}>¿Aún no eres Rappi tendero? Regístrate</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2.5,
        elevation: 18,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderColor: 'gray',
        borderWidth: 0.1
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
        logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 10
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        backgroundColor: "#ff2426",
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.1
        },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textSignUp: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
 });