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
    motoPrice: this.props.navigation.state.params.motoInfo.motoPrice,
    motoName: this.props.navigation.state.params.motoInfo.motoName,
    motoBrand: this.props.navigation.state.params.motoInfo.brand,
    invest: ''
  }

  invested(title, content){
    Alert.alert("You have invested $" + content + ' in ' + title + '! Remember to watch terms and conditions of your investment in Info')
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

currencyFormat = (num) => {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.h1}>{this.state.title}</Text>
          <Text style={[styles.h2, {marginBottom: 20}]}>{this.state.description}</Text>
          <Text style={styles.h2}>This person needs to collect {this.currencyFormat(parseInt(this.state.motoPrice))} for a {this.state.motoBrand} {this.state.motoName}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.h1}>How much do you want to invest?</Text>
          <TextInput keyboardType = 'number-pad'
                    style={{marginBottom: 20, marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
                    placeholder="min. $20.000"
                    value={`${this.state.invest}`}
                    onChangeText={(text)=> this.onChanged(text)}
                    maxLength={6}/>
        </View>
        <View style={{flex: 1}}>
          <GradientButton GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Invest" textStyle={{ fontWeight: 'bold' }}
          onPressAction={this.submit}/>
        </View>
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
    },
    h1: {
      margin: 20,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fc6552'
    },
    h2: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
    },
})

export default connect(null, {editBlog})(Edit);