import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image
} from "react-native";
import moment from "moment";
import {
    RED, GRAY
} from "../../../assets/styles";
import { IcDateTimePicker } from "../../../assets/images";
import { currentDateAdded, getDateLocalFormat, currentDateTimeAdded, getDateTimeLocalFormat } from "../../../assets/utils";
import DateTimePicker from "react-native-modal-datetime-picker";

export class DateTimeInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPicker: false,
        }
    }

    componentDidMount() {
        if (this.props.value && this.props.value != '') {
            this.props.onChange(this.props.value);
        }
    }

    convertDateTimeFormat(str) {
        let mode = this.props.mode ? this.props.mode : 'date';
        if (mode == 'date') {
            return getDateLocalFormat(str);
        } else {
            return getDateTimeLocalFormat(str);
        }
    }
    convertDateTimeFormat2(str) {
        let mode = this.props.mode ? this.props.mode : 'date';
        if (mode == 'date') {
            return getDateLocalFormat(str);
        } else {
            let x = getDateTimeLocalFormat(str);
            let date = new Date(x.split(" ")[1]);
            date.setHours(x.split(" ")[0].split(":")[0], x.split(" ")[0].split(":")[1]);
            return date.getTime();
        }
    }

    render() {
        let mode = this.props.mode ? this.props.mode : 'date';
        let deafultvalue = mode == 'date' ? currentDateAdded(0) : currentDateTimeAdded(0);

        let value = (this.props.value && this.props.value != '') ? this.props.value : '';
        let disabled = this.props.disabled || false;

        return <View style={{ ...this.props.style }}>
            {this.props.labelText && this.props.labelText != '' ? <Text
                style={{ fontSize: 11, color: GRAY, fontFamily: 'SanFranciscoDisplay-Regular', lineHeight: 17 }}
            >{this.props.labelText}</Text> : null}
            <TextInput
                editable={false}
                onChangeText={this.props.onChangeText}
                underlineColorAndroid="transparent"
                value={value}
                style={{ fontFamily: 'SanFranciscoDisplay-Semibold', fontSize: 17, borderBottomColor: RED, borderBottomWidth: disabled ? 0 : 1, marginTop: 5, color: '#000', paddingTop: 5, paddingBottom: 5, textAlign: disabled ? 'right' : 'left' }}
            />

            {disabled ? null : <TouchableOpacity disabled={this.props.disabled || false} style={{
                width: 25, height: 25, padding: 7,
                position: 'absolute', zIndex: 1, right: 0, bottom: 10
            }} onPress={() => {
                this.setState({ showPicker: !this.state.showPicker });
            }}>
                <Image source={IcDateTimePicker} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            </TouchableOpacity>}

            {this.state.showPicker ? <DateTimePicker
                mode={this.props.mode ? this.props.mode : 'date'}
                isVisible={this.state.showPicker}
                locale='vi'
                date={new Date(this.convertDateTimeFormat2((value != '') ? value : deafultvalue))}
                onConfirm={(date) => {
                    date = date || new Date(this.convertDateTimeFormat((value != '' && value != undefined && value != 'undefined' && value != 'null') ? value : deafultvalue));
                    let mode = this.props.mode ? this.props.mode : 'date';
                    let format = 'DD/MM/YYYY';
                    if (mode == 'datetime') {
                        format = 'HH:mm, DD/MM/YYYY';
                    }

                    let x = moment(date).format(format);
                    this.props.onChange(x);
                    this.setState({
                        showPicker: false,
                    });
                }}
                onCancel={() => {
                    this.setState({ showPicker: false })
                }}
            /> : null}

        </View>
    }
}