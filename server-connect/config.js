import ServerCallbackHandle from "./server-callback-handle";
import { getToken } from "../assets/cache";
// export const BASE_URL = "http://192.168.1.6:5000";
export const BASE_URL = "http://207.148.69.105:5000";

function getQueryString(params) {
  var esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&");
}

export const GET = async (url, data, showError=false, showSuccess=false) => {
  data = data || {};
  return new Promise(async resolve => {
    let headers = {
      "Content-Type": "application/json"
    };

    let token = await getToken();
    if (token != null) {
      headers['access-token'] = token;
    }

    fetch(`${BASE_URL}${url}?${getQueryString(data)}&output=json`, {
      method: "GET",
      headers: headers
    })
      .then(res => {
        return res.json()
      })
      .then(responseJson => {
        return ServerCallbackHandle(responseJson, showError, showSuccess);
      })
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        return ServerCallbackHandle(
          { error: true, message: "Lỗi kết nối" },
          showError, showSuccess
        );
      })
      .then(responseJson => {
        return resolve(responseJson);
      });
  });
};

export const POST = async (url, data, showError, showSuccess) => {
  data = data || {};
  return new Promise(async resolve => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    let token = await getToken();
    if (token != null) {
      headers['access-token'] = token;
    }

    if (url.includes("?")) {
      url += '&output=json'
    } else {
      url += '?output=json';
    }
    fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(response => {        
        return response.json()
      })
      .then(responseJson => {
        return ServerCallbackHandle(responseJson, showError, showSuccess);
      })
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        return ServerCallbackHandle(
          { error: true, message: "Lỗi kết nối" },
          showError, showSuccess
        );
      })
      .then(responseJson => {
        return resolve(responseJson);
      });
  });
};

export const POSTFILE = async (url, data, files, showError, showSuccess) => {
  data = data || {};
  const formData = new FormData();
  if (data != null) {
    for (let itemData in data) {
      if (typeof data[itemData] == 'object') {
        formData.append(itemData, JSON.stringify(data[itemData]));
      } else {
        formData.append(itemData, data[itemData]);
      }
    }
  }

  if (files != null && files.length > 0) {
    files.forEach(fileData => {
      formData.append(fileData.name, {
        type: fileData.type,
        uri: fileData.uri,
        name: fileData.fileName,
      });
    });
  }

  return new Promise(async resolve => {
    let headers = {
      'Accept': 'application/json',
      'content-type': 'multipart/form-data'
    };

    let token = await getToken();
    if (token != null) {
      headers['access-token'] = token;
    }

    if (url.includes("?")) {
      url += '&output=json'
    } else {
      url += '?output=json';
    }

    fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: headers,
      body: formData
    }).then(response => {
      return response.json()
    })
      .then(responseJson => {
        return ServerCallbackHandle(responseJson, showError, showSuccess);
      })
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        return ServerCallbackHandle(
          { error: true, message: "Lỗi kết nối" },
          showError, showSuccess
        );
      })
      .then(responseJson => {
        return resolve(responseJson);
      });
  });
};
