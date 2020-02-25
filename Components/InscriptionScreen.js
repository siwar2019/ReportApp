import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  
  View,
  
} from 'react-native';


import { Container, Content,Header, Title,List, Text, ListItem, InputGroup, Input,Icon,Button } from 'native-base';

export default class InscriptionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  buttonPressed() {
    console.log('ok')
    
      alert(' votre inscription a eté effectué avec succés ')
     
   
}
  render() {
    return (
        <Container>
          <Header>
            <Button transparent>
              <Icon name='md-arrow-back' />
            </Button>
             <Title style={styles.container}>Inscription</Title>
             <Button transparent>
               <Icon name='ios-home' />
             </Button>
         
      </Header>
            <Content>
                <List>
                    <ListItem>
                        <InputGroup>
                            <Icon name='ios-person' />
                            <Input placeholder='EMAIL' />
                        </InputGroup>
                    </ListItem>
                
                    <ListItem>
                        <InputGroup>
                            <Icon name='ios-unlock' />
                            <Input placeholder='PASSWORD' secureTextEntry={true}/>
                        </InputGroup>
                    </ListItem>
                
                    <ListItem>
                    <Text>Firstname :</Text>
                        <InputGroup >
                        
                            <Input inlineLabel label='FIRSTNAME' placeholder=' First name here' />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                    <Text>lasttname :</Text>
                        <InputGroup >
                        
                            <Input inlineLabel label='FIRSTNAME' placeholder=' Last name here' />
                        </InputGroup>
                    </ListItem>
                
                    <ListItem>
                        <InputGroup >
                            <Input stackedLabel label='Address' placeholder='Address' />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup >
                            <Input stackedLabel label='NUMERO' placeholder='Numéro de télephone' />
                        </InputGroup>
                    </ListItem>

                </List>
                <Button  style={styles.signInButton} color="#fff" onPress={()=>this.buttonPressed()} >
                <Text>Sign in</Text>
                </Button>

            </Content>
        </Container>
    );
}
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:10, fontWeight: 'bold' },
  signInButton: {justifyContent: 'center'}
});