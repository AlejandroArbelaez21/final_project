import React from 'react';
import Post from './Post';
import Profile from './Profile';
import Thanks from './Thanks';
import MyInvestors from './MyInvestors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const TenStack = createStackNavigator({
    Investors: {
        screen: MyInvestors,
        navigationOptions: () => ({
            headerTitleAlign: "center",
            headerTitle:"Investments"
            
        })
    },
    Thanks: {
        screen: Thanks,
        navigationOptions: () => ({
            headerTitleAlign: "center", 
            headerTitle:"Invest"
        })
    },
})

const BottomTab = createBottomTabNavigator({
    Investors: {
        screen: TenStack,
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
                name="rocket"
                color={tintColor}
                size={24}
            />
        )
    })
    },
    Profile: {
        screen: Profile,
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
                    name="rocket"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
})
let Routes = '';
export default Routes = createAppContainer(BottomTab)