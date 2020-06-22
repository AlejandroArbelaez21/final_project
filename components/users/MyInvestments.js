import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground, Image, FlatList } from 'react-native';
import {getBlogs2, deleteBlog} from '../../firebase/actions';
import {connect} from 'react-redux';
import _ from 'lodash';


class MyInvestments extends Component {

  componentDidMount(){
    this.props.getBlogs2()
  }

  res = (a, b) => {
    return() => parseInt(a) - parseInt(b)
  }

  currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  render() {
    return (
      <View style={styles.container}>
          {
            this.props.loadingReducer ? <Image style={{width: 100, height:100}} source={require('../resources/images/load.gif')}/> :
            <FlatList style={{width: '100%'}}
            sliderWidth={340}
            itemWidth={340}
            data={this.props.listOfBlogs}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{marginTop:45, marginLeft:5, width:'98%', elevation:7, flex: 0.97, borderRadius:15, backgroundColor: '#fff', borderColor:'#ff2426'}}>
                  <ImageBackground 
                  source={{uri: item.image}}
                  style={{flex: 0.8,width: '100%', justifyContent:'center'}}>
                    <View style={{padding:1, justifyContent:'flex-end'}}>
                      <Text style={{textAlign: 'center', textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:25, marginBottom: 2, fontWeight:'bold', color:'#5de143'}}>{((item.motoInfo.revenue)/2).toFixed(2)}% of revenue</Text>
                    </View>
                  <TouchableHighlight style={{padding:10, flex:1, justifyContent:'flex-end'}} onPress={() => this.props.navigation.navigate('Edit2', {...item})}>
                    <View style={{padding:1, justifyContent:'flex-end'}}>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:30, marginBottom: 2, fontWeight:'bold', color:'white'}}></Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:30, marginBottom: 2, fontWeight:'bold', color:'white'}}></Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:30, marginBottom: 2, fontWeight:'bold', color:'white'}}>{item.title}</Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:19, lineHeight:30, color:'white', fontWeight:'bold'}}>Goal: {this.currencyFormat(parseInt(item.motoInfo.motoPrice))}</Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:19, lineHeight:30, color:'white', fontWeight:'bold'}}>Current amount: {this.currencyFormat(parseInt(item.content))}</Text>
                    </View>
                  </TouchableHighlight>
                  </ImageBackground>
                </View>
              )
            }}/>
          }
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

export default connect(mapStateToProps, {getBlogs2, deleteBlog})(MyInvestments);