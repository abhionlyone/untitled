import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardSection from './CardSection';

export default class Card extends Component {
  render(){
    return(
      <View style={styles.section}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    marginRight: 5,
    marginLeft: 5,
    padding: 15,
    backgroundColor: '#FFFFFF'
  }
})
