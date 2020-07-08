import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import firebase from 'firebase';
import SplashScreen from '../../main/SplashScreen'

export default class LoadingScreen extends Component {
  componentDidMount(){
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(courier => {
        if (courier){
            this.props.navigation.navigate('Courier');
        } else {
            this.props.navigation.navigate('LoginScreenCourier');
        }
    })
}
  render() {
    return (
      <SplashScreen/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });