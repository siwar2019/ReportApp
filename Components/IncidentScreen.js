import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal  from "react-native-modal";
import { TouchableHighlight,Image,StyleSheet ,ScrollView,Picker,TouchableOpacity,NativeModules, Dimensions, StatusBar, SafeAreaView} from 'react-native';
import { Form } from "native-base";
import {ListItem, List,Icon,InputGroup, Input} from 'native-base' ;
import ImagePicker from 'react-native-image-picker';
//import ImagePicker2 from 'react-native-image-crop-picker';
import { IconButton, Colors,ActivityIndicator } from 'react-native-paper';
var ImagePicker3 = NativeModules.ImageCropPicker;
export default class IncidentScreen extends Component {
 
  constructor() {
    super();
    this.state = {
        image: null,
        images: null
    };
}

  state = {
    photo: null,
  };

  state = {
    isModalVisible: false
  };
  state = {
    isModalVisible2: false
  };
  state = {
    isModalVisible3: false
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  toggleModal2 = () => {
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  };
  toggleModal3 = () => {
    this.setState({ isModalVisible3: !this.state.isModalVisible3 });
  };
 //camera upload
 
  handleChoosePhoto=()=>{
    const options = {
      noData: true,
    };

ImagePicker.launchImageLibrary(options,response => {
 if (response.uri) {
  this.setState({ photo: response });
 }
  console.log("response",response) ;
});
  };


//lunch camera photo
  launch=()=>{
    const options = {
      noData: true,
    };
    ImagePicker.launchCamera(options, (response) => {
      // Same code as in above section!
  console.log("response",response) ;
});
  };

//multiple photos
/*handleChooseMultiplePhoto=() => {
  const options = {
    noData: true,
  };
  ImagePicker2.openPicker({
  
  multiple: true,
}).then(images => {
  console.log(images);
  this.setState({ photo2: response2 });
});
}
*/

handleChooseMultiplePhoto() 
    {
        ImagePicker3.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
        }).then(images => {
            this.setState({
                image: null,
                images: images.map(i => {
                    console.log('received image', i);
                    return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
                })
            });
        }).catch(e => alert(e));
    }
    scaledHeight(oldW, oldH, newW) {
      return (oldH / oldW) * newW;
  }

  renderImage(image) {
      return <Image style={{width: 200, height: 200, resizeMode: 'contain'}} source={image}/>
  }

  renderAsset(image) {
      if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
          return this.renderVideo(image);
      }

      return this.renderImage(image);
  }
//only galery video
onlygaleryvideo=()=> {
  ImagePicker2.openPicker({
    multiple: true,
    mediaType: "video",
  }).then(images => {
    console.log(images);
  });
  }
//from camera video 
 
    render() {
      const { photo } = this.state;

      return (

        <ScrollView>
          <View style={ {flex:1}}>
            <View style={styles.padding}>
             
              <Text> Please shoose the way that you want to declare the incident with:</Text>
            </View>

            <TouchableHighlight onPress={this.toggleModal}>
              <Image style={styles.imagestyle} source={require('../assets/photo.png')} />
            </TouchableHighlight>

            <View style={styles.padding}></View>
            <TouchableHighlight onPress={this.toggleModal2}>
              <Image style={styles.imagestyle} source={require('../assets/video5.jpg')} />
            </TouchableHighlight>

            <View style={styles.padding}></View>
            <TouchableHighlight onPress={() => this.toggleModal3()}>
              <Image style={styles.imagestyle} source={require('../assets/live3.png')} />
            </TouchableHighlight>

            <Modal style={styles.view} isVisible={this.state.isModalVisible}>
              
              <View style={{ flex: 1 }}>
              <Text style={{fontSize:20,fontWeight:"bold",fontStyle:"italic",color:"//#region "}}>to report an incident please complete this form </Text>
                <ScrollView>
                  <Form> 
                    <Text> </Text>
                  <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>Description</Text>
                        <Input stackedLabel label='description' placeholder='Describe your incident here' />
                      </InputGroup>
                    </ListItem>
                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>your position :</Text>
                      </InputGroup>
                    </ListItem>
                   

                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}> the incident's type :</Text>
                        <Picker style={styles.picker} selectedValue="gggg">
                          <Picker.Item label="accident" value="accident" />
                          <Picker.Item label="flood" value="floof" />
                          <Picker.Item label="earthquake" value="earthquake" />
                          <Picker.Item label="fire" value="fire" />

                        </Picker>
                      </InputGroup>

                    </ListItem>
                    <ListItem>
                      <InputGroup >
                        
                        <Text style={styles.form}>shoose photo</Text>

                        <IconButton onPress={this.handleChoosePhoto}
                      icon="image"
                      color={Colors.redA100}
                      size={60}
                     
                    />  
                      </InputGroup>
                      {photo && (
                        <Image
                          source={{ uri: photo.uri }}
                          style={{ width: 150, height: 150 }}
                        />
                      )}
                      
                      <SafeAreaView style={styles.safeArea}>

<View style={styles.container}>
    <StatusBar
        barStyle="light-content"/>
    <TouchableOpacity onPress={this.handleChooseMultiplePhoto.bind(this)}>
        <Text>Add more</Text>
    </TouchableOpacity>
   
</View>

<ScrollView style={styles.imgContainer}>
    {this.state.image ? this.renderAsset(this.state.image) : null}
    {this.state.images ? this.state.images.map(i => <View style={styles.imgView}
                                                          key={i.uri}>{this.renderAsset(i)}</View>) : null}
    {
       
    }
</ScrollView>


</SafeAreaView>
                     
                    </ListItem>

                    <Text> OR </Text>
                    <Text style={styles.form} >Directly Launch the Camera  </Text>
                    <IconButton onPress={this.launch}
                      icon="instagram"
                      color={Colors.redA100}
                      size={60}
                     
                    />  
                       
                    
                  </Form>
                </ScrollView>
                <Button title="OK!" onPress={this.toggleModal} />
              </View>
            </Modal>

            <Modal style={styles.view} isVisible={this.state.isModalVisible2}>
              <View style={{ flex: 1 }}>

                <ScrollView>
                  <Form >
                   
                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>Description</Text>
                        <Input stackedLabel label='description' placeholder='Describe your incident here' />

                      </InputGroup>
                    </ListItem>
                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>your position :</Text>

                      </InputGroup>
                    </ListItem>
                    
                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}> the incident's type :</Text>
                        <Picker style={styles.picker} selectedValue="gggg">
                          <Picker.Item label="accident" value="accident" />
                          <Picker.Item label="flood" value="floof" />
                          <Picker.Item label="earthquake" value="earthquake" />
                          <Picker.Item label="fire" value="fire" />
                        </Picker>
                      </InputGroup>
                  
                    </ListItem>
                    <ListItem>
                    <InputGroup >
                        <Text style={styles.form}>upload your video :</Text>
                      </InputGroup>
                    </ListItem>
                    <ListItem>
                  <Button title="shoose VIDEO"
                  onPress={this.onlygaleryvideo} />
                  </ListItem> 
                 
                  
                  </Form>
                </ScrollView>
                <Button title="OK!" onPress={this.toggleModal2} />
              </View>
            </Modal>
          </View>


          <Modal  style={styles.view} isVisible={this.state.isModalVisible3}>
              <View style={{ flex: 1 }}>

                <ScrollView>
                <Text style={{justifyContent:"center",fontWeight:"bold",color:"#fff451"}}>GO STRAMING :</Text>

                  <Form  >
                    <ListItem >
                      <Text style={styles.form}>Firstname :</Text>
                      <InputGroup >

                        <Input inlineLabel label='FIRSTNAME' placeholder=' First name here' />
                      </InputGroup>
                    </ListItem>

                    <ListItem>
                      <Text style={styles.form}>lasttname :</Text>
                      <InputGroup >

                        <Input inlineLabel label='FIRSTNAME' placeholder=' Last name here' />
                      </InputGroup>
                    </ListItem>


                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>Number :</Text>
                        <Input stackedLabel label='NUMERO' placeholder='Numéro de télephone' />
                      </InputGroup>
                    </ListItem>

                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>your position :</Text>

                      </InputGroup>
                    </ListItem>
                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>Description</Text>
                        <Input stackedLabel label='description' placeholder='Describe your incident here' />

                      </InputGroup>
                    </ListItem>

                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}>your position :</Text>
                      </InputGroup>
                    </ListItem>
                    <ListItem>
                      <InputGroup >
                        <Text style={styles.form}> the incident's type :</Text>
                        <Picker style={styles.picker} selectedValue="gggg">
                          <Picker.Item label="accident" value="accident" />
                          <Picker.Item label="flood" value="floof" />
                          <Picker.Item label="earthquake" value="earthquake" />
                          <Picker.Item label="fire" value="fire" />

                        </Picker>
                      </InputGroup>

                    </ListItem>

                  


                  </Form>
                </ScrollView>
                <Button title="OK!" onPress={this.toggleModal3} />
              </View>
            </Modal>

        </ScrollView>
      );
    }
  }
let styles = StyleSheet.create({
  
  imagestyle: {
    
    justifyContent: 'center',
    borderRadius:40,
    borderWidth:10,    
    width: 160,
    height: 120,
    left: 100,
  
  },
  padding: {
    paddingTop:20,
    paddingBottom:20,

  },
  form:{
    color:'red',
    fontWeight: 'bold'
  },
  picker: {
    flex:1,
    fontWeight:"bold",
    fontSize:30,
    color:'#0000FF'
  },
  view:{
    flex:1,
    backgroundColor:'#FFFFFF',
    opacity:1
  },
  imgContainer:{
   
  }
  
 
});
