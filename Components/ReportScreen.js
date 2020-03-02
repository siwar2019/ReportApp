import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import { TouchableHighlight,Image,StyleSheet } from 'react-native';
import { Form } from "native-base";
import {ListItem, List,Icon,InputGroup, Input} from 'native-base' ;
export default class ReportScreen extends Component {
  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
 
  render() {
    return (
    <View style={{ flex: 1 }}>
      <TouchableHighlight onPress={this.toggleModal}>
        <Image  source={require('../assets/carcrush.jpg')} />
      </TouchableHighlight>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Form>
            <List>
                    <ListItem>
                        <InputGroup>
                            <Icon name='ios-person' />
                            <Input placeholder='EMAIL' />
                        </InputGroup>
                    </ListItem>
                
                    <ListItem>
                        <InputGroup>
                            <Icon name='ios-unlock' />
                            <Input placeholder='PASSWORD' secureTextEntry={true}/>
                        </InputGroup>
                    </ListItem>
            </List>        
            </Form>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}