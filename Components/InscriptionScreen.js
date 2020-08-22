import React from 'react';
import {
    Image, ImageBackground,
    ScrollView,
    StyleSheet,
    TouchableHighlight, TouchableOpacity,

    View,

} from 'react-native';


import {
    Container,
    Content,
    Header,
    Title,
    List,
    Text,
    TextInput,
    ListItem,
    InputGroup,
    Input,
    Icon,
    Button,
    Footer,
    Item,Body
} from 'native-base';
import CryptoJS from "react-native-crypto-js";
export default class InscriptionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: true,

        }

        this.state = {
            form: {
                email: null,
                password: null,
                firstname: null,
                lastname: null,
                tel: null,
                address: null,
                
            }
        }
    }
    onChangeShowPassword() {
        this.setState({
            password: !this.state.password,
        });
    }


    setEmail(text) {
        this.setState({
            form: {
                email: text,
                password: this.state.form.password,
                lastname: this.state.form.lastname,
                firstname: this.state.form.firstname,
                address: this.state.form.address,
                tel: this.state.form.tel,
            }
        });
    }
    setPassword(text) {
        this.setState({
            form: {
                email: this.state.form.email,
                password: text,
                lastname: this.state.form.lastname,
                firstname: this.state.form.firstname,
                address: this.state.form.address,
                tel: this.state.form.tel,

            }
        });
    }
    setLastname(text) {
        this.setState({
            form: {
                email: this.state.form.email,
                password: this.state.form.password,
                lastname: text,
                firstname: this.state.form.firstname,
                address: this.state.form.address,
                tel: this.state.form.tel,
               
            }
        });
    }
    setFirstname(text) {
        this.setState({
            form: {
                email: this.state.form.email,
                password: this.state.form.password,
                lastname: this.state.form.lastname,
                firstname:text ,
                address: this.state.form.address,
                tel: this.state.form.tel,
            }
        });
    }
    setTel(text) {
        this.setState({
            form: {
                email: this.state.form.email,
                password: this.state.form.password,
                lastname: this.state.form.firstname,
                firstname:this.state.form.firstname,
            
                address: this.state.form.address,
                tel: text,
            }
        });
    }
    setAddress(text) {
        this.setState({
            form: {
                email: this.state.form.email,
                password: this.state.form.password,
                lastname: this.state.form.lastname,
                firstname: this.state.form.firstname,
                tel: this.state.form.tel,
                address: text
            }
        });
    }

async sendCred  (props){
    console.warn('my form values', this.state.form)
     
       fetch("http://192.168.43.41:3001/user",{
         method:"POST",
         headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "email":this.state.form.email,
          "password": this.state.form.password /* CryptoJS.AES.encrypt(this.state.form.password, 'secret key 123').toString() */ ,
          "address":this.state.form.address,
          'firstname': this.state.form.firstname,
          "lastname":this.state.form.lastname,
          'tel': this.state.form.tel,
          'isConfident': false,


        })
       })
       .then(res=>res.json())
       this.props.navigation.navigate('Home');
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
  render() {
    return (
            <ImageBackground source={require('../assets/bg3.png')} style={styles.container}>

            <Header style={styles.signInHeader}>
                <TouchableOpacity underlayColor="white"  onPress={() => this.props.navigation.navigate("Home")}
                 style={[styles.backButton]} bordered  rounded light>
                    <Icon style={styles.whiteColor} name='md-arrow-back' />
                </TouchableOpacity>
                <Title style={styles.container}>Inscription</Title>
            </Header>

         
            <View style={styles.signInContent}>
                <Item  style={styles.lgInput} rounded>
                    <Input
                    style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter email..'
                    label='email'
                    mode="outlined"
                    value={this.state.form.email}
                    onChangeText={(text)=>this.setEmail(text)}
                    
                    />
                </Item>
                <Item style={[styles.lgInput]} rounded>
                    <Input 
                    style={styles.whiteColor} 
                    secureTextEntry={this.state.password} 
                    placeholderTextColor="#fff" 
                    placeholder='Enter Password..'
                   
                    label='password'
                    mode="outlined"
                    value={this.state.form.password}
                    onChangeText={(text)=>this.setPassword(text)}
                    
                    />

                    <Button   onPress={this.onChangeShowPassword.bind(this)} transparent rounded outline>
                        <Icon style={styles.whiteColor} active name={this.state.password ? 'eye' : 'eye-off'} />
                    </Button>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter First name..'
                    label='firstname'
                    mode="outlined"
                    value={this.state.form.firstname}
                    onChangeText={(text)=>this.setFirstname(text)}/>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter Last name..'
                    label='lastname'
                    mode="outlined"
                    value={this.state.form.lastname}
                    onChangeText={(text)=>this.setLastname(text)}/>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter Address..'
                    label='address'
                    mode="outlined"
                    value={this.state.form.adress}
                    onChangeText={(text)=>this.setAddress(text)}/>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter phone number..'
                    label='tel'
                    mode="outlined"
                    value={this.state.form.tel}
                    onChangeText={(text)=>this.setTel(text)}/>
                </Item>
            </View>
                <Footer style={styles.footer}>
                    <TouchableOpacity underlayColor="white"  onPress={() =>this.sendCred()} style={[styles.loginButton, styles.lgInput]} bordered  rounded light>
                        <Text  style={styles.whiteColor}>Sign in</Text>
                    </TouchableOpacity>
                </Footer>
            </ImageBackground>
    );
}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signInHeader: {
        backgroundColor: "transparent",
        alignItems:'center',
        justifyContent:'flex-start'
    },
    signInContent: {
        flex: 1,
        padding:30,
        justifyContent: "space-evenly"
    },
  signInButton: {justifyContent: 'center'},
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
    backButton: {
        width:30,
    },
    lgInput: {
        backgroundColor:"rgba(255,255,255, 0.3)"
    },
    footer: {
        backgroundColor: "transparent"
    }
});
