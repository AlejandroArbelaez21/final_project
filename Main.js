import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  user = () => {
    this.props.navigation.navigate('User')
  }

  tendero = () => {
    this.props.navigation.navigate('Tendero')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>You are:</Text>
        </View>  
        <View style={styles.button}>
          <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#fc6552' gradientEnd="#fe2725" text="Rappi User" textStyle={{ fontWeight: 'bold' }} onPressAction={this.user}/>
        </View>
        <View style={styles.button}>
          <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#fc6552' gradientEnd="#fe2725" text="Rappi Tendero" textStyle={{ fontWeight: 'bold' }} onPressAction={this.tendero}/>
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
