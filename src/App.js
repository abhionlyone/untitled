import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/Header'
import ItemList from './components/ItemList'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <ItemList />
      </View>
    );
  }
}
