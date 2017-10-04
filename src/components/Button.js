import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = (props) => {
  return(
    <TouchableOpacity style={styles.button}  onPress={props.onPress}>
      <Text style={{fontSize: 20}}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#54C7FC',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Button;
