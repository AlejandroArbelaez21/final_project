import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class Rol extends Component {

    constructor(props){
      super();
      this.state = {
        userType: '',
        email: ''
      };
  }

    _getData = async () => {
      this.setState({text:'Clicked'})
      fetch('http://microservices.dev.rappi.com/api/rt-auth-helper/user/type?email=' + this.state.email, {
        method: 'GET',
      }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({userType: JSON.stringify(responseJson.user_type)})
        
      })
    }

    render(){
      return(
        <View style={styles.container}>
          <TextInput style={{padding: 5, marginBottom: 20, marginTop: 20, width: '80%', height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="title"
          value={this.state.email} onChangeText={ email => this.setState({email})}/>
          <Button onPress={this._getData} title="Get user rol"/>
          <Text>{this.state.userType}</Text>
        </View>
      );
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
