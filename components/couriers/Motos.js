import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import {getMotos, editMotoPrice} from '../../firebase/actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import Carousel from 'react-native-snap-carousel';
import { RadioButton } from 'react-native-paper';

class Motos extends Component {
  state = {
    debt: '',
    key:'',
    checked: ''
  }

  componentDidMount(){
    //Call the function that show motos in database
    this.props.getMotos()
  }

  currencyFormat = (num) => {
    //convert number in currencyFormat
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  submit = () => {
    //upgrade moto price and navigate to the courier stack
    this.props.editMotoPrice(this.state.debt, this.state.checked)
    this.setState({
      debt: "",
      checked: ""
    })
    this.props.navigation.navigate('Router')
  }

  render() {
    const { checked } = this.state;
    return (
      <View style={styles.container}>
        <View style={{elevation:8, flex:1, justifyContent: 'center'}}>
          {
            this.props.loadingReducer ? <Image style={{width: 100, height:100}} source={require('../resources/images/load.gif')}/> :
            <Carousel style={{width: '100%'}}
            sliderWidth={340}
            itemWidth={340}
            data={this.props.listOfBlogs}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{marginTop:10, marginLeft:5, width:'98%', elevation:7, flex: 0.98, borderRadius:15, backgroundColor: '#fff', borderColor:'#ff2426'}}>
                  <ImageBackground 
                  source={{uri: item.content}}
                  style={{flex: 0.97, marginTop:15, width: '100%', justifyContent:'center'}}>
                    <View style={{flex:2, padding:1, justifyContent:'flex-end'}}>
                      <Text style={{textShadowColor: 'rgba(200, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:35, marginBottom: 10, fontWeight:'bold', color:'white'}}>{item.motoName}</Text>
                      <Text style={{textShadowColor: 'rgba(200, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:20, marginBottom: 10, fontWeight:'bold', color:'white'}}>{item.brand}</Text>
                      <Text style={{textShadowColor: 'rgba(200, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:24, lineHeight:30, color:'white', fontWeight:'bold'}}>Final price: {this.currencyFormat(parseInt(item.motoPrice))}</Text>
                    </View>
                    <View style={{flex:0.2, alignItems: 'center', justifyContent:'flex-end'}}>
                        <RadioButton
                          value={item.key}
                          status={checked === item.key ? 'checked' : 'unchecked'}
                          onPress={() => { this.setState({ checked: item.key, debt: item.motoPrice }); }}
                        />
                    </View>
                  </ImageBackground>
                </View>
              )
            }}/>
          }
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 10
  }
})

function mapStateToProps(state){
const listOfBlogs = _.map(state.blogList.blogList, (val, key) => {
  return {
    ...val,
    key: key
  }
})
return {
  listOfBlogs,
  loadingReducer: state.loadingReducer.loadingReducer
}
}

export default connect(mapStateToProps, {getMotos, editMotoPrice})(Motos);