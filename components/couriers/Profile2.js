import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

class Profile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{marginTop: 40, flex: 1, justifyContent: 'center'}}>
            <Text style={[styles.h1, {marginBottom: 20}]}>Sergio!</Text>
            <Text style={[styles.h2]}>For your future Auteco Baja Boxer S</Text>
            <Text style={[styles.h2]}>Your goal is</Text>
            <Text style={{color:'black', margin:10, textAlign:'center', fontSize:20, fontWeight:'bold'}}>{this.currencyFormat(3499000)}</Text>
            <Text style={[styles.h2]}>And have collected</Text>
            <Text style={{color:'#5de143', margin:10, textAlign:'center', fontSize:20, fontWeight:'bold'}}>{this.currencyFormat(100000)}</Text>
            <Text style={styles.h2}>You need $3,399,000 more!</Text>
            <Text style={styles.h2}>You will be notified when you achieve your goal.</Text>
          </View>
          <View style={{flex: 0.25, justifyContent: 'center'}}>
            <Text style={[styles.h2, {marginBottom: 20}]}>(Remember to check this page regularly and to touch Info icon to know more)</Text>
          </View>
          <View style={{flex: 0.25, justifyContent: 'center'}}>
            <GradientButton GradientButton style={{alignSelf:'center', padding: 5, width:'103%'}} gradientBegin='#ff9259' gradientEnd="#ff2426" text="Edit Profile" textStyle={{ fontWeight: 'bold' }}
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


export default Profile2;
