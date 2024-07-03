import axios from "axios";
import { store } from "../redux-store/store";

const instance = axios.create({
  baseURL: "https://checkyourproject.website/angle-wishes/public/api/v1/auth/",
  timeout: 50000,
});

let accessToken = "";
instance.interceptors.request.use(
  async (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
