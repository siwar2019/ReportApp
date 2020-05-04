import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { showLoading, hideLoading, goBack, baseRequest } from "./actions/actions";
import { NavigationActions, StackActions } from "react-navigation";


export class BaseReduceCompnentClass extends Component { }

export const BaseReduceCompnentRedux = (
  stateCallBack,
  dispatchCallback,
  componentView
) => {
  return connect(
    state => {
      let stateDefault = { mainApp: state.mainApp };
      if (stateCallBack) {
        return stateCallBack(state, stateDefault);
      } else {
        return stateDefault;
      }
    },
    dispatch => {
      let dispatchDefault = {
        goBack: () => {
          dispatch(goBack());
        },
        startLoading: (me1, me2) => {
          dispatch(showLoading(me1, me2));
        },
        stopLoading: () => {
          dispatch(hideLoading());
        },
        goToScreen: (screen) => {
          dispatch(
            NavigationActions.navigate({
              routeName: screen,
              params: {}
            })
          );
        },
        baseRequest: (url, data, showLoading, success, error, showError, showSuccess, method) => {
          dispatch(baseRequest(url, data, showLoading, success, error, showError, showSuccess, method));
        }
      };

      if (dispatchCallback) {
        return dispatchCallback(dispatch, dispatchDefault);
      } else {
        return dispatchDefault;
      }
    }
  )(componentView);
};
