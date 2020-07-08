import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstSplashScreen from './FirstSplashScreen';
import loginStack from "../loginStack";

//This is the stack that includes the firts splash and the app
const Setup = createStackNavigator({
    Splash:{
        screen: FirstSplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    loginStack:{
        screen: loginStack,
        navigationOptions:{
            headerShown: false,
        }
    }
})

export default createAppContainer(Setup)