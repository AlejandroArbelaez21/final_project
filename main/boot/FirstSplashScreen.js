import React, {Component} from 'react'
import SplashScreen from '../SplashScreen';

export default class FirstSplashScreen extends Component{
    //Navigate to the screen entered as a parameter

    async goToScreen(path){
        try {
            const toStack = await this.props.navigation.navigate(path);
        }
        catch {
            console.log('Error while charging the app')
        }
    }

    componentDidMount(){
        //set a delay a the called function
        setTimeout ( () =>{
            this.goToScreen('loginStack')
        }, 4000, this)
    }

    render(){
        return(
            <SplashScreen/>
        )
    }
}