import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {editBlog} from '../../actions';
import {connect} from 'react-redux';
import GradientButton from 'react-native-gradient-buttons';

class Edit extends Component {
  state = {
    title: this.props.navigation.state.params.title,
    content: this.props.navigation.state.params.content,
    key: this.props.navigation.state.params.key,
    description: this.props.navigation.state.params.description,
    debt: this.props.navigation.state.params.debt,
    invest: '',
    subkey: ''
  }

  invested(title, content){
    Alert.alert("You have invested $" + content + ' in ' + title + '!')
  }

  counter(){
    this.setState({
      subkey: this.props.navigation.state.params.key
    })
    console.log(this.state.subkey)
  }

  submit = () => {
    if(parseInt(this.state.invest) < 20000) {
       Alert.alert('Your invest should be $20.000 or higher');
    } else {
    this.counter();
    this.invested(this.state.title, this.state.invest);
    const result = parseInt(this.state.content) + parseInt(this.state.invest);
    this.props.editBlog(this.state.title, result, this.state.key, this.state.description);
    
    this.setState({
      title: "",
      content: "",
      key: "",
      description: ""
    })

    this.props.navigation.navigate('Invest');
  }
  }

  onChanged (text) {
    this.setState({
        invest: text.replace(/[^0-9]/g, ''),
    });
}


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.title}</Text>
        <Text>{this.state.description}</Text>
        <Text>${this.state.debt}</Text>
        <Text>How much do you want to invest?</Text>
        <TextInput keyboardType = 'number-pad'
                   style={{marginBottom: 20, marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
                   placeholder="min. $20.000"
                   value={`${this.state.invest}`}
                   onChangeText={(text)=> this.onChanged(text)}
                   maxLength={6}/>
        <GradientButton GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Invest" textStyle={{ fontWeight: 'bold' }}
        onPressAction={this.submit}/>
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