import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../Main';
import User from '../User';
import Currier from '../Tendero';
import LoginScreenUser from '../app/screens/LoginScreenUser';
import LoginScreenCurrier from '../app/screens/LoginScreenCurrier';

const LoginNavigator = createStackNavigator({
  Main : {
    screen : Main,
    navigationOptions: {
      title: 'RAPPI',
      headerTitleAlign: 'center',
      headerShown: false
    }
  },
  LoginUser : {
    screen : LoginScreenUser,
    navigationOptions : {
      title : 'Go Back',
      headerShown: true
    }
  },
  LoginCurrier : {
    screen : LoginScreenCurrier,
    navigationOptions : {
      title : 'Go Back',
      headerShown: true,
    }
  },
  User : {
    screen : User,
    navigationOptions : {
      title : 'Login',
      headerShown: true,
    }
  },
  Currier : {
    screen : Currier,
    navigationOptions : {
      title : 'Login',
      headerShown: true,
    }
  }
});

export default createAppContainer(LoginNavigator)