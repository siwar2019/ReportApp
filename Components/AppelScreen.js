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
import {Button, Container, List, Right, Left, Thumbnail, Body, Text, ListItem} from 'native-base';
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
        <Nav/>
        <ScrollView >
          <View style={{padding: 6}}>
          <Text style={[{fontWeight: 'bold'}, styles.textColor]}>Duis in turpis orci. Quisque at
            viverra massa
          </Text>
          <Text style={[styles.textColor]}>
            auris elementum mauris mauris, in finibus lorem ultrices et. Fusce sed blandit turpis, sit
            amet laoreet nunc.
            Vivamus nec lacus dictum risus suscipit auctor ac sit amet libero.
          </Text>
          </View>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../assets/victor/Police-officer-01.jpg')} />
              </Left>
              <Body>
                <Text>CIVIL PROTECTION</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
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
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
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
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
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
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent  onPress={() => Linking.openURL('http://www.chercheinfo.com/uploads/-7bb5ffeb18.pdf')}>
                  <Text>Consult</Text>
                </Button>
              </Right>
              
            </ListItem>
            <Right>
                <Button transparent onPress={() => this.props.navigation.navigate("StackScreenChat")}>
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
  textColor: {color: '#4A5568'}
});
