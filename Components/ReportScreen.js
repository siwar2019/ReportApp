import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal  from "react-native-modal";
import { TouchableHighlight,Image,StyleSheet ,ScrollView,Picker,TouchableOpacity} from 'react-native';
import { Form } from "native-base";
import {ListItem, List,Icon,InputGroup, Input} from 'native-base' ;
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-picker';
import ImagePicker2 from 'react-native-image-crop-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class ReportScreen extends Component {
  
 render(){
   return(
     <View><Text>HZEFKZEFJL</Text></View>
 
)}}