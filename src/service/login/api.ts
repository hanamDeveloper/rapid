import { setCookie } from "../../utils/cookie";
import { API } from "../service";
import { LoginType } from "./model";

export const getAccessToken = async (params: LoginType) => {
    const response = await API.post("/auth/login", params);
    setCookie("AccessToken", response.data.access_token, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
    // eslint-disable-next-line no-restricted-globals
    location.replace('/');
};
