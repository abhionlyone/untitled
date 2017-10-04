import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

export default class ItemDetail extends Component {
  render(){
    console.log("From Item Detail"+this.props.data)
    return(
      <View>
        <Card>
          <CardSection>
            <View style={styles.thumbnailImage}>
              <Image style={{width: 50, height: 50}} source={{uri: this.props.data.thumbnail_image}}/>
            </View>
            <View style={{justifyContent: 'space-around', paddingLeft: 5}}>
              <Text>{this.props.data.title}</Text>
              <Text>{this.props.data.artist}</Text>
            </View>
          </CardSection>
          <CardSection>
            <Image style={styles.image} source={{uri: this.props.data.image}}/>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    width: null,
    margin: 5
  },
  thumbnailImage: {
    margin: 5,
    justifyContent: 'center'
  }
})
