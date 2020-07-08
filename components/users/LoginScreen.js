import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import GradientButton from 'react-native-gradient-buttons';
import MyTextInput from '../components/MyTextInput';

class LoginScreen extends Component {

    isUserEqual = (googleUser, firebaseUser) => {
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
      onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(
          function(firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
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
                        // console.log('Snapshot', snapshot);
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
      signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '592678624862-fii5oft9q9bc3ppmjl5bu5p5c6o7h0t5.apps.googleusercontent.com',
            //behavior: 'web',
            //iosClientId: '', //enter ios client id|
            scopes: ['profile', 'email']
          });
    
          if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      };
  
  render() {
      return (
      <View style={styles.container}>
      <StatusBar style={{backgroundColor: 'white'}} translucent={true}/>
      <View style={{flex: 1}}>
         <Image style={styles.image} source={require('../resources/images/rappilogo.png')}/>
      </View>
      <View style={{marginTop: 25, flex: 1}}>
         <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'/>
         <MyTextInput placeholder='Password' image='lock'
         bolGone={true} secureTextEntry={true}/>
      </View>
      <View style={styles.button}>
         <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Entrar" textStyle={{ fontWeight: 'bold', color: '#fff' }}/>
      </View>
      <View style={styles.button} >
         <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#fff' gradientEnd='#ff9259' text="Entrar con Google" textStyle={{ fontWeight: 'bold', color: '#000000' }} onPressAction={() => this.signInWithGoogleAsync()}/>
      </View>
      <View style={[styles.buttonTxt]} >
        <TouchableOpacity style={{alignSelf:'center', margin:20, backgroundColor: '#fff'}} onPress={() => Linking.openURL('https://www.rappi.com.co/login')}>
          <Text style={ [styles.txtTransparent, { textDecorationLine: 'underline', backgroundColor: '#fff' }]}>¿No tienes cuenta? Regístrate en Rappi</Text>
        </TouchableOpacity>
      </View>
   </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  button: {
    flex: 0.3,       
    padding: 5,
    width: "75%",
    height: 50,
    margin: 10     
  },
  buttonTxt: {
    flex: 0.3,       
    padding: 5,
    height: 50,
    margin: 10     
  },
  image: {
     width: 120,
     height: 120,
     borderRadius: 30,
     overflow: "hidden",
     borderWidth: 3,
     borderColor: "#ff2426",
     marginBottom:20,
     marginTop: 40
  },
  txtTransparent: {
    color: '#ff441f',
    fontSize: 14,
    backgroundColor: '#fff'
  },
  });