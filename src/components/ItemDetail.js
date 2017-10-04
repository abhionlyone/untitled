import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Linking, Platform} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class ItemDetail extends Component {
  handleClick = () => {
    Linking.canOpenURL(this.props.data.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.data.url);
      } else {
        console.log("Don't know how to open URI: " + this.props.data.url);
      }
    });
  };
  render(){
    console.log("From Item Detail "+Platform.OS)
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
          <CardSection>
            <Button onPress={this.handleClick}>
              Buy
            </Button>
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
