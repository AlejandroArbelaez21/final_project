import React, { Component } from 'react';
import Router from '../components/couriers/Router/Router';
import Routes from '../components/couriers/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';

class Tendero extends Component {

  componentDidMount = () => {
    //const { navigation } = this.props;
    //const data = navigation.getParam('aux', 'NO-ID');
    //console.log(data);
    console.log(this.aux);
    //const profile = this.getProfile(data.token_type, data.access_token);
  }

  aux = this.props.navigation.getParam('aux', 'NO-ID');;

/*
  getProfile = async (token_type, access_token) => {
    const baseUrl = 'http://microservices.dev.rappi.com/api/storekeepers-ms/storekeeper/rappitendero/profile?cache=false';
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token_type + ' ' + access_token
      }
    });
    const rappiData = await response.json();
    this.setState({data: rappiData});
    firebase.database()
            .ref('/courier/' + rappiData.id)
            .set({
                id: rappiData.identification,
                title: rappiData.name,
                age: rappiData.birthday,
                content: 0,
                description: " ",
                image: rappiData.profile_pic,
                motoInfo: " ",
                time: rappiData.created_at,
                rate: rappiData.average,
                email: rappiData.email
            })
    console.log(this.state.data);
  }
*/
  render() {
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={state}>
        { this.aux === 'login' ?
          <Routes /> : <Router />
        }
       </Provider> 
    );
  }
}

export default Tendero;