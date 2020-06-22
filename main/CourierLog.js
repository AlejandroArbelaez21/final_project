import React, { Component } from 'react';
import Routes2 from '../components/couriers/Routes2'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class Tendero extends Component {

  render() {

    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={state}>
        <Routes2/>
      </Provider>
    );
  }
}

export default Tendero;