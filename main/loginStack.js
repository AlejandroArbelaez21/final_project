import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './Main';
import User from './User';
import Courier from './Courier';
import LoginScreenCourier from '../components/couriers/LoginScreen';
import LoadingScreenCourier from '../components/couriers/LoadingScreen';
import LoginScreenUser from '../components/users/LoginScreen';
import LoadingScreenUser from '../components/users/LoadingScreen';

//Stack where the login screens and the started code of courier and user are located
const LoginNavigator = createStackNavigator({
  Main : {
    screen : Main,
    navigationOptions: {
      title: 'RAPPI',
      headerTitleAlign: 'center',
      headerShown: false
    }
  },
  LoginScreenUser : {
    screen : LoginScreenUser,
    navigationOptions : {
      title : 'Atrás',
      headerShown: true
    }
  },
  LoadingScreenUser : {
    screen : LoadingScreenUser,
    navigationOptions : {
      title : 'Go Back',
      headerShown: false
    }
  },
  LoginScreenCourier : {
    screen : LoginScreenCourier,
    navigationOptions : {
      title : 'Atrás',
      headerShown: true
    }
  },
  LoadingScreenCourier : {
    screen : LoadingScreenCourier,
    navigationOptions : {
      title : 'Go Back',
      headerShown: false
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