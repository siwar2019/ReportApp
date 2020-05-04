import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import {RootApp} from '../src/RootApp'
console.disableYellowBox = true;
export default class App2 extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootApp />
            </Provider>
        );
    }
}