import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Login extends Component {

    constructor(){
      super();
      this.state = {
        storekeeperId: ''
    };
  }
    render(){
      return(
        <View style={styles.container}>
          <Button onPress={this._posData} title="Post debt"/>
          <Text>{this.state.storekeeperId}</Text>
          <Text>{this.state.userId}</Text>
          <Text>{this.state.amount}</Text>
          <Text>{this.state.comment}</Text>
          <Text>{this.state.createdAt}</Text>
          <Text>{this.state.updatedAt}</Text>
          <Text>{this.state.reason}</Text>
          <Text>{this.state.orderId}</Text>
          <Text>{this.state.id}</Text>
          <Text>{this.state.email}</Text>
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
          username: "test01@rappi.com",
          password: "234567",
          scope:"all"
        })
      }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({storekeeperId: JSON.stringify(responseJson.storekeeperId)})
      })
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
