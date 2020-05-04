import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Image,
    Platform,
    TextA
} from "react-native";
import {
    RED, GRAY
} from "../../../assets/styles";

export class TextareaWithTitle extends Component {
    render() {
        return <View style={{ ...this.props.style }}>
            <Text
                style={{ fontSize: 11, color: GRAY, fontFamily: 'SanFranciscoDisplay-Regular', lineHeight: 17, textTransform: 'uppercase' }}
            >{this.props.labelText}</Text>
            <TextInput
                value={this.props.value || ''}
                secureTextEntry={this.props.secureTextEntry || false}
                keyboardType={this.props.keyboardType || "default"}
                onChangeText={this.props.onChangeText}
                placeholder={this.props.placeholder}
                placeholderTextColor='#333333'
                underlineColorAndroid="transparent"
                style={{
                    fontFamily: 'SanFranciscoDisplay-Semibold', fontSize: 17, borderBottomColor: RED, borderBottomWidth: 1, marginTop: 5,
                    paddingTop: 5, paddingBottom: 5, height: 100
                }}
            ></TextInput>
        </View>
    }

}