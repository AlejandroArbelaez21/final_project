import React from 'react';
import Profile from './Profile';
import Info from './Info';
import LogOut from './LogOut';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

//This is a stack that contains all the screens related to the courier
const TenStack = createStackNavigator({
    Profile: {
        screen: Profile,
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
    },
    LogOut: {
        screen: LogOut,
        navigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: '#ff441f', // active icon color
                inactiveTintColor: '#929292',  // inactive icon color
                style: {
                    backgroundColor: '#fff', // TabBar background
                    height: 60
                }
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="power-off"
                    color={tintColor}
                    size={30}
                />
            )
        })
    }
})
let Routes = '';
export default Routes = createAppContainer(BottomTab)