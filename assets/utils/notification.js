import { Alert } from "react-native";


export const displayError = function (message, callback) {
    Alert.alert("Lỗi", message, [{ text: "Đồng ý", onPress: callback }], { cancelable: false })
}

export const displaySuccess = function (message, callback) {
    if(!callback) callback = function(){}
    Alert.alert("Thành công", message, [{ text: "Đồng ý", onPress: callback }], { cancelable: false })
}

export const baseConfirm = function (message, accept, reject) {
    Alert.alert("Xác nhận", message, [
        { text: "Đồng ý", onPress: () => { (accept && accept()) } },
        { text: "Huỷ", onPress: () => { (reject && reject()) } }
    ], { cancelable: true })
}
