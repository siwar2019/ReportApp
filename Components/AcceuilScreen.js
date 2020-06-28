import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import {Container, Text,DeckSwiper,Card,CardItem,Left,Thumbnail,Body} from 'native-base';
import Nav from "./Nav";
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
            <Container style={{  backgroundColor: '#DDDDDD',}}>
          
                { <Nav/> }
             
                 
                    <Text  style={styles.text}> Easy to report incidents</Text>

<Text style={styles.text2}>
Report in two taps, it’s so easy for your to report incidents with photos, text and GPS
                    </Text>
                    <View>
                    <Image
                            style={{width: '100%', height: 100, resizeMode: 'contain'}}
                            source={require('../assets/victor/home_img_2.png')}
                        />
          <Text style={{fontWeight: 'bold',paddingTop:10,paddingBottom:10,color:"#370028",fontweight:"arial"}}>There is no more beautiful gesture than saving a life.</Text>
         
        
                  
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
                  <Image style={{ height: 200, flex: 1 }} source={item.image} />
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
    
 
    text:  {   fontSize: 30,
      fontWeight: '600',
      color: '#4169E1',
      paddingLeft:20,
      paddingBottom:10,
      fontWeight: 'bold'
    },
    text2:{
      fontSize: 20,
      fontWeight: '600',
      color: 'black',
      paddingLeft:20,
    }
    
});

