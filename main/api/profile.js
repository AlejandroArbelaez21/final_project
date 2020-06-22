import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './login';

export default class Profile extends Component {

    constructor(){
      super();
      this.state = {
        data: ''
    };
  }
    render(){
      return(
        <View style={styles.container}>
          <View>
            <Button onPress={this._getProfile} title="Post debt"/>
            <Text>{this.state.data}</Text>
          </View>
        </View>
      );
    }


    _getProfile = async () => {
      this.setState({text:'Clicked'})
      fetch('http://microservices.dev.rappi.com/api/storekeepers-ms/storekeeper/rappitendero/profile?cache=false', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
        },
      }).then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
        this.setState({data: JSON.stringify(resJson)})
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
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
