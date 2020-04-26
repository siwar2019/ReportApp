import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import ChatBot from 'react-native-chatbot';


const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    fontSize: 25
  }
});


const steps = [
  {
    id: 'welcome message',
    message: 'Hello how are you?',
    trigger: "Ask Name"
  },
  {
    id: "Ask Name",
    message: "Please type your name?",
    trigger: "Waiting user input for name"
  },
  
   {
     id: "Waiting user input for name",
     user: true,
     trigger: "Asking question"
   },
  {
    id: "Asking question",
    message: "Hi {previousValue}, Glad to know you !!",
    trigger: "other"
  },
  {
    id: "other",
    message: "how can i help you?",
    trigger: "userinput2"
  },
  {
    id: "userinput2",
    user: true,
    trigger: "dont panick"
  },
  {
    id: "dont panick",
    message: "Please dont panick! ,I will guide you :) ",
    trigger: "question2"
  },
  {
    id: "question2",
    message: "what is the kind of your incident?",
    trigger: "incident type"
  },

  {
    id: 'incident type',
    options: [
      {
        value: 'Road accident', label: 'road accident', trigger: () => {
          console.log("Clicked on Road accident");
          return "accident";
        },
      },
      { value: 'Sinking', label: 'Sinking', trigger: 'Sinking' },
      { value: 'Fire', label: 'Fire', trigger: 'Fire' },
      { value: 'Flood', label: 'Flood', trigger: 'Flood' }
    ]
  },
  
  {
    id: "Done",
    message: 'May God bless you !!',
   
    end: true
  },
 
  
  {
    id: 'accident',
    message: 'You choose Road accident!!',
    trigger: ({ value, steps }) => {
      if(steps['8'] === undefined) {
        return '8';
      } else {
        return '9';
      }
    }
  },
 
  {
    id: '8',
    message: 'First you should call police immediatelly on  197',
    trigger: 'step2'
  },
 
  {
    id: "step2",
    message: 'then call  198 Medical ambulances at 71 780 000 or 71 781 000',
    trigger: "Done"
  },
  {
    id: 'Sinking',
    message: 'you should contact the nearest savior swimmer in the sea you are swimming in',
    trigger: '7.5'
  },
  {
    id: '7.5',
    message: 'please harry up',
    trigger: "Done"
  },
  {
    id: 'Fire',
    message: 'you should call civil protection at 198',
    trigger: "Fire2"
  },
  {
    id: 'Fire2',
    message: 'you should call civil protection at 198',
    trigger: "Done"
  },
  {
  id: 'Flood',
  message: 'First you should call civil protection at 198 they will send you pompier',
  trigger: 'end'
},
  {
    id: 'end',
    component: <Image source={require('../assets/victor/bless2.jpg')} style={{ width: 300, height: 180 }} />,
    end:true
  },
  
  
]

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <ChatBot steps={steps} />
        
      </View>
    );
  }
}