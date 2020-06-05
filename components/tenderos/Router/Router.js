import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Post from '../Post';
import Routes from '../Routes';


const Router = createStackNavigator({
  Post : {
    screen : Post,
    navigationOptions: {
      title: 'RAPPI',
      headerTitleAlign: 'center',
      headerShown: false
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