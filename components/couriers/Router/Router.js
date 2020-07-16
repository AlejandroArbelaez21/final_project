import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Post from '../Post';
import Routes from '../Routes';


//Stack that contains all the courier screens
const Router = createStackNavigator({
  Post : {
    screen : Post,
    navigationOptions: {
      title: 'Registro',
      headerTitleAlign: 'center',
      headerShown: true
    },
    params: { user: Router },
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

console.log('------------');
//console.log(Router.props);
console.log('------------');

export default createAppContainer(Router)