import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground, Image, TouchableOpacity,Keyboard,AsyncStorage
} from 'react-native';
//import AsyncStorage from  '@react-native-community/async-storage';
import {Item, Icon, Input, Button} from 'native-base';

export default class HomeScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        email:'', 
        password:''
      }

  }
componentDidMount() {
  this._loadInitialState().done() ; 
}
_loadInitialState=async()=> {
  var value=await AsyncStorage.setItem('user') ;
  if(value !==null) {
    this.props.navigation.navigate("InscriptionScreen") ;
  }
}
  onChangeShowPassword() {
    this.setState({
      password: !this.state.password,
    });
  }
  login = () => {
    fetch("http://192.168.1.6:3001/authentification", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.password,

      })
    })
      .then(response => response.json())
      .then((res) => {
        //console.warn(res.message)
        if (res.succes === true) {
            console.warn("here")
     AsyncStorage.setItem('user', res.user);
       this.props.navigation.navigate('Navigation');
        } else {
          //  this.props.navigation.navigate('Navigation');
          alert(res.message);
        }
      })   .catch((error) => {
        console.warn(error);
    })     .done();
  }

   

  render() {
    return (
        <ImageBackground  source={require('../assets/back.jpeg')} style={styles.container}>
          <View style={styles.lgHeader}>
              <Image source={require('../assets/logo-white.png')}></Image>
              <Text style={[styles.lgTitle, styles.whiteColor]}> Report App </Text>
          </View>
          <View style={styles.lgContent}>
              <Item  style={styles.lgInput} rounded>
                  <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter username..'
                                    onChangeText={(email)=>this.setState({email})}
                                    value={this.state.email}
                  />
                 
              </Item>
              <Item style={[styles.lgInput]} rounded>
                  <Input style={styles.whiteColor} secureTextEntry={true} placeholderTextColor="#fff" placeholder='Enter Password..'
                                    onChangeText={(password)=>this.setState({password})}
                                    value={this.state.password}/>
                  
                
              </Item>
          </View>
          <View style={styles.lgFooter}>
            
              <TouchableOpacity underlayColor="white"  onPress={() => this.login()} style={[styles.loginButton, styles.lgInput]} bordered  rounded light> 
             
                  <Text  style={styles.whiteColor}>Sign in</Text>

                  
              </TouchableOpacity>
              <TouchableOpacity underlayColor="white"  onPress={() =>  this.props.navigation.navigate('Navigation')} style={[styles.loginButton, styles.lgInput]} bordered  rounded light> 
             
                  <Text  style={styles.whiteColor}>Sign in</Text>

                  
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("InscriptionScreen")} >

              <Text style={styles.whiteColor}>No Account ? Create one</Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:30,
  },
  lgHeader:{
    flex: 1,
      justifyContent: "flex-end",
      alignItems:"center"
  },
  lgContent:{
    flex: 1,
      padding:30,
      justifyContent: "space-evenly"
  },
  lgFooter: {
    flex: 1,
      alignItems:"center",
      justifyContent: "space-between"
  },
    lgTitle: {
fontWeight:"bold",
        fontSize: 20
    },
    whiteColor:{
        color:"#fff",
    },
    loginButton: {
        borderWidth:1,
        borderColor:'rgba(255,255,255,0.5)',
        alignItems:'center',
        justifyContent:'center',
        width:200,
        height:50,
        borderRadius:50,
    },
    lgInput: {
      backgroundColor:"rgba(255,255,255, 0.3)"
    }
});
