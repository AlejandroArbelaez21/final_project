import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import {postBlogs} from '../../actions';
import {connect} from 'react-redux';
import GradientButton from 'react-native-gradient-buttons';
import Motos from './motoViewer'
import ModalDropdown from 'react-native-modal-dropdown';

class Post extends Component {
  state = {
    title: "",
    debt: null,
    description: null
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  submit = () => {
    this.props.navigation.navigate('Router')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MOTOS</Text>
        <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#fc6552' gradientEnd="#fe2725" text="Finish" textStyle={{ fontWeight: 'bold' }} onPressAction={this.submit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff'
    }
})

export default connect(null, {postBlogs})(Post);