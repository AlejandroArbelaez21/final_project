import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import Info from './Info';
import * as Animatable from 'react-native-animatable';


//Shows term and conditions in a popup before regristation
class Popup extends Component {
  constructor(){
    super();
    this.state={
      show: true
    }
  }
  
  render() {
    return (
        <Modal
        transparent={true}
        visible={this.state.show}>
          <Animatable.View style={styles.modalOutside}
          animation="bounceIn"
          duraton={10000}
          delay={1000}>
            <View style={styles.modalInside}>
              <Info/>
              <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {this.setState({show:false})}}
                    >
                        <Text style={[styles.textSign, { color:'#fff' }]}>Acepto</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </Animatable.View>
        </Modal>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100
  },
  modalOutside: {
    flex: 1,
    backgroundColor: '#FFFFFF50',
  },
  modalInside: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.1,
    borderColor: 'gray',
    elevation: 10
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
});
export default Popup