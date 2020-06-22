import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Login extends Component {

    constructor(){
      super();
      this.state = {
        access_token: '',
        token_type: '',
        expires_in: '',
        refresh_token: '',
        storekeeper_type: ''
    };
  }
    render(){
      return(
        <View style={styles.container}>
          <Button onPress={this._posData} title="Post debt"/>
          <Text>{this.state.access_token}</Text>
          <Text>{this.state.token_type}</Text>
          <Text>{this.state.expires_in}</Text>
          <Text>{this.state.refresh_token}</Text>
          <Text>{this.state.storekeeper_type}</Text>
        </View>
      );
    }
    _posData = async () => {
      this.setState({text:'Clicked'})
      fetch('http://microservices.dev.rappi.com/api/login/storekeeper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'uuid': '550e8400-e29b-41d4-a716-4466554400001234567',
          'platform': '2'
        },
        body: JSON.stringify({
          client_secret: "W8dOKF1mdHaG9wBNyoOCEBgHajO66GEl81lTDu2P",
          client_id: "74HzD01JbhZ44iE1kh7Gt6dfNjEKrtWiz0FqTUDQ",
          username: "tutor3@rappi.com",
          password: "123456",
          scope:"all"
        })
      }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({access_token: JSON.stringify(responseJson.access_token),
                      token_type: JSON.stringify(responseJson.token_type),
                      expires_in: JSON.stringify(responseJson.expires_in),
                      refresh_token: JSON.stringify(responseJson.refresh_token),
                      storekeeper_type: JSON.stringify(responseJson.storekeeper_type)})
        
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
