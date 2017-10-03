import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CardSection extends Component {
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
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black'
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderColor:'black'
  }
})
