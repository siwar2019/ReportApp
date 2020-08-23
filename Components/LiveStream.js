import React, { Component } from "react";
import {
    View,
    Text, TouchableOpacity,StyleSheet
} from "react-native";
import ActionButton from 'react-native-action-button';
import { NodeCameraView } from 'react-native-nodemediaclient';
import Icon from 'react-native-ionicons';


export default class LiveStream extends Component {


            constructor(props) {
            super(props);
            this.state = {
                publishBtnTitle: 'start livestream',
                isPublish: false,
            }
        }

          render() {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <NodeCameraView
                        style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
                        ref={(vb) => { this.vb = vb }}
                        outputUrl={"rtmp://192.168.1.8/live/demolivestream2"}
                        camera={{ cameraId: 1, cameraFrontMirror: true }}
                        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
                        video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
                        autopreview={true}
                    />

                    <TouchableOpacity
                        style={{ width: 150, height: 30, backgroundColor: 'blue', borderRadius: 25, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, alignSelf: 'center', zIndex: 1 }}
                        onPress={() => {
                            if (this.state.isPublish) {
                                this.setState({ publishBtnTitle: 'start livestream', isPublish: false });
                                this.vb.stop();
                            } else {
                                this.setState({ publishBtnTitle: 'stop livestream', isPublish: true });
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
            <Icon name="reverse-camera" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Switch Flashlight" onPress={() => {
            this.state.flashenable = !this.state.flashenable;
            this.vb.flashEnable(this.state.flashenable);
          }}>
            <Icon name="bulb" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#e6ce28' title="Publish" onPress={() => { this.vb.start() }}>
            <Icon name="paper-plane" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#e74c3c' title="Close" onPress={() => { this.props.navigation.goBack() }}>
            <Icon name="power" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
                
                </View>
            );
        }
      
  
  
}

const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });