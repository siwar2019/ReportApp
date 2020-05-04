import { AsyncStorage } from "react-native";
import {CACHE_VERSION} from "./config"

export const saveToken = async token => {
  await AsyncStorage.setItem(`token-${CACHE_VERSION}`, token);
  return;
};

export const getToken = async () => {
  let str = await AsyncStorage.getItem(`token-${CACHE_VERSION}`);
  if (str == null || str == "") {
    return null;
  }
  return str;
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(`token-${CACHE_VERSION}`);
};
