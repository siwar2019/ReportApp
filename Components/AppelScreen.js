import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,

  View,
  TouchableHighlight,
  ImageBackground,
  Linking,
} from 'react-native';
import { Container, Header, Content,Title,Button} from 'native-base';
import Icon from 'react-native-ionicons'
import call from 'react-native-phone-call';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Assets } from '@react-navigation/stack';



export default class AppelScreen extends React.Component {
  
 //call samu
 callSamu = () => {
    
  const args = {
    number: '190',
    prompt: false,
  };
  call(args).catch(console.error);
};
//CALL PLICE
callPolice= () => {
  
  const args = {
    number: '197',
    prompt: false,
  };
  call(args).catch(console.error);
};
callCivil= () => {
  
  const args = {
    number: '198',
    prompt: false,
  };
  call(args).catch(console.error);
};
callRemorcage= () => {
  
  const args = {
    number: '71255024',
    prompt: false,
  };
  call(args).catch(console.error);
};
callPort= () => {
  
  const args = {
    number: '71735804',
    prompt: false,
  };
  call(args).catch(console.error);
};

  render() {
    return (
     
 
      <View style={styles.container}>
             
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
   
 

          <View style={styles.welcomeContainer}>
          
            <Text>Choose an urgency number to call</Text>
          </View>

          <View style={styles.getStartedContainer}>

          <Button rounded success onPress={this.callSamu}>
            <Text>            SAMU             </Text>
          </Button>

          </View>

          
          <View style={styles.getStartedContainer}>
          <Button rounded success  onPress={this.callPolice}>
            <Text>            POLICE              </Text>
          </Button>
          </View>

         
          <View style={styles.getStartedContainer}>

          <Button rounded success onPress={this.callRemorcage}>
            <Text>        SOS TOWING        </Text>
          </Button>
        
          </View>
          <View style={styles.getStartedContainer}>
          <Button rounded success  onPress={this.callCivil}>
            <Text>   CIVIL PROTECTION   </Text>
          </Button>
        
          </View>
          <View style={styles.getStartedContainer}>
          <Button rounded success onPress={this.callPort}>
            <Text>Permenance of the ports</Text>
          </Button>
         
          </View>

          <View style={styles.getStartedContainer}>
          <Button rounded success onPress={() => Linking.openURL('http://www.chercheinfo.com/uploads/-7bb5ffeb18.pdf')}>
            <Text>Clinics and Emergencies</Text>
          </Button>
         
          </View>

        <View>
        
         
        </View>
              
         
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
    paddingBottom:10,
    textAlign:"center"
  },
  helpLink: {
    paddingVertical: 15,
  },
  sliderImage: {
    height: 400,
    width: 550
  }
});
