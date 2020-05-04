import React, { Component } from "react";
import {
    View,
    Text,
    TextInput
} from "react-native";
import {
    RED, GRAY
} from "../../../assets/styles";

export class InputWithTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <View style={{ ...this.props.style }}>
            <Text
                style={{ fontSize: 11, color: this.props.colorLabelText || GRAY, lineHeight: 17, textTransform: 'uppercase' }}
            >{this.props.labelText}</Text>
            <TextInput
                value={this.props.value || ''}
                editable={typeof this.props.editable != 'undefined' ? this.props.editable : true}
                secureTextEntry={this.props.secureTextEntry || false}
                keyboardType={this.props.keyboardType || "default"}
                placeholder={this.props.placeholder}
                placeholderTextColor={this.props.placeholderTextColor || '#333333'}
                underlineColorAndroid="transparent"
                style={{
                    fontSize: 17, borderBottomColor: '#41ac96', borderBottomWidth: 1, marginTop: 5,
                    paddingTop: 5, paddingBottom: 5, color: this.props.color || '#000'
                }}
                onChangeText={(value) => {
                    this.props.onChangeText(value);
                }}
            ></TextInput>
        </View>
    }

}