import React from 'react';
import { Container, Header, Content, Title,List,  ListItem, InputGroup, Input,Icon,Footer, FooterTab, Button, Text, View,TouchableHighlight,Image,StyleSheet } from 'react-native';
import { Row } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from "react-native-modal";

//import ImageButton from "react-native-img-button";
export default class IncidentScreen extends React.Component {

  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  onPressButton() {
    console.log("Pressed!");
  }
  render() {
    return (
      
      <ScrollView>

    

  <View>
  
    <View style={styles.padding}>
      <Text> What is the type of your incident? please shoose a category</Text>
    </View>
    <TouchableHighlight onPress={() => this.toggleModal()}>
        <Image style={styles.imagestyle} source={require('../assets/carcrush.jpg')} />
       

    </TouchableHighlight>
  </View>

  <View>
      <View style={styles.padding}></View>
      <TouchableHighlight onPress={() => this.onPressButton()}>
          <Image style={styles.imagestyle} source={require('../assets/fire2.jpg')} />
      </TouchableHighlight>
</View>

<View>
    <View style={styles.padding}></View>
    <TouchableHighlight onPress={() => this.onPressButton()}>
        <Image style={styles.imagestyle} source={require('../assets/earchquake.jpg')} />
    </TouchableHighlight>
</View>

<View>
    <View style={styles.padding}></View>
    <TouchableHighlight onPress={() => this.onPressButton()}>
        <Image style={styles.imagestyle} source={require('../assets/flood2.png')} />
    </TouchableHighlight>
</View>


</ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  
  imagestyle: {
    
    justifyContent: 'center',
    borderRadius:40,
    borderWidth:10,    
    width: 160,
    height: 120,
    left: 100,
  
  },
  padding: {
    paddingTop:20,
    paddingBottom:20,

  }
 
});
