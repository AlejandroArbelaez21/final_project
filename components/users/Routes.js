import React from 'react';
import Blogs from './Blogs';
import MyInvestments from './MyInvestments';
import Edit from './Edit';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const Stack = createStackNavigator({
    Investments: {
        screen: Blogs,
        navigationOptions: () => ({
            headerTitleAlign: "center",
            headerTitle:"Investments"
            
        })
    },
    Edit: {
        screen: Edit,
        navigationOptions: () => ({
            headerTitleAlign: "center", 
            headerTitle:"Invest"
        })
    },
})

const BottomTab = createBottomTabNavigator({
    Investments: {
        screen: Stack,
        navigationOptions: () => ({
        tabBarOptions: {
            activeTintColor: '#F8F8F8', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            style: {
                backgroundColor: '#171F33' // TabBar background
            }
        },
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="edit"
                color={tintColor}
                size={24}
            />
        )
    })
    },
    MyInvestments: {
        screen: MyInvestments,
        navigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: '#F8F8F8', // active icon color
                inactiveTintColor: '#586589',  // inactive icon color
                style: {
                    backgroundColor: '#171F33' // TabBar background
                }
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="close"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
})
let Routes = '';
export default Routes = createAppContainer(BottomTab)