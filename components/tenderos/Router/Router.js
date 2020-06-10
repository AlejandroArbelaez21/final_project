import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Post from '../Post';
import Routes from '../Routes';
import Motos from '../Motos';


const Router = createStackNavigator({
  Post : {
    screen : Post,
    navigationOptions: {
      title: 'Registration',
      headerTitleAlign: 'center',
      headerShown: true
    }
  },
  Motos : {
    screen : Motos,
    navigationOptions: {
      title: 'Choose your next motorcycle',
      headerTitleAlign: 'center',
      headerShown: true
    }
  },
  Router : {
    screen : Routes,
    navigationOptions: {
      title: 'RAPPI',
      headerTitleAlign: 'center',
      headerShown: false
    }
  },

});

export default createAppContainer(Router)