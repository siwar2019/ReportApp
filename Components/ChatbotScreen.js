import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput
  
} from 'react-native';

const sendCred= async (props)=>{
  fetch("http://192.168.2.43:3003/afficherusers",{
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
     "email":email,
     "password":password
   })
  })
  .then(res=>res.json())
  .then(async (data)=>{
         try {
           await AsyncStorage.setItem('token',data.token)
           props.navigation.replace("home")
         } catch (e) {
           console.log("error hai",e)
         }
  })
}
import AsyncStorage from '@react-native-community/async-storage';
export default class ChatbotlScreen extends React.Component {
  constructor (props) {
    super(props)
  this.state = { 
   
    email: '',
    password: '',
  
  }
  }
  setEmail(value) {
    this.setState({
      email:value
    });
  }
  setPassword(value) {
    this.setState({
      password:value
    });
  }
  /*
  test(){
    fetch('http://192.168.2.43:3003/users')
  .then((response) => {
    return response.json();
  })
  .catch((data) => {
    console.log('Success:',data);
  })
  .catch((error)=> {
    console.warn('my error', error);
  })
}
   */
     test(){
    fetch('http://192.168.2.43:3003/users')
    .then((res)=> res.json())
     .then((data)=>{
       console.warn(data);
     })
    
    .catch((error)=> {
      console.warn('my error', error);
    })
  }
  
  render() {
    
    return (
      <View>
      <View >
        <Text>HI CEST chatbot </Text> 
        <Button title="OK!" onPress={this.test} />
      </View>
      <View>
       <TextInput
       label='email'
       mode="outlined"
       value={this.Login}
       style={{marginLeft:18,marginRight:18,marginTop:18}}
       theme={{colors:{primary:"blue"}}}
       onChangeText={(text)=>setEmail(text)}
     />
     </View>
     <View>
     <TextInput
       label='password'
       mode="outlined"
       secureTextEntry={true}
       value={this.password}
       onChangeText={(text)=>{setPassword(text)}}
       style={{marginLeft:18,marginRight:18,marginTop:18}}
       theme={{colors:{primary:"blue"}}}
    
     />
     </View>
<View>
<Button title="SINSCRIRE!" onPress={() => sendCred(props)} />
     </View>
     </View>
    );
  }
}



