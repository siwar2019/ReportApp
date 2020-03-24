import React,{useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import CryptoJS from "react-native-crypto-js";
import {Button} from 'native-base';

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
    async sendCred  (props){
     // let res2= CryptoJS.AES.encrypt(this.state.form, 'secret key 123');
      console.warn('my form values', this.state.form)
        
          fetch("http://192.168.1.6:3004/inscription",{
            method:"POST",
            headers: {
             'Content-Type': 'application/json'
           },
           body:JSON.stringify({
            
             "email": this.state.form.email,
             "password":CryptoJS.AES.encrypt(this.state.form.email, 'secret key 123').toString() ,
           })
          })

          .then(res=>res.json())
/*          .then(async (data)=>{
                 try {
                   await AsyncStorage.setItem('token',data.token)
                   props.navigation.replace("navigation")
                 } catch (e) {
                   console.log("error hai",e)
                 }
          })
          */
        }
  
      
  render(){
  return (
   <> 
   <KeyboardAvoidingView behavior="padding">
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
