import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import ReportScreen from './Components/ReportScreen' ;
import IncidentScreen from './Components/IncidentScreen' ;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Components/HomeScreen';
import StreamingScreen from './Components/StreamingScreen';
import AcceuilScreen from './Components/AcceuilScreen';
import AppelScreen from './Components/AppelScreen';
import ChatbotScreen from './Components/ChatbotScreen';
import InscriptionScreen from './Components/InscriptionScreen';
import Icon from 'react-native-ionicons'

function StackScreenChat() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatBot"
        component={ChatbotScreen}
        options={{ title: 'chatbot' }}
      />
    </Stack.Navigator>
  );
}
function StackScreenAppel() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Appel"
        component={AppelScreen}
        options={{ title: 'call emergency', headerTintColor: '#410252',
        headerTitleStyle: {
          fontWeight: 'bold', } 
        

        }}

      />
    </Stack.Navigator>
  );
}
/*
function Screen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      
    </SafeAreaView>
  );
}
*/
 
function Navigation({ navigation }) {
  
    const Tab = createBottomTabNavigator();

   
      return (
       
          <Tab.Navigator 
          
          >
            <Tab.Screen name="Acceuil" component={AcceuilScreen}  //thezna el page acceuil screen
          
              />
            <Tab.Screen name="Call urgency " component={StackScreenAppel}  />
            <Tab.Screen name="Incident" component={IncidentScreen} />
            <Tab.Screen name="Report" component={ReportScreen}   />
            <Tab.Screen name="Chatbot" component={StackScreenChat} />
            


          

          </Tab.Navigator>
        
      );
    
  
}

const Stack = createStackNavigator();
//stack:les interfaces mta3, home page loula et lorsque je clique sur le bouton, jouvre page 2 navigation
//definition de spages: ou bien une page 7adhra deja 5admetha f blasa o5ra, sinn je la definie ici kima navigation
//navigation c'est une fonction non pas une page, donc najmou nzidou d'autres interfaces 
export default function App() {
  return (
    
    
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen}
          />
          <Stack.Screen name="Navigation" component={Navigation} />
          <Stack.Screen name="InscriptionScreen" component={InscriptionScreen} />
         
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
   
  );



  
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});