import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../../components/screens/SplashScreen';
import App from "../loginStack";

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