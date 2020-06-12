import React, { Component } from 'react';
import { View, Modal, StyleSheet, Text } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import Info from './Info';
 
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
          <View style={styles.modalOutside}>
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
          </View>
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
    backgroundColor: '#000000aa'
  },
  modalInside: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10
  }
});
export default Popup