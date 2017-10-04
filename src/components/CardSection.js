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
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    position: 'relative'
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderColor:'black'
  }
})
