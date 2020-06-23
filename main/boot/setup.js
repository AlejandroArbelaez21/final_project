import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../../components/screens/SplashScreen';
import App from "../loginStack";

//This is the stack that includes the firts splash and the app
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