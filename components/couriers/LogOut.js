import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

const LogOut = () => {
  return firebase.auth().signOut();
}

export default LogOut;