import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Post from '../Post';
import Routes from '../Routes';
import Motos from '../Motos';

//Stack that contains all the courier screens
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
  Routes : {
    screen : Routes,
    navigationOptions: {
      title: 'RAPPI',
      headerTitleAlign: 'center',
      headerShown: false
    }
  },

});

export default createAppContainer(Router)