import axios from "axios";
import { getCookie } from "../utils/cookie";


export const API = axios.create({
  baseURL:
    "http://ec2-52-79-228-35.ap-northeast-2.compute.amazonaws.com:8002/api/v1",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${getCookie("AccessToken")}`,
  },
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if(error.response.status === 401) {
      alert("어세스토큰이 만료 되었습니다. 다시 로그인 바랍니다.");
      // eslint-disable-next-line no-restricted-globals
      location.replace('/');
      
    }
    alert(error.response.data.message)
    return error.response;
  }
);
