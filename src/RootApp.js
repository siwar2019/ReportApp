import React, { Component } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Image,
  Text,
  BackHandler
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import AppWithNavigationState from "./navigations/index";
import { LoadingIcon, Logo } from "../assets/images";
class RootAppView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);

  }

  componentDidMount() {

  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;    
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        {Platform.OS == "ios" ? (
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <AppWithNavigationState />
          </KeyboardAvoidingView>
        ) : (
            <AppWithNavigationState />
          )}

        {this.props.mainApp.isLoading ? (
          <View
            style={{
              position: "absolute",
              flex: 1,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 9999
            }}
          >
            <TouchableOpacity
              disabled
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "column",
                alignContent: "center",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                height: "100%"
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  justifyContent: 'center',
                  borderColor: '#ccc',
                  borderWidth: 0.4,
                  alignItems: 'center',
                  opacity: 1,
                  position: 'relative'
                }}
              >
                <Image source={LoadingIcon} style={{ width: 90, height: 90, position: 'absolute', resizeMode: 'contain', zIndex: 0 }} />
                <Image source={Logo} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                {this.props.mainApp.messLoading1 != '' ? <Text style={{color: '#fff', fontSize: 12, marginBottom: 5, marginTop: 15, textAlign: 'center'}}>{this.props.mainApp.messLoading1}</Text> : null}
                {this.props.mainApp.messLoading2 != '' ? <Text style={{color: '#fff', fontSize: 12, marginBottom: 20, textAlign: 'center'}}>{this.props.mainApp.messLoading2}</Text> : null}
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

const mainStateToProps = state => ({
  mainApp: state.mainApp,
  nav: state.nav
});

const mainDispatchToProps = dispatch => ({ dispatch: dispatch });
export const RootApp = connect(
  mainStateToProps,
  mainDispatchToProps
)(RootAppView);
