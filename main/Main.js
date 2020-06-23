import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

//Choose profile type
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  LoginUser = () => {
    this.props.navigation.navigate('LoginUser')
  }

  LoginCourier = () => {
    this.props.navigation.navigate('LoginCourier')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='black' barStyle="default" hidden={false} translucent={false}/>
        <TouchableOpacity onPress={this.LoginUser} style={styles.button}>
          <View style={styles.button}>
            <ImageBackground source={require('../components/resources/images/user.jpg')}
            style={{flex: 1, width: '100%', justifyContent:'center'}}>
              <Text style={styles.text}>Rappi User</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.LoginCourier} style={styles.button}>
          <View style={styles.button}>
            <ImageBackground source={require('../components/resources/images/courier.jpeg')}
            style={{flex: 1, width: '100%', justifyContent:'center'}}>
              <Text style={styles.text}>Rappi Courier</Text>
            </ImageBackground>
          </View>
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
