import React, { Component } from 'react';
import Routes from './components/tenderos/Routes';
import Router from './components/tenderos/Router/Router'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class Tendero extends Component {

  render() {

    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={state}>
        <Router/>
      </Provider>
    );
  }
}

export default Tendero;