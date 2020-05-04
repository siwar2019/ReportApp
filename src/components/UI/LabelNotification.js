import React, { Component } from "react";
import {
    View,
    Text
} from "react-native";
import {
    findContractColor
} from "../../../assets/utils";

export class LabelNotification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (this.props.class && this.props.class != '') ? <View style={{ ...this.props.style, backgroundColor: findContractColor(this.props.class), padding: 15 }}>
            <Text style={{ textTransform: 'uppercase', fontSize: 11, lineHeight: 15, color: '#fff' }}>Lưu ý</Text>
            <Text style={{ fontSize: 11, lineHeight: 16, marginTop: 8, color: '#fff' }}>
                {this.props.message || ''}
            </Text>
        </View> : null;
    }
}