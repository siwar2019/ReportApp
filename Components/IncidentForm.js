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
    Picker,
    Button,
    Right,
    Header,
    List,
    Thumbnail,
    Body, Title, ListItem
} from "native-base";
import Icon from 'react-native-ionicons';
import Nav from "./Nav";
import { ScrollView, StyleSheet, Modal, TouchableOpacity, Image, TouchableHighlight ,AsyncStorage} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import MapView from 'react-native-maps';
import ReportScreen from './ReportScreen';
import RNFetchBlob from 'rn-fetch-blob'

export default class IncidentForm extends React.Component {


    //pour recuperer la valeur de formulaire  dans la base

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
            mapData: null
        }
        /* this.state = {
             form: {
                 description: null,
                 
             }
         }  */

    }

    setdescription(text) {
        this.setState({
            form: {
                description: text,

            }
        });
    }

    setfileUri(text) {
        this.setState({
            form: {
                fileData: this.state.form.fileData,
                file: this.state.form.filepath,
                fileUri: text,


            }
        });
    }
    backNavigation = () => {
        this.props.navigation.navigate("Incident")
    };

    //saveall to database
    async savedata(props) {

        await AsyncStorage.getItem('mapCoord').then(datax => {

            console.log("onRegionChange: ", datax);
            this.setState({
                mapData: datax
            });
        });


        this.backNavigation()
        let { images, videos } = this.state;
        console.log(images, videos );
        const split_image = images[0].path.split('/');
        const name_image = split_image[split_image.length - 1];
           const split_video = videos[0].path.split('/');
            const name_video = split_video[split_video.length-1]; 
            const token = await AsyncStorage.getItem('token');
        RNFetchBlob.fetch('POST', 'https://f3bb3aa1cb78.ngrok.io/all', {
            'Content-Type': 'multipart/form-data',
            'token': token,
        }, [
           
            // element with property `filename` will be transformed into `file` in form data
            { name: 'image', filename: name_image, data: RNFetchBlob.wrap(images[0].path) },
            { name : 'video', filename : name_video, data : RNFetchBlob.wrap(videos[0].path)}, 
            { name: 'description', data: this.state.form.description },
            { name: 'incident_type', data: this.state.PickerValueHolder },
            { name: 'position', data: this.state.mapData } ,
             
          /*   { name: 'email', data: this.state.email },
            { name: 'password', data: this.state.password }, */
         
        ]
        ).then(console.log)
        /*fetch("http://192.168.43.41:3001/all",{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
         //  "description":this.state.form.description,
         "description" :this.state.form.description,// 
         "incident_type":this.state.PickerValueHolder,
   // "position" :  position.coords.latitude,
           
 
 
         })
        })
        .then(res=>res.json())*/

    }
    handleChooseMultiplePhoto() {


        ImagePicker.openPicker({
            multiple: true,
            width: 100,
            height: 150,
            cropping: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
            includeBase64: true,//image to string

        }).then(images => {
            console.log('Image selected');
            //console.log(images);
            // let data= JSON.parse(images);
            // console.log(JSON.stringify(images))
            const split = images[0].path.split('/');
            const name = split[split.length - 1];
            // console.log(split, name)
            this.setState({
                // images : ''
                images: [...this.state.images, ...images.map(i => {
                    return i
                })]
            });
            /*RNFetchBlob.fetch('POST', 'https://85efff0a59d7.ngrok.io/all', {
             'Content-Type' : 'multipart/form-data',
           }, [
             // element with property `filename` will be transformed into `file` in form data
             { name : 'image', filename : name, data: images[0].data},
           ]
           //
           
         ).then(console.log)*/
            this.toggleChoiceImportModal();

        }).catch(e => this.toggleChoiceImportModal());
    }
    //video from camera 
    handleDirectlyTakeVideo() {
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(video => {
            console.log("directly added video")
            this.setState({

                videos: [...this.state.videos, video
                ]
            });

            this.toggleChoiceImportModal();
        }).catch(e => this.toggleChoiceImportModal());
    }
    // video final
    handleChooseMultiplevideo() {
        ImagePicker.openPicker({
            mediaType: "video",
            width: 100,
            height: 150,
            //cropping: true,
            waitAnimationEnd: false,
            includeExif: true,
            // forceJpg: true,
            includeBase64: true,//image to string
            multiple: true,

        }).then(videos => {
            console.log('Video selected');
            //console.log(images);
            // let data= JSON.parse(images);


            const split = videos[0].path.split('/');
            const name = split[split.length - 1];
            this.setState({


                videos: [...this.state.videos, ...videos.map(i => {
                    return i
                })]
            });
            /*RNFetchBlob.fetch('POST', ' https://85efff0a59d7.ngrok.io/all', {
             'Content-Type' : 'multipart/form-data',
           }, [
             // element with property `filename` will be transformed into `file` in form data
            /*  { name : 'videos', filename : name, data: "RNFetchBlob-file://"+name } */
            /* { name: 'doc', filename: data.fileName, type: data.type, data: RNFetchBlob.wrap(data.path) }, 
            { name: 'videos', filename: name, data: RNFetchBlob.wrap(videos[0].path) }
           ]
         ).then((response) => console.log("video bien transmis",response))*/
            this.toggleChoiceImportModal();
        }).catch(e => this.toggleChoiceImportModal());
    }


    //ahaya fnct :p 
    handleDirectlyTakePhoto() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log("directly added photo")
            console.log(image);
            this.setState({
                images: [...this.state.images, image]
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
                                this.savedata();
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
                            <Text style={[{ fontWeight: 'bold' }, styles.textColor, label = 'description',]}>
                                Description:
                            </Text>
                            <Textarea rowSpan={3} bordered placeholder="Textarea"
                                label='description'
                                //   value={this.state.form.description}
                                onChangeText={(text) => this.setdescription(text)}
                            />

                        </View>


                        <View style={{ paddingBottom: 4 }}>
                            <Text style={[{ fontWeight: 'bold' }, styles.textColor]}>
                                Incident Type :
                            </Text>
                            <Item regular>
                                <Picker selectedValue={this.state.PickerValueHolder}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ PickerValueHolder: itemValue })} >


                                    <Picker.Item label="Accident" value="Accident" />
                                    <Picker.Item label="Flood" value="flood" />
                                    <Picker.Item label="Earthquake" value="earthquake" />
                                    <Picker.Item label="Fire" value="fire" />
                            
                                    <Picker.Item label="Tornadoes" value="Tornadoes" />
                                    <Picker.Item label="Blizzards" value="Blizzards" />


                                </Picker>
                            </Item>
                        </View>
                        <ScrollView>
                            <View style={{ paddingBottom: 4 }}>
                                <Text style={[{ fontWeight: 'bold' }, styles.textColor]}>
                                    Position :
                            </Text>
                                <View style={{ height: 250 }}>
                                    <ReportScreen //ya3n
                                        style={{ height: 70 }}
                                    />
                                </View>
                            </View>
                            <View>


                            </View>
                        </ScrollView>

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
                            <Text style={{ fontWeight: 'bold', fontSize: 20, fontWeight: '600', color: "#D12000" }}>Please choose an option:</Text>
                            <View style={{ paddingTop: 6 }}>
                                <Button bordered
                                    style={{ width: 200, justifyContent: 'center' }}
                                    onPress={() => {
                                        if (type === 'photo') {
                                            this.handleChooseMultiplePhoto();

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
    textColor: {},
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

/* // multiple phot multiple video 9dima,, save json fel base w t7awalha base 64
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
//****************************************new one
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
} */