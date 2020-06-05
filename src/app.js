import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../Main';
import User from '../User';
import Tendero from '../Tendero';

const LoginNavigator = createStackNavigator({
  Main : {
    screen : Main,
    navigationOptions: {
      title: 'RAPPI',
      headerTitleAlign: 'center',
      headerShown: false
    }
  },
  User : {
    screen : User,
    navigationOptions : {
      title : 'Investor',
      headerShown: false
    }
  },
  Tendero : {
    screen : Tendero,
    navigationOptions : {
      title : 'Rappi Tendero',
      headerShown: false
    }
  }
});

export default createAppContainer(LoginNavigator)