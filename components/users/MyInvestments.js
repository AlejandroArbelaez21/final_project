import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground, Image, FlatList } from 'react-native';
import {getBlogs, deleteBlog} from '../../firebase/actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import firebase from 'firebase';

class MyInvestments extends Component {

  async componentDidMount(){
    this.investedAmount = await this.getInvestedMoney(firebase.auth().currentUser.uid);
    this.earnedAmount = await this.getEarnedMoney(firebase.auth().currentUser.uid);
    //Calls the function that read the info of the courier
    this.props.getBlogs();
  } 

  investedAmount = '-'
  earnedAmount = '-'

  getInvestedMoney = async (userId) => {
    return firebase.database().ref('/user/' + userId).once('value').then(function(snapshot) {
      const invested = (snapshot.val() && snapshot.val().invested) || '0';
      return invested
    });
  }

  getEarnedMoney = async (userId) => {
    return firebase.database().ref('/user/' + userId).once('value').then(function(snapshot) {
      const earned = (snapshot.val() && snapshot.val().earned) || '0';
      return earned
    });
  }

  res = (a, b) => {
    //subtracts two numbers
    return() => parseInt(a) - parseInt(b)
  }

  currencyFormat = (num) => {
    //convert number in currency format
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.balanceContainer}>
          <View style={{flex: 1, justifyContent:'center'}}>
            <Text style={styles.balanceTextTitle}>Tu balance</Text>
          </View>
          <View style={{flex: 1, justifyContent:'center'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.balanceRowContainer}>
                <Text style={[styles.balanceText, {textAlign: 'right'}]}>Invertido</Text>
              </View>
              <View style={styles.balanceRowContainer}>
                <Text style={styles.balanceText}>{this.currencyFormat(parseInt(this.investedAmount))}</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1, justifyContent:'center'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.balanceRowContainer}>
                <Text style={[styles.balanceText, {textAlign: 'right'}]}>Ganancias</Text>
              </View>
              <View style={styles.balanceRowContainer}>
                <Text style={styles.balanceText}>{this.currencyFormat(parseInt(this.earnedAmount))}</Text>
              </View>
            </View>
          </View>
          
        </View>
          {            
            this.props.loadingReducer ? <Image style={{width: 100, height:100}} source={require('../resources/images/load.gif')}/> :
            <FlatList style={{flex:1, width: '100%'}}
            sliderWidth={340}
            itemWidth={340}
            data={this.props.listOfBlogs}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{marginBottom: 10, marginTop:25, marginLeft:5, width:'98%', elevation:7, flex: 0.97, borderRadius:15, backgroundColor: '#fff', borderColor:'#ff2426'}}>
                  <ImageBackground 
                  source={{uri: item.image}}
                  style={{flex: 0.9, marginTop:15, marginBottom:15, width: '100%', justifyContent:'center'}}>
                    <View style={{padding:1, justifyContent:'flex-end'}}>
                      <Text style={{textAlign: 'center', textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:25, marginBottom: 2, fontWeight:'bold', color:'#5de143'}}>{((item.motoInfo.revenue)/2).toFixed(2)}% of revenue</Text>
                    </View>
                  <TouchableHighlight style={{padding:10, flex:1, justifyContent:'flex-end'}} onPress={() => this.props.navigation.navigate('Edit', {...item})}>
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
    },
    balanceContainer: {
      justifyContent:'center', 
      marginBottom: 5, 
      marginTop:5, 
      marginLeft:5, 
      width:'98%', 
      elevation:8, 
      flex: 0.2, 
      borderRadius:15, 
      backgroundColor: '#ff441f'
    },
    balanceTextTitle: {
      textAlign: 'center', 
      textShadowColor: 'rgba(0, 0, 0, 1)', 
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 10, 
      fontSize:25, 
      marginBottom: 2, 
      fontWeight:'bold', 
      color:'#fff'
    },
    balanceRowContainer: {
      flex: 1, 
      justifyContent:'center', 
      margin: 5
    },
    balanceText: {
      textShadowColor: 'rgba(0, 0, 0, 1)', 
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 10, 
      fontSize:23, 
      marginBottom: 2, 
      fontWeight:'bold', 
      color:'#fff'
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

export default connect(mapStateToProps, {getBlogs, deleteBlog})(MyInvestments);