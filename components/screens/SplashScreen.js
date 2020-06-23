import React, {Component} from 'react'
import { View, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { splashStyles } from '../styles/styles'

export default class LoginScreen extends Component{
    //Navigate to the screen entered as a parameter
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){
        //set a delay a the called function
        setTimeout ( () =>{
            this.goToScreen('App')
        }, 4000, this)
    }

    render(){
        return(
            <View style={ splashStyles.image }>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                        width: 200,
                        height: 200,
                        margin: 100,
                    }}
                    source={require('../resources/images/load.gif')}
                />
            </View>
        )
    }
}