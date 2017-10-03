import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Header from './components/Header'
import ItemList from './components/ItemList'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        <Header/>
        <ItemList/>
      </View>
    );
  }
}
