import { AsyncStorage } from "react-native";
import { CACHE_VERSION } from "./config"

export const saveUserLogin = async user => {
  await AsyncStorage.setItem(`user-${CACHE_VERSION}`, JSON.stringify(user));
  return;
};

export const getUserLogin = async () => {
  let str = await AsyncStorage.getItem(`user-${CACHE_VERSION}`);
  if (str == null || str == "") {
    return null;
  }
  return JSON.parse(str);
};

export const removeUserLogin = async () => {
  await AsyncStorage.removeItem(`user-${CACHE_VERSION}`);
};