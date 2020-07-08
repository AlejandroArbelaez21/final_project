import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default class SplashScreen extends Component {

  render() {
    return (
        <View style={ styles.image }>
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
            source={require('../components/resources/images/load.gif')}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})