import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import {getMotos, postBlogs} from '../../actions';
import {connect} from 'react-redux';
import GradientButton from 'react-native-gradient-buttons';
import Popup from './Popup';
import { RadioButton } from 'react-native-paper';
import _ from 'lodash';
import Carousel from 'react-native-snap-carousel';


class Post extends Component {
  state = {
    title: "",
    debt: null,
    description: null,
    image: 'https://images.pexels.com/photos/789798/pexels-photo-789798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    checked: ''
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.props.getMotos()
  }

  currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  submit = () => {
    this.props.postBlogs(this.state.title, 0, this.state.debt, this.state.description, 'https://images.pexels.com/photos/789798/pexels-photo-789798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    this.setState({
      title: "",
      debt: null,
      description: null,
      image: null,
      checked: ''
    })
    this.props.navigation.navigate('Router')
  }

  render() {
    const { checked } = this.state;
    return (
      <View style={styles.container}>
          <Popup/>
        <ScrollView>
        <View style={{flex: 1, alignItems:'center'}}>
          <Text style={styles.h1}>Your info:</Text>
          <TextInput style={{padding: 10, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Your full name" onChangeText={ title => this.setState({title})} value={this.state.title}/>
          <TextInput style={{padding: 10, width: '90%', marginTop: 20, height: 100, borderColor: 'gray', borderWidth: 1}} placeholder="Tell your investors something about you" onChangeText={ description => this.setState({description})} value={this.state.description}/>
        </View>
        <View style={{marginTop:40, flex: 0.4, alignItems:'center'}}>
          <Text style={styles.h1}>Now, pick the moto of your dreams:</Text>
        </View>
        <View>
          {
            this.props.loadingReducer ? <Image style={{width: 100, height:100}} source={require('../../app/recursos/images/load.gif')}/> :
            <Carousel style={{width: '100%'}}
            sliderWidth={340}
            itemWidth={340}
            data={this.props.listOfBlogs}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => {
              return (
                <View style={{marginBottom: 30, marginTop:10, marginLeft:5, height: 500, width:'98%', elevation:7, flex: 0.98, borderRadius:15, backgroundColor: '#fff', borderColor:'#ff2426'}}>
                  <ImageBackground 
                  source={{uri: item.content}}
                  style={{flex: 0.97, marginTop:15, width: '100%', justifyContent:'center'}}>
                    <View style={{margin:10, flex:2, padding:1, justifyContent:'flex-end'}}>
                      <Text style={{textShadowColor: 'rgba(200, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:35, marginBottom: 10, fontWeight:'bold', color:'white'}}>{item.motoName}</Text>
                      <Text style={{textShadowColor: 'rgba(200, 0, 0, 1)', textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10, fontSize:24, marginBottom: 10, fontWeight:'bold', color:'white'}}>{item.brand}</Text>
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
          </ScrollView>
        <GradientButton 
        style={{alignSelf:'center', padding: 5, width:'103%'}} 
        gradientBegin='#ff9259' 
        gradientEnd="#ff2426" 
        text="Submit" 
        textStyle={{ fontWeight: 'bold' }} 
        onPressAction={this.submit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 10
  },
  h1: {
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fc6552'
  },
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
  
export default connect(mapStateToProps, {postBlogs, getMotos})(Post);