import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableHighlight,
} from 'react-native';
import { Container, Header, Content, Form, Item,  Label} from 'native-base';

//import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


export default class HomeScreen extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/logo.jpeg')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.title}> if you wish to report an incident please proceed to authentication </Text>         
          </View>
          
        <View>
        
            <Text style={styles.description}>sign in  </Text>           
          
        <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
   
        <Button color="#05a5d1" title="Sign in" onPress={() => this.props.navigation.navigate("Navigation")} />
        
        <TouchableHighlight onPress={() => this.props.navigation.navigate("InscriptionScreen")} underlayColor="white">
          <View >
            <Text style={styles.buttontext} >New here?</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate("Navigation")}underlayColor="white">
          <View >
            <Text style={styles.buttontext}>not now? </Text>
          </View>
        </TouchableHighlight> 
        </View>
              
          <ScrollView
            horizontal
            pagingEnabled
            style={{ marginBottom: 40 }}
          >
            <Image source={ '../assets/logo.jpeg'} style={styles.sliderImage} /> 
            

          </ScrollView>
          
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  buttontext:{
    flex: 1,
    flexDirection: 'column',
    marginLeft: 170,
    
    justifyContent: 'center',
    alignItems: 'center',
    color:'#A9A9A9'
  },
  description: {
   
    fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 20,
      paddingTop:10,
      color:'#911F07',
     
    },
  title: {
    fontSize: 15,
    paddingBottom: 10,
    color:'black',
    
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  helpLink: {
    paddingVertical: 15,
  },
  sliderImage: {
    height: 400,
    width: 550
  }
});
