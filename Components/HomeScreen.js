import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground, Image, TouchableOpacity,
} from 'react-native';
import {Item, Icon, Input, Button} from 'native-base';

export default class HomeScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          password:true,
      }
  }
    onChangeShowPassword(){
    this.setState({
        password:!this.state.password,
    });
    }
  render() {
    return (
        <ImageBackground  source={require('../assets/bg-lg.jpg')} style={styles.container}>
          <View style={styles.lgHeader}>
              <Image source={require('../assets/logo-white.png')}></Image>
              <Text style={[styles.lgTitle, styles.whiteColor]}> Report App </Text>
          </View>
          <View style={styles.lgContent}>
              <Item  style={styles.lgInput} rounded>
                  <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter username..'/>
              </Item>
              <Item style={[styles.lgInput]} rounded>
                  <Input style={styles.whiteColor} secureTextEntry={this.state.password} placeholderTextColor="#fff" placeholder='Enter Password..'/>
                  <Button   onPress={this.onChangeShowPassword.bind(this)} transparent rounded outline>
                  <Icon style={styles.whiteColor} active name={this.state.password ? 'eye' : 'eye-off'} />
                  </Button>
              </Item>
          </View>
          <View style={styles.lgFooter}>
              <TouchableOpacity underlayColor="white"  onPress={() => this.props.navigation.navigate("Navigation")} style={[styles.loginButton, styles.lgInput]} bordered  rounded light>
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
