import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  
} from 'react-native';


export default class AppelScreen extends React.Component {
  test(){
    fetch('http://127.0.0.1:3002/users')
    .then((res)=> console.warn('my data',res))
    .catch((error)=> {
      console.warn('my error', error);
    })
  }
  render() {
    return (
      <View >
        <Text>HI CEST chatbot </Text> 
        <Button title="OK!" onPress={this.test} />
      </View>
    );
  }
}



