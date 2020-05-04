import { NetInfo } from "react-native";

export const ListenInternet = function(callback) {
  function handleFirstConnectivityChange(isConnected) {
    callback(isConnected);
  }

  NetInfo.isConnected.fetch().then(isConnected => {
    if (isConnected) {
      callback(isConnected);
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        handleFirstConnectivityChange
      );
    } else {
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        handleFirstConnectivityChange
      );
    }
  });
};
