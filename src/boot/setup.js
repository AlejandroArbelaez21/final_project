import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../../app/screens/SplashScreen';
import App from "../app";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

const Setup = createStackNavigator({
    Splash:{
       screen: SplashScreen,
       navigationOptions:{
           headerShown: false,
       }
    },
    App:{
        screen: App,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(Setup)