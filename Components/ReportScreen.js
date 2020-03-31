import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import {LivePlayer} from "react-native-live-stream";

import {  NodePlayerView } from 'react-native-nodemediaclient';
import {  NodeCameraView } from 'react-native-nodemediaclient';
import Video from 'react-native-video';
export default class ReportScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      publishBtnTitle: '',

    }
  }
  render() {
    return (
    <View>
      


      <NodePlayerView 
  style={{ height: 200 }}
  ref={(vp) => { this.vp = vp }}
  inputUrl={"rtmp://live.mux.com/app/02a236ab-f8dc-e0ac-7e78-a778e7401299"}
  scaleMode={"ScaleAspectFit"}
  bufferTime={300}
  maxBufferTime={1000}
  autoplay={true}
/>

<NodeCameraView 
  style={styles.nodeCameraView}
  ref={(vb) => { this.vb = vb }}
  outputUrl = {"rtmp://live.mux.com/app/02a236ab-f8dc-e0ac-7e78-a778e7401299"}
  camera={{ cameraId: 1, cameraFrontMirror: true }}
  audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
  video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
  autopreview={true}
/>



  
<View>
<Button
  onPress={() => {
    if (this.state.isPublish) {
      this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
      this.vb.stop();
    } else {
      this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
      this.vb.start();
    }
  }}
  title={this.state.publishBtnTitle}
  color="#841584"
/>
</View>

<View>
 
<Video  style={styles.backgroundVideo}
       source={{uri: "https://stream.mux.com/02jkkxfiE2CYgR8WMpBNMBIIckJpymOmxcvknXZ02Jpcs.m3u8"}}   
       ref={(ref) => {
         this.player = ref
       }}  // Store reference
       onBuffer={this.onBuffer} // Callback when remote video is buffering
       onError={this.videoError} // Callback when video cannot be loaded
      />
</View>
 <Text  style={styles.bold}>HJHH</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  nodeCameraView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bold : {
    color:'red'
  }

});