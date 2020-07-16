import React from 'react';
import Blogs from './Blogs';
import MyInvestments from './MyInvestments';
import Edit from './Edit';
import Info from './Info';
import LogOut from './LogOut';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const Stack = createStackNavigator({
    Invertir: {
        screen: Blogs,
        navigationOptions: () => ({
            headerTitleAlign: "center",
            headerTitle:"Investments",
            headerShown: false,
        })
    },
    Edit: {
        screen: Edit,
        navigationOptions: () => ({
            headerTitleAlign: "center", 
            headerTitle:"Invest",
        })
    },
})

const BottomTab = createBottomTabNavigator({
    Invertir: {
        screen: Stack,
        navigationOptions: () => ({
        tabBarOptions: {
            activeTintColor: "#ff441f", // active icon color
            inactiveTintColor: '#929292',  // inactive icon color
            style: {
                backgroundColor: '#fff', // TabBar background
                height: 60
            }
        },
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="handshake-o"
                color={tintColor}
                size={30}
            />
        )
    })
    },
    Balance: {
        screen: MyInvestments,
        navigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: "#ff441f", // active icon color
                inactiveTintColor: '#929292',  // inactive icon color
                style: {
                    backgroundColor: '#fff', // TabBar background
                    height: 60
                }
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="usd"
                    color={tintColor}
                    size={30}
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
                    backgroundColor: '#fff', // TabBar background
                    height: 60
                }
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="info-circle"
                    color={tintColor}
                    size={30}
                />
            )
        })
    },
    Salir: {
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