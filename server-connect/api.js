import { GET, POST, POSTFILE } from "./config";

export const baseRequestAPI = async (method, url, data, showError, showSuccess) => {
  if (method == 'get') {
    return await GET(url, data, showError, showSuccess);
  } else if (method == 'post') {
    return await POST(url, data, showError, showSuccess);
  } else {
    return await POSTFILE(url, data.data, data.files, showError, showSuccess);
  }
}