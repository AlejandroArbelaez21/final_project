import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


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
          <Button color='#fc6552' title="Rappi User" onPress={this.user}/>
        </View>
        <View style={styles.button}>
          <Button color='#fc6552' title="Rappi Tendero" onPress={this.tendero}/>
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
        height: 50
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 25
    }
});

export default Main;
