import axios from "axios";
import qs from "qs";

const baseUrl = process.env.baseUrl;

export default {
  submitEmail(email) {
    var config = {
      method: "post",
      url: `https://v1.nocodeapi.com/dealz/google_sheets/PknBzwtdMILuyQcz?tabId=Sheet1`,
      data: [[""], [email]]
    };
    return axios(config);
  },
  uploadImage(image) {
    var data = new FormData();
    data.append('image', image);
    var config = {
      method: 'post',
      url: `${baseUrl}/user/upload`,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    };
    return axios(config)
  },
  register(userData) {
    const data = qs.stringify(userData)
    var config = {
      method: 'post',
      url: `${baseUrl}/user/register`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    return axios(config)
  }
};
