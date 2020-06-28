import React from 'react';
import {
    Container,
    Form,
    Text,
    View,
    Textarea,
    Left,
    Item,
    Toast,
    Icon,
    Picker,
    Button,
    Right,
    Header,
    List,
    Thumbnail,
    Body, Title, ListItem
} from "native-base";
import Nav from "./Nav";
import { ScrollView, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import MapView from 'react-native-maps';

export default class IncidentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChoiceImportModalVisible: false,
            images: [],
            videos: [],
            isConfirmModalVisible: false,
            selectedImage: null,
            selectedVideo: null,

            fileData: null,
            filepath: null,
            file: null,


        }

    }

    setfileData(text) {
        this.setState({
            form: {
                fileData: text,
                filePath: this.state.form.filePath,
                file: this.state.form.fileUri,

            }
        });
    }
    setfilePath(text) {
        this.setState({
            form: {
                fileData: this.state.form.fileData,
                file: text,
                fileUri: this.state.form.fileUri,


            }
        });
    }
    setfileUri(text) {
        this.setState({
            form: {
                fileData: this.state.form.fileData,
                file: this.state.form.filepath,
                fileUri: text


            }
        });
    }
    backNavigation = () => {
        this.props.navigation.navigate("Incident")
    };
    handleChooseMultiplePhoto() {


        ImagePicker.openPicker({
            multiple: true,
            width: 100,
            height: 150,
            cropping: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
            includeBase64: true,// added this jetni donne f console
          
        }).then(images => {  
             console.log('-----------------------------');
             //console.log(images);
            // let data= JSON.parse(images);
            console.log(JSON.stringify(images));

            this.setState({
                // images : ''
                            images: [...this.state.images, ...images.map(i => {
                                return i
                            })]
                       });

            //  console.log('images', JSON.stringify(images));
            
            fetch("http://192.168.1.8:3001/image", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fileData":images[0].data,// this.state.fileData,
                    "filePath": images[0].path,
                    "fileUri": images[0].fileUri,


                })
            })
                .then(res => res.json())
                .then(r=>console.log(r))
            this.toggleChoiceImportModal();
        }).catch(e => this.toggleChoiceImportModal());
    }
//****************************************new one  */
    handleChooseMultiplevideo() {
        ImagePicker.openPicker({
            multiple: true,
            mediaType: "video",
            includeBase64: true,
        }).then(videos => {
          
            console.log(JSON.stringify(videos.data));

            this.setState({
              
                videos: [...this.state.videos, ...videos.map(video => {
                    return video
                })]
            });
            //add video save to dataase
            fetch("http://192.168.1.8:3001/video", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fileData":videos[0].data,
                    "filePath": videos[0].path,
                    "fileUri": videos[0].fileUri,


                })
            })
                .then(res => res.json())
                .then(r=>console.log(r))
            this.toggleChoiceImportModal();
        }).catch(e => this.toggleChoiceImportModal());
    }
  /*   //directlu jdida
    handleDirectlyTakePhoto() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
            
        }).then(image => {
            console.log('--------directly jdia--');
            console.log(JSON.stringify(images));
            this.setState({
                
                images: [...this.state.images, image]
                
            });
          
            fetch("http://192.168.1.8:3001/image", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fileData":images[0].data,// this.state.fileData,
                    "filePath": images[0].path,
                    "fileUri": images[0].fileUri,


                })
            })
                .then(res => res.json())
                .then(r=>console.log(r))
            this.toggleChoiceImportModal();
        
           
        });
    } */
    //9dima v2
 
    handleDirectlyTakePhoto() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then(images => {
            this.setState({
                images: [...this.state.images, images]
            }); 
            fetch("http://192.168.1.8:3001/image", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fileData":images.data,// this.state.fileData,
                    "filePath": images.path,
                   
                    "fileUri": images.fileUri,


                })
            })
                .then(res => res.json())
                .then(r=>console.log(r))
            this.toggleChoiceImportModal();
        });
    }
/* //directly foto,,l9dima
    handleDirectlyTakePhoto() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({
                images: [...this.state.images, image]
            });
            this.toggleChoiceImportModal();
        });
    } */

    handleDirectlyTakeVideo() {
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(video => {
            this.setState({
                videos: [...this.state.videos, video
                ]
            });
            this.toggleChoiceImportModal();
        });
    }

    toggleChoiceImportModal() {
        this.setState({ isChoiceImportModalVisible: !this.state.isChoiceImportModalVisible });
    }
    getDate(date) {

        return new Date(parseInt(date)).toString();
    }
    renderAsset(asset, index) {
        return (
            <ListItem key={index} thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: asset.path }} />
                </Left>
                <Body>
                    <Text numberOfLines={1}>{asset.path.substring(asset.path.lastIndexOf('/') + 1)}</Text>
                    <Text note numberOfLines={1}>{this.getDate(asset.modificationDate)} </Text>
                </Body>
                <Right>
                    <Button small onPress={() => this.toggleConfirmModal(index)} transparent>
                        <Text>Delete</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }

    toggleConfirmModal(imageIndex) {
        this.setState({
            isConfirmModalVisible: !this.state.isConfirmModalVisible,
            selectedImage: imageIndex
        });
    }

    removeImage() {
        this.setState({
            isConfirmModalVisible: !this.state.isConfirmModalVisible,
            selectedImage: this.state.images.splice(this.state.selectedImage, 1)
        });
    }

    removeVideo() {
        this.setState({
            isConfirmModalVisible: !this.state.isConfirmModalVisible,
            selectedVideo: this.state.videos.splice(this.state.selectedVideo, 1)
        });
    }

    render() {
        const { type } = this.props.route.params;
        return (
            <Container>
                <Header style={[styles.headerBg]}>
                    <Left>
                        <Button onPress={this.backNavigation.bind(this)} transparent>
                            <Icon style={styles.colorGrey} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={[styles.colorGrey]}>Report incident App</Title>
                    </Body>
                    <Right>
                        <Button
                            style={{ width: 90, justifyContent: 'center' }}
                            onPress={() => {
                                this.backNavigation()
                                Toast.show({
                                    text: "Operation successful!",
                                    buttonText: "Okay",
                                    type: "success"
                                })
                            }
                            }
                        >
                            <Text>Save</Text>
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ flex: 1, padding: 6 }}>
                    <Text style={[styles.textColor]}> easily create any type of online incident
                    enter the basics of what happened ,capture a photo or a video ,and ensure the right people are notified.
                    


                    </Text>
                    <Form style={{ paddingTop: 4 }}>
                        <View style={{ paddingBottom: 4 }}>
                            <Text style={[{ fontWeight: 'bold' }, styles.textColor]}>
                                Description:
                            </Text>
                            <Textarea rowSpan={5} bordered placeholder="Textarea" />
                        </View>
                        <View style={{ paddingBottom: 4 }}>
                            <Text style={[{ fontWeight: 'bold' }, styles.textColor]}>
                                Position :
                            </Text>
                            <View style={{ height: 200 }}>
                                <MapView
                                    style={{ height: 200 }}

                                />
                            </View>
                        </View>
                        <View style={{ paddingBottom: 4 }}>
                            <Text style={[{ fontWeight: 'bold' }, styles.textColor]}>
                                Incident Type :
                            </Text>
                            <Item regular>
                                <Picker selectedValue="gggg">
                                    <Picker.Item label="accident" value="accident" />
                                    <Picker.Item label="flood" value="floof" />
                                    <Picker.Item label="earthquake" value="earthquake" />
                                    <Picker.Item label="fire" value="fire" />

                                </Picker>
                            </Item>
                        </View>
                        <View style={{ paddingBottom: 4 }}>
                            <Text style={[{ fontWeight: 'bold' }, styles.textColor]}>
                                Import {type === 'photo' ? 'photo :' : 'video :'}
                            </Text>
                            <View >
                                <List>
                                    {this.state.videos ? this.state.videos.map((video, index) =>
                                        this.renderAsset(video, index)) : null}
                                    {this.state.images ? this.state.images.map((image, index) =>
                                        this.renderAsset(image, index)) : null}
                                </List>
                                <View style={{ padding: 6, minWidth: 300, justifyContent: 'center' }}>
                                    <Button transparent iconLeft full onPress={this.toggleChoiceImportModal.bind(this)}>
                                        <Icon name='add' />
                                        <Text>add media</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Form>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isChoiceImportModalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Right style={{ position: 'absolute', width: '100%', left: 25, top: -10 }}>
                                <Button rounded style={[styles.textColor, {
                                    paddingLeft: 7,
                                    width: 40,
                                    height: 40,
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }]}
                                    onPress={this.toggleChoiceImportModal.bind(this)}
                                >
                                    <Icon style={{ width: 20, color: '#fff' }} name='close' />
                                </Button>
                            </Right>
                            <Text style={{fontWeight: 'bold',fontSize: 20,fontWeight: '600',color:"#D12000" }}>Please choose an option:</Text>
                            <View style={{ paddingTop: 6 }}>
                                <Button bordered
                                    style={{ width: 200, justifyContent: 'center' }}
                                    onPress={() => {
                                        if (type === 'photo') {
                                            this.handleChooseMultiplePhoto()
                                        } else {
                                            this.handleChooseMultiplevideo()
                                        }
                                    }}
                                >
                                    <Text style={styles.textColor}>Import from Gallery</Text>
                                </Button>
                            </View>
                            <View style={{ paddingTop: 6 }}>
                                <Button bordered
                                    style={{ width: 200, justifyContent: 'center' }}
                                    onPress={() => {
                                        if (type === 'photo') {
                                            this.handleDirectlyTakePhoto()
                                        } else {
                                            this.handleDirectlyTakeVideo()
                                        }
                                    }}
                                >
                                    <Text style={styles.textColor}>
                                        {type === 'photo' ? 'Take a picture' : 'Record a video'}
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.isConfirmModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ justifyContent: 'flex-start', minWidth: '100%' }}>
                                <Text style={styles.textColor}>Confirm Action</Text>
                            </View>
                            <View style={styles.divider}></View>
                            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                                <Text style={styles.textColor}>are you sure you want to remove this asset ?</Text>
                            </View>
                            <View style={{ minWidth: '100%', justifyContent: 'flex-end', flexDirection: 'row' }}>
                                <View style={{ paddingRight: 8 }}>
                                    <Button bordered
                                        style={{ width: 90, justifyContent: 'center' }}
                                        onPress={() => this.toggleConfirmModal(null)}
                                    >
                                        <Text style={styles.textColor}>Cancel</Text>
                                    </Button>
                                </View>
                                <View>
                                    <Button
                                        style={{ width: 90, justifyContent: 'center' }}
                                        onPress={() => {
                                            if (type === 'photo') {
                                                this.removeImage()
                                            } else {
                                                this.removeVideo()
                                            }
                                        }}
                                    >
                                        <Text>Save</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Container>


        );
    }
}
const styles = StyleSheet.create({
    textColor: { },
    divider: {
        borderBottomColor: '#4A5568',
        borderBottomWidth: 2, minWidth: '100%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    container: { flex: 1 },
    headerBg: { backgroundColor: '#F7FAFC' },
    colorGrey: { color: '#4A5568' }
});

