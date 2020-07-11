import React, { Component } from 'react';
import { View, Modal, StyleSheet, Text } from 'react-native';
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
          delay={500}>
            <View style={styles.modalInside}>
              <Info/>
              <GradientButton
              style={{alignSelf:'center', padding: 5, width:'103%'}}
              gradientBegin='#ff9259' 
              gradientEnd="#ff2426"
              text="I agree"
              textStyle={{ fontWeight: 'bold' }}
              onPressAction={() => {this.setState({show:false})}}/>
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
  }
});
export default Popup