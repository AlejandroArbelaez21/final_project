import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {postBlogs} from '../../actions';
import {connect} from 'react-redux';

class Post extends Component {
  state = {
    title: "",
    content:""
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  submit = () => {
    this.props.postBlogs(this.state.title, this.state.content)
    this.setState({
      title: "",
      content:""      
    })
    this.props.navigation.navigate('Router')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Post</Text>
        <TextInput style={{marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="title" onChangeText={ title => this.setState({title})} value={this.state.title}/>
        <TextInput style={{marginTop: 20, height: 90, borderColor: 'gray', borderWidth: 1}} placeholder="content" onChangeText={ content => this.setState({content})} value={this.state.content}/>
        <Button title="Submit" onPress={this.submit}/>
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