import React, { Component } from "react";
import {
 
    ScrollView,
    StyleSheet,
 
    Button,
    View,
    Text, TouchableOpacity,StyleSheet
} from "react-native";
import { NodeCameraView } from 'react-native-nodemediaclient';
import {
    BaseReduceCompnentClass,
    BaseReduceCompnentRedux
} from "../BaseReduceCompnent";

import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export const StreamingScreen = BaseReduceCompnentRedux(
    (state, stateDefault) => {
        return stateDefault;
    },
    (dispatch, dispatchDefault) => {
        return dispatchDefault;
    },

    class extends BaseReduceCompnentClass {
        constructor(props) {
            super(props);
            this.state = {
                publishBtnTitle: 'start livestream',
                isPublish: false,
            }
            this.state = { 'flashenable': false };
        }

        componentDidMount(){
            this.checkingCamera();
        }
     
        async checkingCamera() {
            let result = await request(PERMISSIONS[Platform.OS.toUpperCase()].CAMERA);
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    displayError('This feature is not available (on this device / in this context)', () => {

                    });
                    break;
                case RESULTS.DENIED:
                    displayError('The permission has not been requested / is denied but requestable', () => {

                    });
                    break;
                case RESULTS.GRANTED:
                    
                    break;
                case RESULTS.BLOCKED:
                    displayError('The permission is denied and not requestable anymore', () => {

                    });
                    break;
            }
        }

        render() {
            return (
                
                <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <NodeCameraView
                        style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
                        ref={(vb) => { this.vb = vb }}
                        outputUrl={"rtmp://publish.meridix.com/live/aa91f82370d639d20d74a63aed5a00b8"}
                        camera={{ cameraId: 1, cameraFrontMirror: true }}
                        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
                        video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
                        autopreview={true}
                    />

                    <TouchableOpacity
                        style={{ width: 150, height: 30, backgroundColor: 'blue', borderRadius: 25, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, alignSelf: 'center', zIndex: 1 }}
                        onPress={() => {
                            if (this.state.isPublish) {
                                this.setState({ publishBtnTitle: 'stop livestream', isPublish: false });
                                this.vb.stop();
                            } else {
                                this.setState({ publishBtnTitle: 'start livestream', isPublish: true });
                                this.vb.start();
                            }
                        }}
                        color="#841584"
                    ><Text style={{ color: '#fff', fontSize: 16 }}>{this.state.publishBtnTitle}</Text></TouchableOpacity>
               
               <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Reverse Camera" onPress={() => {
            this.vb.switchCamera();
            this.state.flashenable = false;
          }}>
            <Icon name="ios-reverse-camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Switch Flashlight" onPress={() => {
            this.state.flashenable = !this.state.flashenable;
            this.vb.flashEnable(this.state.flashenable);
          }}>
            <Icon name="ios-bulb-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#e6ce28' title="Publish" onPress={() => { this.vb.start() }}>
            <Icon name="ios-paper-plane-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#e74c3c' title="Close" onPress={() => { this.props.navigation.goBack() }}>
            <Icon name="ios-power-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      
                </View>
            
            );
        }
        
    } 
);

const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });

