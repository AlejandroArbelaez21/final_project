import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Profile extends Component {

    constructor(){
      super();
      this.state = {
        amount: '',
        comment: '',
        createdAt: '',
        email: '',
        id: '',
        orderId: '',
        reason: '',
        storekeeperId: '',
        updatedAt: '',
        userId: ''
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
      fetch('http://microservices.dev.rappi.com/api/storekeepers-ms/storekeeper/rappitendero/profile?cache=false', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 48cPi666tH4a0AtPehpkmcF6TntZ80xL8EFEIRmm'
        },
      }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson[0])
        this.setState({storekeeperId: JSON.stringify(responseJson[0].storekeeperId),
                       userId: JSON.stringify(responseJson[0].userId),
                       amount: JSON.stringify(responseJson[0].amount),
                       comment: JSON.stringify(responseJson[0].comment),
                       createdAt: JSON.stringify(responseJson[0].createdAt),
                       email: JSON.stringify(responseJson[0].email),
                       id: JSON.stringify(responseJson[0].id),
                       orderId: JSON.stringify(responseJson[0].orderId),
                       reason: JSON.stringify(responseJson[0].reason),
                       updatedAt: JSON.stringify(responseJson[0].updatedAt)})
        
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
