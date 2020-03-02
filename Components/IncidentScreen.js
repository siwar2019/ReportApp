import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal  from "react-native-modal";
import { TouchableHighlight,Image,StyleSheet ,ScrollView,Picker} from 'react-native';
import { Form } from "native-base";
import {ListItem, List,Icon,InputGroup, Input} from 'native-base' ;
import RNPickerSelect from 'react-native-picker-select';

export default class IncidentScreen extends Component {
 
  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
 
 
    render() {
      return (
     
        <ScrollView>
      <View style={{ flex: 1 }}>
          <View style={styles.padding}>
      <Text> </Text>
      <Text> Please shoose the way that you want to declare the incident with:</Text>
    </View>
        <TouchableHighlight onPress={this.toggleModal}>
          <Image style={styles.imagestyle}  source={require('../assets/photo.png')} />
        </TouchableHighlight>
        <View style={styles.padding}></View>
        <TouchableHighlight onPress={this.toggleModal}>
          <Image style={styles.imagestyle}  source={require('../assets/video5.jpg')} />
        </TouchableHighlight>
        <View style={styles.padding}></View>
        <TouchableHighlight onPress={() => this.toggleModal()}>
        <Image style={styles.imagestyle} source={require('../assets/live3.png')} />
    </TouchableHighlight>

          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1 }}>
               
            <ScrollView>
              <Form  >
           
   
                    <ListItem >
                    <Text style={styles.form}>Firstname :</Text>
                        <InputGroup >
                        
                            <Input inlineLabel label='FIRSTNAME' placeholder=' First name here' />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                    <Text style={styles.form}>lasttname :</Text>
                        <InputGroup >
                        
                            <Input inlineLabel label='FIRSTNAME' placeholder=' Last name here' />
                        </InputGroup>
                    </ListItem>
                
                    
                    <ListItem>
                        <InputGroup >
                        <Text style={styles.form}>Number :</Text>
                            <Input stackedLabel label='NUMERO' placeholder='Numéro de télephone' />
                        </InputGroup>
                    </ListItem>

                    <ListItem>
                        <InputGroup >
                        <Text style={styles.form}>your position :</Text>
                        
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup >
                        <Text style={styles.form}>Description</Text>
                        <Input stackedLabel label='description' placeholder='Describe your incident here' />
                         
                        </InputGroup>
                    </ListItem>

                    <ListItem>
                        <InputGroup >
                        <Text style={styles.form}>your position :</Text>
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup >
                        <Text style={styles.form}> the incident's type :</Text>
                        <Picker style={styles.picker} selectedValue = "gggg">
               <Picker.Item label = "accident" value = "accident" />
               <Picker.Item label = "flood" value = "floof" />
               <Picker.Item label = "earthquake" value = "earthquake" />
               <Picker.Item label = "fire" value = "fire" />

            </Picker>
             </InputGroup>
             
                    </ListItem>
                   
                   
              </Form>
              </ScrollView>
              <Button title="OK!" onPress={this.toggleModal} />
            </View>
          </Modal>
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

  },
  form:{
    color:'red',
    fontWeight: 'bold'
  },
  picker: {
    flex:1,
    fontWeight:"bold",
    fontSize:30,
    color:'#0000FF'
  }
 
});
