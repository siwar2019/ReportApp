import { NetInfo } from "react-native";

export const CheckInternet = function(callback) {
  let isReturn = false;
  NetInfo.isConnected.fetch().then(isConnected => {
    if(isConnected){
      isReturn = true;
      callback(isConnected);
    }else{
      function handleFirstConnectivityChange(isConnected) {
        if(!isReturn){
          isReturn = true;
          callback(isConnected);
          NetInfo.isConnected.removeEventListener(
            "connectionChange",
            handleFirstConnectivityChange
          );
        }
      }
    
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        handleFirstConnectivityChange
      );

      let x = setTimeout(()=>{
        if(!isReturn){
          isReturn = true;
          callback(false);
          NetInfo.isConnected.removeEventListener(
            "connectionChange",
            handleFirstConnectivityChange
          );
        }
        clearTimeout(x);
      }, 5000);
    }
  });
}