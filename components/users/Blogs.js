import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableHighlight, Image, ImageBackground} from 'react-native';
import {getBlogs, deleteBlog} from '../../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import Carousel from 'react-native-snap-carousel';

class Blogs extends Component {

  componentDidMount(){
    this.props.getBlogs()
  }

  res = (a, b) => {
    return() => parseInt(a) - parseInt(b)
  }

  render() {
    return (
      <View style={styles.container}>
          {
            this.props.loadingReducer ? <Text>Loading.. Please wait</Text> :
            <Carousel style={{width: '100%'}}
            sliderWidth={340}
            itemWidth={340}
            data={this.props.listOfBlogs}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{flex: 0.98, borderRadius:15, marginTop: 45, borderWidth: 2, borderColor:'#eaeaea'}}>
                  <ImageBackground 
                  source={require('../../src/photos/photo1.jpeg')}
                  style={{flex: 0.97, elevation:8, marginTop:15, width: '100%', justifyContent:'center'}}>
                  <TouchableHighlight style={{padding:10, flex:1, justifyContent:'flex-end', marginBottom: 20}} onPress={() => this.props.navigation.navigate('Edit', {...item})}>
                    <View style={{padding:1, justifyContent:'flex-end'}}>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10, fontSize:35, marginBottom: 10, fontWeight:'bold', color:'white'}}>{item.title}</Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10, fontSize:20, marginBottom: 10, fontWeight:'bold', color:'white'}}>{item.description}</Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10, fontSize:24, lineHeight:30, color:'white', fontWeight:'bold'}}>Goal: ${item.debt}</Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10, fontSize:24, lineHeight:30, color:'white', fontWeight:'bold'}}>Current amount: ${item.content}</Text>
                      <Text style={{textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: {width: -1, height: 1},
                      textShadowRadius: 10, fontSize:24, lineHeight:30, color:'white', fontWeight:'bold'}}>Only ${parseInt(item.debt) - parseInt(item.content)} more!</Text>
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

export default connect(mapStateToProps, {getBlogs, deleteBlog})(Blogs);