import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    Image, Text
} from "react-native";
import {
    IcTabActive
} from "../../../assets/images";

export class Tab extends Component {
    constructor(props) {
        super(props);

        let tabs = this.props.tabs || [{ text: 'A', value: 'a', active: true }, { text: 'B', value: 'b', active: false }];
        let hastabActive = false;
        this.tabActive = null;
        tabs.forEach(tab => {
            if (hastabActive && tab.active) {
                tab.active = false;
            } else if (tab.active) {
                hastabActive = true;
                this.tabActive = tab;
            }
        })

        if (!hastabActive) {
            tabs[0].active = true;
            this.tabActive = tabs[0];
        }

        this.state = {
            value: this.props.value || '',
        }
    }

    componentDidMount() {
        this.props.onChange(this.tabActive);
    }

    renderTab() {
        let tabs = this.props.tabs || [{ text: 'A', value: 'a', active: true }, { text: 'B', value: 'b', active: false }]
        let hastabActive = false;
        tabs.forEach(tab => {
            if (hastabActive && tab.active) {
                tab.active = false;
            } else if (tab.active) {
                hastabActive = true;
            }
        })

        if (!hastabActive) {
            tabs[0].active = true;
        }

        return tabs.map((tab, index) => {
            return <TouchableOpacity key={tab.text + index + 'tab-item'} style={{ flex: 1, alignItems: 'center' }} disabled={tab.active}
                onPress={async () => {
                    tabs.forEach((tab, i) => {
                        tab.active = (index == i);
                    });

                    this.props.context.setState({ tabs })
                    this.props.onChange(tab, index);
                }}>
                <Text style={{
                    fontFamily: 'SanFranciscoDisplay-Bold',
                    fontSize: 13,
                    color: '#333333',
                    letterSpacing: 0,
                    textAlign: 'center',
                    lineHeight: 18,
                    marginTop: 12,
                    marginBottom: 12
                }}>{tab.text}</Text>
                {tab.active ? <Image source={IcTabActive} style={{ width: 40, height: 3, resizeMode: 'contain' }} /> : null}
            </TouchableOpacity>
        })
    }

    render() {
        return <View style={{ ...this.props.style, flexDirection: 'row', backgroundColor: '#fff' }}>
            {this.renderTab()}
        </View>
    }

}