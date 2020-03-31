import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
//import { RNCamera, FaceDetector } from 'react-native-camera';
export default class ChatBotScreen extends React.Component {
  async startRecording() {
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();
}

stopRecording() {
    this.camera.stopRecording();
}
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions ={"Permission to use camera"}
          androidCameraPermissionOptions ={
            "We need your permission to use your camera phone"
          }
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
         
        </View>
      </View>
    );
  }}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start"
    },
    headline: {
      alignSelf: "center",
      fontSize: 18,
      marginTop: 10,
      marginBottom: 30
    },
    videoTile: {
      alignSelf: "center",
      fontSize: 16,
      marginTop: 15
    }
  });