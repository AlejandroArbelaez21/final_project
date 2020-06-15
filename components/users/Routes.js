import React from 'react';
import Blogs from './Blogs';
import MyInvestments from './MyInvestments';
import Edit from './Edit';
import Info from './Info';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const Stack = createStackNavigator({
    Invest: {
        screen: Blogs,
        navigationOptions: () => ({
            headerTitleAlign: "center",
            headerTitle:"Investments",
            headerShown: false   
        })
    },
    Edit: {
        screen: Edit,
        navigationOptions: () => ({
            headerTitleAlign: "center", 
            headerTitle:"Invest",
        })
    }
})

const BottomTab = createBottomTabNavigator({
    Invest: {
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
    Investments: {
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
    }
})
let Routes = '';
export default Routes = createAppContainer(BottomTab)