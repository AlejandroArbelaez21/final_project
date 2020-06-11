import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

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
        <View>
          <Text style={styles.text}>You are:</Text>
        </View>  
        <View style={styles.button} >
          <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Rappi User" textStyle={{ fontWeight: 'bold' }} onPressAction={this.LoginUser}/>
        </View>
        <View style={styles.button}>
          <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Rappi Courier" textStyle={{ fontWeight: 'bold' }} onPressAction={this.LoginCourier}/>
        </View>
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
        color: '#fff',
        padding: 5,
        width: "65%",
        height: 50,
        marginTop: 40
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 25
    }
});

export default Main;
