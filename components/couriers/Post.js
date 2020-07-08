import React, { Component } from 'react';
import { Alert, TouchableHighlight, TextInput, View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import {getMotos, postBlogs} from '../../firebase/actions';
import {connect} from 'react-redux';
import GradientButton from 'react-native-gradient-buttons';
import Popup from './Popup';
import { RadioButton } from 'react-native-paper';
import _ from 'lodash';
import Carousel from 'react-native-snap-carousel';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../firebase/fb';
import Icon from 'react-native-vector-icons/FontAwesome';

//Post the courier in the database
class Post extends Component {
  state = {
    id: '',
    title: "",
    age: '',
    description: null,
    image: '',
    motoInfo: '',
    token: '',
    time: '',
    rate: '',
    checked: ''
  }
  constructor(props) {
    super(props);
    this.state = {
      proPhoto: "Choose a profile photo..",
      id: '',
      age: '',
      motoInfo: '',
      time: '',
      rate: ''
    };
  }

  _getMoto = async (item) => {
    //put the info of the moto in the courier as a key
    this.setState({motoInfo: item});
  }
    


  _getImage = async (id) => {
    //Save the profile image url in a variable
    fetch('https://firebasestorage.googleapis.com/v0/b/crud-7936b.appspot.com/o/courier%2F' + id, {
      method: 'GET',
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({token: JSON.stringify(responseJson.downloadTokens)})
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
      this.setState({image: 'https://firebasestorage.googleapis.com/v0/b/crud-7936b.appspot.com/o/courier%2F' + this.state.id +'?alt=media&token=' + this.state.token});
  }

  componentDidMount(){
    //Call the function that shows the motos in database
    this.props.getMotos()
  }

  currencyFormat = (num) => {
    //convert number in currencyFormat
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  onChooseImage = async () => {
    //choose image from device for profile of the courier
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, this.state.id)
      .then(() => {
        this.setState({proPhoto: 'Profile photo uploaded!'});
        Alert.alert('Profile photo uploaded');
      })
      .catch(error => {
        Alert.alert(error);
        throw error;
      });
    }
  }

  uploadImage = async (uri, id) => {
    //Takes onChooseImage() and saves the result in firebase storage
    this._getImage(this.state.id);

    const response = await fetch(uri);
    const blob = await response.blob();    
    var ref = firebase.storage().ref().child('courier/' + id);
    return ref.put(blob)
  }

  onChangedId (text) {
    //Makes id field only available for numbers
    this.setState({
      id: text.replace(/[^0-9]/g, ''),
    });
  }

  onChangedAge (text) {
    //Makes age field only available for numbers
    this.setState({
      age: text.replace(/[^0-9]/g, ''),
    });
  }

  onChangedTime (text) {
    //Makes time field only available for numbers
    this.setState({
      time: text.replace(/[^0-9]/g, ''),
    });
  }

  onChangedRate (text) {
    //Makes rate field only available for numbers
    this.setState({
      rate: text.replace(/[^0-9]/g, ''),
    });
  }

  //post the courier and all its characteristics in firebase
    submit = () => {
    if(parseInt(this.state.id) < 10000000) {
      Alert.alert('Your id must have 8 or 10 digits');
    } else {
      if(parseInt(this.state.age) < 18) {
        Alert.alert('Your must be 18+');
      } else {
        this.props.postBlogs(this.state.id, this.state.title, this.state.age, 0, this.state.description, this.state.image, this.state.motoInfo, this.state.time, this.state.rate)
        this.setState({
          id: '',
          title: "",
          debt: null,
          description: null,
          image: null,
          age: '',
          token: '',
          time: '',
          rate: '',
          propPhoto: 'Choose a profile photo../',
          checked: ''
        })
        this.props.navigation.navigate('Router')
      }
    }
  }

  render() {
    const { checked } = this.state;

    return (
      <View style={styles.container}>
          <Popup/>
        <ScrollView>
        <View style={{flex: 1, alignItems:'center'}}>
          <Text style={styles.h1}>Your personal info:</Text>
          <TextInput
          style={{padding: 10, width: '90%', height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Your id"
          keyboardType = 'number-pad'
          value={this.state.id}
          onChangeText={(text)=> this.onChangedId(text)}
          maxLength={10}/>
          <TextInput style={{padding: 10, width: '90%', marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Your full name" onChangeText={ title => this.setState({title})} value={this.state.title}/>
          <TextInput
          style={{padding: 10, width: '90%', marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="How old are you?"
          keyboardType = 'number-pad'
          value={this.state.age}
          onChangeText={(age)=> this.onChangedAge(age)}
          maxLength={2}/>
          <TextInput
          style={{padding: 10, width: '90%', marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="How long have you been in Rappi (Years)"
          keyboardType = 'number-pad'
          value={this.state.time}
          onChangeText={(time)=> this.onChangedTime(time)}
          maxLength={2}/>
          <TextInput
          style={{padding: 10, width: '90%', marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Your rate in Rappi"
          keyboardType = 'number-pad'
          value={this.state.rate}
          onChangeText={ rate => this.setState({rate})}/>
          <TextInput style={{padding: 10, width: '90%', marginTop: 20, height: 100, borderColor: 'gray', borderWidth: 1}} placeholder="Tell your investors something about you" onChangeText={ description => this.setState({description})} value={this.state.description}/>
        </View>
        
        <View style={{alignSelf: 'center', flexDirection: 'row', flex:1, padding: 10, width: '90%', marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1}}>
          <View style={{flex: 1}}>
            <Text style={styles.h2}>{this.state.proPhoto}</Text>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center', alignContet: 'center'}}>
            <TouchableHighlight onPress={this.onChooseImage}>
              <Icon
                name="camera"
                color="gray"
                size={30}/>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{marginTop:40, flex: 0.4, alignItems:'center'}}>
          <Text style={styles.h1}>Now, pick your next best friend:</Text>
        </View>
        <View>
          {
            this.props.loadingReducer ? <Image style={{alignSelf: 'center', width: 100, height:100}} source={require('../resources/images/load.gif')}/> :
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
                          onPress={() => { this._getMoto(item), this.setState({ checked: item.key}); }}
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
        style={{marginTop: 20, alignSelf:'center', padding: 5, width:'103%'}} 
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
  h2: {
    textAlign: 'center',
    marginLeft: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fc6552'
  },
})
function mapStateToProps(state){
  //gets motos from blogList
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