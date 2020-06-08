import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { loginStyles} from '../final_project/app/styles/styles'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  LoginUser = () => {
    this.props.navigation.navigate('LoginUser')
  }

  LoginCurrier = () => {
    this.props.navigation.navigate('LoginCurrier')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>You are:</Text>
        </View>
        <View style={loginStyles.btnMain}>
          <TouchableOpacity>
            <Text style={ loginStyles.btntxt} onPress={this.LoginUser}>RappiUser</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.btnMain}>
          <TouchableOpacity>
            <Text style={ loginStyles.btntxt} onPress={this.LoginCurrier}>RappiTendero</Text>
          </TouchableOpacity>
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
        backgroundColor: 'white',
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
