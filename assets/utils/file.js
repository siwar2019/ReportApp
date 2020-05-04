import {
    Platform
} from "react-native";
import RNFetchBlob from "rn-fetch-blob";
var RNFS = require("react-native-fs");

import { requestAndroidStorePermission } from "./permission"

export const downloadFile = async function (url, done) {
    let fileNames = url.split("/");
    let fileName = fileNames[fileNames.length - 1];
    if (Platform.OS == "android") {
        let { status, message } = await requestAndroidStorePermission();
        if (status) {
            RNFetchBlob
                .config({
                    path: RNFetchBlob.fs.dirs.DownloadDir + "/" + fileName,
                })
                .fetch('GET', url, {
                    //some headers ..
                })
                .then((res) => {
                    done(
                        true,
                        "file://" + RNFetchBlob.fs.dirs.DownloadDir + "/" + fileName,
                    );
                })
        } else {
            done(
                false,
                message
            );
        }
    } else {
        RNFetchBlob
            .config({
                path: RNFS.DocumentDirectoryPath + "/" + fileName,
            })
            .fetch('GET', url, {
                //some headers ..
            })
            .then((res) => {
                done(
                    true,
                    "file://" + RNFS.DocumentDirectoryPath + "/" + fileName,
                );
            })
    }
}