import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Linking,
    Dimensions,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';


const LoginScreen = () => {

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
   
    const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (
                  providerData[i].providerId ===
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                  providerData[i].uid === googleUser.getBasicProfile().getId()
                ) {
                  // We don't need to reauth the Firebase connection.
                  return true;
                }
            }
        }
        return false;
    };

    const onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(
            function(firebaseUser) {
                unsubscribe();
                // Check if we are already signed-in Firebase with the correct user.
                if (!isUserEqual(googleUser, firebaseUser)) {
                    // Build Firebase credential with the Google ID token.
                    var credential = firebase.auth.GoogleAuthProvider.credential(
                        googleUser.idToken,
                        googleUser.accessToken
                    );
                    // Sign in with credential from the Google user.
                    firebase
                        .auth()
                        .signInAndRetrieveDataWithCredential(credential)
                        .then(function(result) {
                            console.log('user signed in ');
                            if (result.additionalUserInfo.isNewUser) {
                                firebase
                                    .database()
                                    .ref('/user/' + result.user.uid)
                                    .set({
                                        gmail: result.user.email,
                                        profile_picture: result.additionalUserInfo.profile.picture,
                                        first_name: result.additionalUserInfo.profile.given_name,
                                        last_name: result.additionalUserInfo.profile.family_name,
                                        created_at: Date.now(),
                                        invested: 0
                                    })
                                    .then(function(snapshot) {
                                        //console.log('Snapshot', snapshot);
                                    });
                            } else {
                                firebase
                                    .database()
                                    .ref('/user/' + result.user.uid)
                                    .update({
                                        last_logged_in: Date.now()
                                    });
                            }
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // The email of the user's account used.
                            var email = error.email;
                            // The firebase.auth.AuthCredential type that was used.
                            var credential = error.credential;
                            // ...
                        });
                } else {
                    console.log('User already signed-in Firebase.');
                }
            }.bind(this)
        );
    };
    
    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: '592678624862-fii5oft9q9bc3ppmjl5bu5p5c6o7h0t5.apps.googleusercontent.com',
                iosClientId: '592678624862-f7be8qgqlk6jji7nin22pnn6q1gu80i0.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });
            if (result.type === 'success') {
                onSignIn(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
      };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#ff441f' barStyle="light-content"/>
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
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
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
                        onPress={() => {signInWithGoogleAsync()}}
                    >
                    <View style={{width: '20%', alignItems: 'center'}}>
                        <Image style={{width: 45, height: 45}} source={require('../resources/images/GoogleLogo.png')}/>
                    </View>
                    <Text style={[styles.textSign, { color:'#fff' }]}>Entrar con Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 0.8, justifyContent: 'flex-end', alignContent: 'center'}}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.rappi.com.co/login')}
                    >
                        <Text style={[styles.textSignUp, { color: '#ff441f' }]}>¿No tienes cuenta? Regístrate en Rappi</Text>
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
        marginTop: 50,
    },
    signIn: {
        backgroundColor: "#ff2426",
        width: '100%',
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.1,
        flexDirection: 'row'
      },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 22
    },
    textSignUp: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});