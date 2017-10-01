import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={styles.headerBar}>
        <Text style={styles.headerText}>ShopStack</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#EE634C',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 80
  },
  headerText: {
    color: '#FFFCED',
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: 'AvenirNext-Italic'
  }
})
