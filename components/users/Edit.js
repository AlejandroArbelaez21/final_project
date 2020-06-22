import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import {editBlog} from '../../firebase/actions';
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
    revenue: this.props.navigation.state.params.motoInfo.revenue,
    time: this.props.navigation.state.params.time,
    rate: this.props.navigation.state.params.rate,
    invest: ''
  }

  invested(title, content){
    Alert.alert("You have invested $" + content + ' in ' + title + '!')
  }

  submit = () => {
    if(parseInt(this.state.invest) < 20000) {
       Alert.alert('Your invest should be $20.000 or higher');
    } else {
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
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={[styles.h1, {marginBottom: 20}]}>{this.state.title}</Text>
            <Text style={[styles.h2, {marginBottom: 10}]}>"{this.state.description}"</Text>
            <Text style={{color:'black', margin:10, textAlign:'center', fontSize:20, fontWeight:'bold'}}>Motorcycle: {this.state.motoBrand} {this.state.motoName}</Text>
            <Text style={{color:'black', margin:10, textAlign:'center', fontSize:20, fontWeight:'bold'}}>Goal: {this.currencyFormat(parseInt(this.state.motoPrice))}</Text>
            <Text style={{color:'#fc6552', margin:10, textAlign:'center', fontSize:20, fontWeight:'bold'}}>Money collected: {this.currencyFormat(parseInt(this.state.motoPrice) - parseInt(this.state.content))}</Text>
            <Text style={[styles.h2]}></Text>
            <Text style={[styles.h2]}>This person has {this.state.time} years in Rappi, with a rate of {this.state.rate}</Text>
            <Text style={[styles.h2]}></Text>
            <Text style={styles.h2}>Your income for invest in this person will be</Text>
            <Text style={{color:'#5de143', margin:10, textAlign:'center', fontSize:25, fontWeight:'bold'}}>{(this.state.revenue / 2).toFixed(2)}%</Text>
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
          <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
            <GradientButton GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Invest" textStyle={{ fontWeight: 'bold' }}
            onPressAction={this.submit}/>
          </View>
        </ScrollView>
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