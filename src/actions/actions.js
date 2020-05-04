import {
  Alert
} from "react-native";
import {
  baseRequestAPI,
  
} from "../../server-connect/api";
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
  SHOW_LOADING,
  HIDE_LAODING,
  
} from "./actionType";
import { NavigationActions, StackActions } from "react-navigation";

export const showLoading = (me1, me2) => async dispatch => {
  dismissKeyboard();
  dispatch(({ type: SHOW_LOADING, payload: null, messLoading1: me1, messLoading2: me2 }))
};
export const hideLoading = () => async dispatch => {
  dismissKeyboard();
  dispatch({ type: HIDE_LAODING, payload: null })
};

export const goBack = () => async dispatch => {
  dispatch(NavigationActions.back());
};

export const baseRequest = (url, data, isShowLoading, success, error, showError, showSuccess, method = 'get') => async dispatch => {
  if (isShowLoading) dispatch(showLoading());
  let response = await baseRequestAPI(method, url, data, showError, showSuccess);
  if (isShowLoading) dispatch(hideLoading())
  if (response.error) {
    if (error) error(response.message);
  } else {
    if (success) success(response.data);
  }
};