import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
  
} from 'react-native';
import { Container, Header, Title, Content } from 'native-base';



export default class AppelScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container> 
      <Header>
          <Title style={styles.container}>Fast Call </Title>
      </Header>
      <Content>
      <View >
        <Text>HI C'EStttt appel ici </Text>
      </View>
      </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:10, fontWeight: 'bold' },
});


