import React, { Component, useState } from 'react';
import { Alert, StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import GradientButton from 'react-native-gradient-buttons';
import MyTextInput from '../components/MyTextInput';

class LoginScreen extends Component {
   //This function allow hide and show the eye of the password with a click
   //const [hidePassword, setHidePassword] = useState(true)

   constructor(props){
      super();
      this.state = {
        userType: '',
        email: '',
        password: ''
      };
   }

   getRol = async () => {
      try {      
         const baseUrl = 'http://microservices.dev.rappi.com/api/rt-auth-helper/user/type?email=' + this.state.email;
         const response = await fetch(baseUrl);
         const data = await response.json();
         const role = data.user_type;
         if (role === 'courier'){
            await this.logCourier();
         } else {
            Alert.alert('Debes ser Rappi Tendero para ingresar');
         }
      }
      catch {
         Alert.alert('Ha ocurrido un problema. Intenta nuevamente');
         console.log('There has been a problem with your fetch operation');
      }
   }

   logCourier = async () => {
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
            username: this.state.email,
            password: this.state.password,
            scope:"all"
         })
         });
         const data = await response.json();
         const profile = data.storekeeper_type;
         if(profile === 'rappitendero'){
            this.props.navigation.navigate('Courier', { data });
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
   
  render(){
   return(
      <View style={styles.container}>
      <StatusBar style={{backgroundColor: 'white'}} translucent={true}/>
      <View style={{flex: 0.7}}>
         <Image style={styles.image} source={require('../resources/images/rappilogo.png')}/>
      </View>
      <View style={{flex: 0.7, justifyContent: 'center'}}>
         <MyTextInput value={this.state.email} onChangeText={email => this.setState({email})} keyboardType='email-address' placeholder='E-mail' image='user'/>
         <MyTextInput value={this.state.password} onChangeText={password => this.setState({password})} placeholder='Password' image='lock'
         bolGone={true} secureTextEntry={true}/>
      </View>
      <View style={styles.button}>
         <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Entrar" textStyle={{ fontWeight: 'bold', color: '#fff' }} onPressAction={this.getRol}/>
      </View>
      <View style={[styles.buttonTxt]} >
        <TouchableOpacity style={{alignSelf:'center', margin:20, backgroundColor: '#fff'}} onPress={() => Linking.openURL('http://bit.ly/2ozOyOF')}>
          <Text style={ [styles.txtTransparent, { textDecorationLine: 'underline', backgroundColor: '#fff' }]}>¿Aún no eres Rappi tendero? Regístrate</Text>
        </TouchableOpacity>
      </View>
   </View>
   )
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
    },
    buttonTxt: {
      flex: 0.3,       
      padding: 5,
      height: 50,
      margin: 10     
    },
    image: {
       width: 130,
       height: 130,
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