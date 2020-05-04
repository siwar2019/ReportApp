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
    RED, GRAY
} from "../../../assets/styles";

export class InputCount extends Component {
    constructor(props) {
        super(props);
        this.onChangeText = this.props.onChangeText || function (newVal) { }

        this.state = {
            max: this.props.max || 9999999,
            min: this.props.min || 0,
        }
    }

    add() {
        let newVal = Number(this.props.value || 0) + 1
        if (newVal <= this.state.max) {
            this.onChangeText(newVal);
        }
    }

    sub() {
        let newVal = Number(this.props.value || 0) - 1
        if (newVal >= this.state.min) {
            this.onChangeText(newVal);
        }
    }

    checkVal(newVal) {
        newVal = Number(newVal || 0)
        if (newVal >= this.state.min && newVal <= this.state.max) {
            this.onChangeText(newVal);
        }
    }
    render() {
        return <View style={{ ...this.props.style, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity disabled={this.props.disabled || false} onPress={this.sub.bind(this)} style={{ height: '100%', borderWidth: 1, borderTopLeftRadius: 4, borderBottomLeftRadius: 4, borderColor: '#E8E9EE', alignContent: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                <Text
                    style={{ fontSize: 15, color: '#3466e6', fontWeight: 'bold' }}>-</Text>
            </TouchableOpacity>
            <TextInput
                editable={(this.props.disabled != null) ? !this.props.disabled : true}
                keyboardType="numeric"
                onChangeText={this.props.onChangeText}
                placeholderTextColor='#333333'
                underlineColorAndroid="transparent"
                value={this.props.value + '' || '0'}
                onChangeText={this.checkVal.bind(this)}
                style={{
                    flex: 1, borderTopColor: '#E8E9EE', borderTopWidth: 1, borderBottomColor: '#E8E9EE', borderBottomWidth: 1, height: '100%', textAlign: 'center',
                    paddingTop: 0, paddingBottom: 0
                }}
            />
            <TouchableOpacity disabled={this.props.disabled || false} onPress={this.add.bind(this)} style={{ height: '100%', borderWidth: 1, borderTopRightRadius: 4, borderBottomRightRadius: 4, borderColor: '#E8E9EE', alignContent: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                <Text
                    style={{ fontSize: 15, color: '#3466e6', fontWeight: 'bold' }}>+</Text>
            </TouchableOpacity>
        </View>
    }

}