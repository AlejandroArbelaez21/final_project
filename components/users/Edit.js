import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {editBlog} from '../../actions';
import {connect} from 'react-redux';

class Edit extends Component {
  state = {
    title: this.props.navigation.state.params.title,
    content: this.props.navigation.state.params.content,
    key: this.props.navigation.state.params.key,
    debt: this.props.navigation.state.params.debt,
    invest: ''
  }

  submit = () => {
    const result = parseInt(this.state.content) + parseInt(this.state.invest);
    console.log(result)
    this.props.editBlog(this.state.title, result, this.state.key);
    
    this.setState({
      title: "",
      content: "",
      key: ""
    })

    this.props.navigation.navigate('Invest');
  }

  onChanged (text) {
    this.setState({
        invest: text.replace(/[^0-9]/g, ''),
    });
}


  render() {
    return (
      <View style={styles.container}>
        <Text>How much do you want to invest in</Text>
        <Text>{this.state.title}</Text>
        <TextInput keyboardType = 'number-pad'
                   style={{marginTop: 20, height: 90, borderColor: 'gray', borderWidth: 1, padding: 5}}
                   placeholder="min. $20.000"
                   value={`${this.state.invest}`}
                   onChangeText={(text)=> this.onChanged(text)}
                   maxLength={6}/>
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

export default connect(null, {editBlog})(Edit);