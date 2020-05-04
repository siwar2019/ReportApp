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
    BtnButton
} from "../../../assets/images";

export class ButtonBackgroundRedGradient extends Component {
    render() {
        return <TouchableOpacity style={{
            ...this.props.style, position: 'relative', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
            backgroundColor: '#b2190b', borderRadius: 20
        }}
            disabled={this.props.disabled || false}
            onPress={this.props.onPress}>
            {/* <Image source={BtnButton} style={{ width: '100%', height: '100%', resizeMode: 'stretch', position: 'absolute', zIndex: 0 }} /> */}

            <Text
                style={{
                    fontFamily: "UTM Avo",
                    fontSize: 13,
                    color: '#FFFFFF',
                    letterSpacing: 0,
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}

            >{this.props.text}</Text>
        </TouchableOpacity>
    }
}