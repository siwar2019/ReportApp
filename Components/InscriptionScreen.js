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
    ListItem,
    InputGroup,
    Input,
    Icon,
    Button,
    Footer,
    Item
} from 'native-base';

export default class InscriptionScreen extends React.Component {
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
  static navigationOptions = {
    header: null,
  };


  buttonPressed() {
    console.log('ok')
    
      alert(' votre inscription a eté effectué avec succés ')
     
   
}
  render() {
    return (
            <ImageBackground source={require('../assets/bg-lg.jpg')} style={styles.container}>

            <Header style={styles.signInHeader}>
                <TouchableOpacity underlayColor="white"  onPress={() => this.props.navigation.navigate("Home")} style={[styles.backButton]} bordered  rounded light>
                    <Icon style={styles.whiteColor} name='md-arrow-back' />
                </TouchableOpacity>
             <Title style={styles.container}>Inscription</Title>
      </Header>
            <View style={styles.signInContent}>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter email..'/>
                </Item>
                <Item style={[styles.lgInput]} rounded>
                    <Input style={styles.whiteColor} secureTextEntry={this.state.password} placeholderTextColor="#fff" placeholder='Enter Password..'/>
                    <Button   onPress={this.onChangeShowPassword.bind(this)} transparent rounded outline>
                        <Icon style={styles.whiteColor} active name={this.state.password ? 'eye' : 'eye-off'} />
                    </Button>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter First name..'/>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter Last name..'/>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter Address..'/>
                </Item>
                <Item  style={styles.lgInput} rounded>
                    <Input style={styles.whiteColor}  placeholderTextColor="#fff" placeholder='Enter phone number..'/>
                </Item>
            </View>
                <Footer style={styles.footer}>
                    <TouchableOpacity underlayColor="white"  onPress={() => this.props.navigation.navigate("Navigation")} style={[styles.loginButton, styles.lgInput]} bordered  rounded light>
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
