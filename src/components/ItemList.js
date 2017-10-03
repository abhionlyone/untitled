import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemDetail from './ItemDetail';
import axios from 'axios';

export default class ItemList extends Component {
    state = {items: []}

    componentDidMount() {
        console.log("Mounted Item List");
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                (response) => {
                    this.setState({items: response.data})
                    console.log("State is updated");
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    renderItems() {
        console.log("Inside renderItems")
        //return this.state.items.map(data => <Text>{data.title}</Text>)
        return this.state.items.map((item, index) => {
          return <ItemDetail data={item} key={item.title}/>
        })
    }

    render() {
        return (
            <View style={styles.lists}>
              <ScrollView>
                {this.renderItems()}
              </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  lists: {
    backgroundColor: '#E4E7F0',
    flex: 1
  }
})
