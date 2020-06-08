import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableHighlight, Image } from 'react-native';
import {getBlogs, deleteBlog} from '../../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import Carousel from 'react-native-snap-carousel';

class Blogs extends Component {

  componentDidMount(){
    this.props.getBlogs()
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
                <View style={{flex: 1,elevation:8, marginBottom:15, marginTop:35, borderRadius:15, backgroundColor: '#fff', borderWidth: 2, borderColor:'#eaeaea',padding: 10, width: '100%', height: '90%'}}>
                  <View style={{flex: 1}}>
                    <Text style={{fontSize:28, marginBottom: 10, fontWeight:'bold', lineHeight:30, color:'black'}}>{item.title}</Text>
                    <Text style={{fontSize:20, lineHeight:30, color:'black'}}>Goal: {item.debt}</Text>
                    <Text style={{fontSize:20, lineHeight:30, color:'black'}}>Current amount: {item.content}</Text>
                  </View>
                  <View style={{flex: 22, justifyContent:'flex-end'}}>
                    <Image style={{alignSelf: 'center', width: '105%', height: '80%', marginBottom: 25}} source={require('../../src/photos/photo1.jpeg')}></Image>
                  </View>
                  <View style={{flex:0.5, flexDirection:'row', justifyContent:'center', alignItems: 'center', marginBottom: 15}}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit', {...item})}>
                      <View>
                        <Icon color="#ff0000" name="check-circle-o" size={50}/>
                      </View>
                    </TouchableHighlight>
                  </View>
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