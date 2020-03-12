import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class  SignupScreen extends React.Component {
    constructor(props){
super(props);
this.state={
form:{
    email:null,
    password:null
}
}
    }

    setEmail(text){
        this.setState({
            form:{
            email:text,
            password: this.state.form.password
        }
        });
    }
    setPassword(text){
        this.setState({
            form:{
           email: this.state.form.email,
            password:text
            }
        });
    }
    sendCred(){
        console.warn('my form values', this.state.form)
    }
  render(){
  return (
   <> 
   <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View
      style={{
        borderBottomColor:"blue",
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:20,
        marginRight:150,
        marginTop:4
      }}
       />
      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      >create new account</Text>
      <TextInput
        label='Email'
        mode="outlined"
        value={this.state.form.email}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>this.setEmail(text)}
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={this.state.form.password}
        onChangeText={(text)=>{this.setPassword(text)}}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
     
      />
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
       onPress={() => this.sendCred()}>
        signup
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress={()=>props.navigation.replace("login")}
      >already have a account ?</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
   </>
  )
};
};



export default SignupScreen;
