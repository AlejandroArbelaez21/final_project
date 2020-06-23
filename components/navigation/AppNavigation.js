import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'
import SplashScreen from '../screens/SplashScreen'

const AppNavigation = createStackNavigator({
    Splash:{
       screen: SplashScreen,
       navigationOptions:{
           headerShown: false,
       }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(AppNavigation)
