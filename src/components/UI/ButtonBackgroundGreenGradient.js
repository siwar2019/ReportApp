import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Image,
    Platform
} from "react-native";
import {
    BtnButtonGreen
} from "../../../assets/images";

export class ButtonBackgroundGreenGradient extends Component {
    render() {
        return <TouchableOpacity style={{
            ...this.props.style, position: 'relative', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
            backgroundColor: '#28a745', borderRadius: 20
        }}
            disabled={this.props.disabled || false}
            onPress={this.props.onPress}>

            <Text
                style={{
                    fontSize: 15,
                    color: '#FFFFFF',
                    letterSpacing: 0,
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >{this.props.text}</Text>
        </TouchableOpacity>
    }
}