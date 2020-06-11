import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {postBlogs} from '../../actions';
import {connect} from 'react-redux';
import GradientButton from 'react-native-gradient-buttons';
import Popup from './Popup';


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
    this.props.postBlogs(this.state.title, 0, this.state.debt, this.state.description)
    this.setState({
      title: "",
      debt: null,
      description: null
    })
    this.props.navigation.navigate('Motos')
  }

  render() {
    return (
      <View style={styles.container}>
          <Popup/>
        <TextInput style={{padding: 10, height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Full name" onChangeText={ title => this.setState({title})} value={this.state.title}/>
        <TextInput style={{padding: 10, marginTop: 20, height: 90, borderColor: 'gray', borderWidth: 1}} placeholder="description" onChangeText={ description => this.setState({description})} value={this.state.description}/>
        <TextInput style={{padding: 10, marginBottom: 20, marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}}
                   keyboardType = 'number-pad'
                   placeholder="Motorcycle price"
                   onChangeText={ debt => this.setState({debt})}
                   value={this.state.debt}/>
        <GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Pick your moto" textStyle={{ fontWeight: 'bold' }} onPressAction={this.submit}/>
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