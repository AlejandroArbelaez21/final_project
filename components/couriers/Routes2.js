import React from 'react';
import Profile2 from './Profile2';
import Info from './Info';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const TenStack = createStackNavigator({
    Profile2: {
        screen: Profile2,
        navigationOptions: () => ({
            headerTitleAlign: "center",
            headerTitle:"Investments",
            headerShown: false
            
        })
    },
})

const BottomTab = createBottomTabNavigator({
    Profile: {
        screen: TenStack,
        navigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: '#ff441f', // active icon color
                inactiveTintColor: '#929292',  // inactive icon color
                style: {
                    backgroundColor: '#fff' // TabBar background
                }
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user-circle"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Info: {
        screen: Info,
        navigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: '#ff441f', // active icon color
                inactiveTintColor: '#929292',  // inactive icon color
                style: {
                    backgroundColor: '#fff' // TabBar background
                }
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="info-circle"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
})
let Routes = '';
export default Routes = createAppContainer(BottomTab)