import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ItemList extends Component {
  render(){
    return(
      <View style={styles.headerBar}>
        <Text style={styles.headerText}>Item List</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({

})
