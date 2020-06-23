import React, { Component } from 'react';
import Setup from "./main/boot/setup";
import { Root } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  //while the app is loading
  }render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    //when the app is loaded
    } else {
      return (
        <Root>
          <Setup />
        </Root>
      );
    }
  }

}