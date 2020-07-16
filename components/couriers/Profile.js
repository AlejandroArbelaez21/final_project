import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  currencyFormat = (num) => {
    //convert number in currencyFormat
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{marginTop: 40, flex: 1, justifyContent: 'center'}}>
            <Text style={[styles.h1, {marginBottom: 20}]}>Sergio!</Text>
            <Text style={[styles.h2]}>Para tu futura Auteco Bajaj Boxer S</Text>
            <Text style={[styles.h2]}>Tu meta es</Text>
            <Text style={{color:'black', margin:10, textAlign:'center', fontSize:20, fontWeight:'bold'}}>{this.currencyFormat(3499000)}</Text>
            <Text style={[styles.h2]}>y has recolectado</Text>
            <Text style={{color:'#5de143', margin:10, textAlign:'center', fontSize:20, fontWeight:'bold'}}>{this.currencyFormat(0)}</Text>
            <Text style={styles.h2}>Necesitas $3,499,000 más!</Text>
            <Text style={styles.h2}>Serás notificado una vez alcances tu meta.</Text>
          </View>
          <View style={{flex: 0.25, justifyContent: 'center'}}>
            <Text style={[styles.h2, {marginBottom: 20}]}>(Recuerda revisar esta página con regularidad y tocar el ícono Info para acceder a los términos y condiciones)</Text>
          </View>
          <View style={styles.button}>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={this.submit}
              >
                  <Text style={[styles.textSign, { color:'#fff' }]}>Editar mi descripción</Text>
              </TouchableOpacity>
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
    button: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    signIn: {
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      backgroundColor: "#ff2426",
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 0.1,
      elevation: 8
    },
    textSign: {
      fontSize: 18,
      fontWeight: 'bold'
    },
})


export default Profile;
