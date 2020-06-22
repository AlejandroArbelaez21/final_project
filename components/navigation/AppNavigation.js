import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'
import SplashScreen from '../screens/SplashScreen'
import PrincipalScreen from '../screens/PrincipalScreen'

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
    Principal:{
        screen: PrincipalScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(AppNavigation)
