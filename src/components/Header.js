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
    backgroundColor: '#2970d2',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
  },
  headerText: {
    color: '#FDFDFD',
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: 'AvenirNext-Italic'
  }
})
