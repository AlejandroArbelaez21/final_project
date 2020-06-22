import React, { Component } from 'react';
import Routes from '../components/users/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class User extends Component {

  render() {

    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={state}>
        <Routes/>
      </Provider>
    );
  }
}

export default User;
