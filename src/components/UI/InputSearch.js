import React, { Component } from "react";
import {
    View,
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
    IcSearch
} from "../../../assets/images";

export class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        }
    }
    render() {
        return <View style={{ ...this.props.style, position: 'relative' }}>
            <TextInput
                value={this.state.value}
                secureTextEntry={this.props.secureTextEntry || false}
                keyboardType={this.props.keyboardType || "default"}
                placeholder={this.props.placeholder}
                placeholderTextColor='#333333'
                underlineColorAndroid="transparent"
                style={{
                    fontSize: 15, marginTop: 5,
                    height: 33,
                    paddingTop: 7, paddingBottom: 7,
                    borderWidth: 1, borderColor: '#ccc', borderRadius: 20,
                    paddingRight: 35, paddingLeft: 10
                }}
                onChangeText={(value) => {
                    this.setState({ value });
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    if (this.props.onSearch) {
                        dismissKeyboard();
                        this.props.onSearch(this.state.value);
                    }
                }}
                style={{ width: 33, height: 33, position: 'absolute', right: 0, top: 5, borderRadius: 16, borderWidth: 2, borderColor: '#ccc', padding: 5}}>
                <Image source={IcSearch} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            </TouchableOpacity>
        </View>
    }

}