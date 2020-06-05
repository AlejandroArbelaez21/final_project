import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Rol from './api/rol';
import Debt from './api/debt';
import Login from './api/login';
import Profile from './api/profile';

export default class App extends Component {

    render(){
      return(
        <Rol/>
      );
    }
}
