import { Alert } from 'react-native';

const dontShowMessage = [

];

export default (ServerCallbackHandle = (response, showError = false, showSuccess = false) => {
  return new Promise(resolve => {
    if (dontShowMessage.includes(response.message)) {
      return resolve(response);
    } else {
      if (response.error) {
        if (showError) Alert.alert(
          "Thông báo",
          response.message,
          [{ text: "Đồng ý", onPress: () => { } }], { cancelable: true }
        );
      }else{
        if (showSuccess) Alert.alert(
          "Thông báo",
          response.message,
          [{ text: "Đồng ý", onPress: () => { } }], { cancelable: true }
        );
      }

      return resolve(response);
    }
  });
});
