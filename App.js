import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ReportScreen from './Components/ReportScreen';
import IncidentScreen from './Components/IncidentScreen';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Components/HomeScreen';
import AcceuilScreen from './Components/AcceuilScreen';
import AppelScreen from './Components/AppelScreen';
import ChatbotScreen from './Components/ChatbotScreen';
import InscriptionScreen from './Components/InscriptionScreen';
import IncidentForm from "./Components/IncidentForm";
import Nav from "./Components/Nav";
import { Root } from "native-base";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* function StackScreenChat() {
  hethi en cas ou n7ebou on modifie lentete  avec un titre , f ana componenet
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatBot"
        component={ChatbotScreen}
        options={{ title: 'chatbot' }}
      />
    </Stack.Navigator>
  );
} */



/*function StackScreenAppel() {
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
}*/
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
      //konna najmou n7otou les icones lkol mta3 les routes lahnay avec ionicon haka: 
      //avec import this: import Ionicons from 'react-native-vector-icons/Ionicons'; 
      /* screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
 
          if (route.name === 'Acceuil') {
            iconName = focused
              ? 'logo-skype'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Call urgency') {
            iconName = focused ? 'menu'
            : 'logo-sass' ;
          }
 
          // You can return any component that you like here!
       return <Ionicons name={iconName} size={size} color={color} />;
        },
      })} */
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={AcceuilScreen}  //thezna el page acceuil screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}

      />
      <Tab.Screen name="Call urgency" component={AppelScreen}
        options={{
          tabBarLabel: 'Call urgency',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cellphone-sound" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Incident" component={IncidentScreen}
        options={{
          tabBarLabel: 'Incident',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alarm-light" color={color} size={size} />

          ),
        }} />
      {/* <Tab.Screen name="Report" component={ReportScreen}   /> */}
      <Tab.Screen name="Chatbot" component={ChatbotScreen}
        options={{
          tabBarLabel: 'Chatbot',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment-text-multiple" color={color} size={size} />
          ),
        }} />
    
    </Tab.Navigator>

  );


}

const Stack = createStackNavigator();
//stack:les interfaces mta3, home page loula et lorsque je clique sur le bouton, jouvre page 2 navigation
//definition de spages: ou bien une page 7adhra deja 5admetha f blasa o5ra, sinn je la definie ici kima navigation
//navigation c'est une fonction non pas une page, donc najmou nzidou d'autres interfaces 
export default function App() {
  return (

    <Root>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Navigation" component={Navigation} />
            <Stack.Screen name="InscriptionScreen" component={InscriptionScreen} />
            <Stack.Screen name="IncidentFormScreen" component={IncidentForm} />
            {/*kenet heka pour modifier l'entete fel fonction stackscreen chat **  <Stack.Screen name="StackScreenChat" component={StackScreenChat} /> */}
            <Stack.Screen name="Chatbot" component={ChatbotScreen} />

            <Stack.Screen name="Acceuil" component={AcceuilScreen} />
            <Stack.Screen name="Call urgency" component={AppelScreen} />
            <Stack.Screen name="Incident" component={IncidentScreen} />
            <Stack.Screen name="Report" component={ReportScreen} />


          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Root>
  );




}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
