import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


//Choose profile type
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  LoginUser = () => {
    this.props.navigation.navigate('LoadingScreenUser')
  }

  LoginCourier = () => {
    this.props.navigation.navigate('LoadingScreenCourier')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#ff2426' barStyle="light-content"/>
        <TouchableOpacity onPress={this.LoginUser} style={styles.button}>
          <Animatable.View style={styles.button}
            animation="bounceIn"
            duraton={10000}
            delay={500}
          >
            <ImageBackground source={require('../components/resources/images/user.jpg')}
            style={{flex: 1, width: '100%', justifyContent:'center'}}>
              <Text style={styles.text}>Rappi Usuario</Text>
            </ImageBackground>
          </Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.LoginCourier} style={styles.button}>
          <Animatable.View style={styles.button}
              animation="bounceIn"
              duraton={10000}
              delay={1000}
          >
            <ImageBackground source={require('../components/resources/images/courier.jpeg')}
            style={{flex: 1, width: '100%', justifyContent:'center'}}>
              <Text style={styles.text}>Rappi Tendero</Text>
            </ImageBackground>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%'       
    },
    text: {
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10,
    }
});



export default Main;