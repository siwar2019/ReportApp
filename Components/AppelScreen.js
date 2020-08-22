import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight,
  ImageBackground,
  Linking,
} from 'react-native';
import {Button, Container, List, Right, Left, Thumbnail, Body, Text, ListItem,Header,Title,Icon} from 'native-base';
import call from 'react-native-phone-call';
import Nav from "./Nav";



export default class AppelScreen extends React.Component {
  constructor(props) {
          super(props);
        
          }
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


        <Container>
        <Header style={[styles.headerBg]}>

              <Left>
                <Button underlayColor="#125FFF" onPress={() => this.props.navigation.navigate("Acceuil")}
                  style={[styles.text]} bordered rounded light>
                  <Icon style={styles.whiteColor} name='md-arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title style={[styles.text]}>Call urgency</Title>
              </Body>
              <Button underlayColor="#125FFF" onPress={() => this.props.navigation.navigate("Incident")}
                  style={[styles.backButton]} bordered rounded light>
                  <Icon style={styles.whiteColor} name='md-arrow-round-forward' />
                </Button>
           
            </Header>
        <ScrollView >
          <View style={{paddingLeft:60}}>
          <Text style={{fontWeight: 'bold',fontSize: 20,fontWeight: '600',color:"#D12000"}}> Emergency  HandHelp
          </Text>
         
            </View>
            <View>
              <Text>
          Quickly place an emergency  for help, anytime and  any where in Tunisia!
        
          </Text>
          </View>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/victor/Police-officer-01.jpg')} />
              </Left>
              <Body>
                <Text>CIVIL PROTECTION</Text>
                <Text note numberOfLines={2}>immediate aftermath of a disaster...</Text>
              </Body>
              <Right>
                <Button transparent onPress={this.callCivil}>
                  <Text>Call</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/victor/ambulance.jpg')} />
              </Left>
              <Body>
                <Text>SAMU</Text>
                <Text note numberOfLines={2}> municipal humanitarian emergency service . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={this.callSamu}>
                  <Text>Call</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/victor/Outstanding-Police-Officer-Vectors-1.jpg')} />
              </Left>
              <Body>
                <Text>POLICE</Text>
                <Text note numberOfLines={2}>the civil authority of government . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={this.callPolice}>
                  <Text>Call</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/victor/hospital.jpg')} />
              </Left>
              <Body>
                <Text>Clinics and Emergencies</Text>
                <Text note numberOfLines={1}>find your need here. .</Text>
              </Body>
              <Right>
                <Button transparent  onPress={() => Linking.openURL('http://www.chercheinfo.com/uploads/-7bb5ffeb18.pdf')}>
                  <Text>Consult</Text>
                </Button>
              </Right>
              
            </ListItem>
            <Right>
                <Button transparent onPress={() => this.props.navigation.navigate("Chatbot")}>
                  <Text>Help?</Text>
                </Button>
              </Right>
          </List>
        </ScrollView>
        
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  textColor: {color: '#4A5568'},
  whiteColor:{ 
        color:"#fff",
       
    },
    text: {
      textAlign:"center"
    }
});
