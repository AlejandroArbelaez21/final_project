import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import SplashScreen from '../../main/SplashScreen'

export default class LoadingScreen extends Component {
  componentDidMount(){
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user){
            this.props.navigation.navigate('User');
        } else {
            this.props.navigation.navigate('LoginScreenUser');
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