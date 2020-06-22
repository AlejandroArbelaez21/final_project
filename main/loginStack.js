import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './Main';
import User from './User';
import CourierSig from './CourierSig';
import CourierLog from './CourierLog';
import LoginScreenUser from '../components/screens/LoginScreenUser';
import LoginScreenCourier from '../components/screens/LoginScreenCourier';
import SplashScreenUser from '../components/users/SplashScreen';
import SplashScreenCourierSig from '../components/couriers/SplashScreenSig';
import SplashScreenCourierLog from '../components/couriers/SplashScreenLog';

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
  SplashCourierSig:{
    screen: SplashScreenCourierSig,
    navigationOptions:{
        headerShown: false,
    }
  },
  SplashCourierLog:{
    screen: SplashScreenCourierLog,
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
  CourierSig : {
    screen : CourierSig,
    navigationOptions : {
      title : 'Login',
      headerShown: false,
    }
  },
  CourierLog : {
    screen : CourierLog,
    navigationOptions : {
      title : 'Login',
      headerShown: false,
    }
  }
});

export default createAppContainer(LoginNavigator)