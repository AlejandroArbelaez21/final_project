import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../Main';
import User from '../User';
import Courier from '../Tendero';
import LoginScreenUser from '../app/screens/LoginScreenUser';
import LoginScreenCourier from '../app/screens/LoginScreenCourier';
import SplashScreenUser from '../components/users/SplashScreen';
import SplashScreenCourier from '../components/tenderos/SplashScreen';

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
  LoginCourier : {
    screen : LoginScreenCourier,
    navigationOptions : {
      title : 'Go Back',
      headerShown: true,
    }
  },
  SplashUser:{
    screen: SplashScreenUser,
    navigationOptions:{
        headerShown: false,
    }
  },
  SplashCourier:{
    screen: SplashScreenCourier,
    navigationOptions:{
        headerShown: false,
    }
  },
  User : {
    screen : User,
    navigationOptions : {
      title : 'Login',
      headerShown: false,
    }
  },
  Courier : {
    screen : Courier,
    navigationOptions : {
      title : 'Login',
      headerShown: false,
    }
  }
});

export default createAppContainer(LoginNavigator)