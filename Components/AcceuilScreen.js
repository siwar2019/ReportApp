import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
 
  Animated,
  View,
  
} from 'react-native';
import { Container, Header, Title, Content ,Button ,DeckSwiper, Card,Cards, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import Icon from 'react-native-ionicons'

const cards = [
  {
    text: 'Call police',
   
    image: require('../assets/police.jpg'),
  },
  {
    text: 'Accident Report',
   
    image: require('../assets/crush.jpg'),
  },
  
  {
    text: 'Fire report',
    
    image: require('../assets/incendie.jpg'),

  },
  {
    text: 'Fire report',
    
    image: require('../assets/incendie2.jpg'),

  },
  {
    text: 'Flood report',
    
    image: require('../assets/innondation.jpg'),

  },
  {
    text: 'Flood report',
    
    image: require('../assets/tremblement.jpg'),

  },
];



export default class AcceuilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
 
  render() {
    return (
      <Container>
        <Header>
        <Button transparent>
              <Icon name='md-arrow-back' />
            </Button>
    <Title style={styles.container}>WELCOME  TO REPORT APP</Title> 
    
             <Button transparent>
               <Icon name='ios-home' />
             </Button>
        </Header>
    
        <View>

          <Text style={{fontWeight: 'bold',paddingTop:10}}> save someone's life by reporting incidents </Text>
          <Text style={{fontWeight: 'bold',paddingTop:10,paddingBottom:10}}>There is no more beautiful gesture than saving a life.</Text>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                   
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                 
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
         
        </View>
     
      </Container>
   
    );

    
  }

}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:10, fontWeight: 'bold' },
});

