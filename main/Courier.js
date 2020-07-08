import React, { Component } from 'react';
import Router from '../components/couriers/Router/Router'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class Tendero extends Component {

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', 'NO-ID');

    const x = console.log(data);

    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={state}>
        <Router/>
      </Provider>
    );
  }
}

export default Tendero;