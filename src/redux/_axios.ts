import axios, {  AxiosRequestConfig } from "axios";
import { TStore } from ".";
import {assign} from "lodash";
import Constants from "expo-constants";

const initAxios = (store: TStore) => {
  const handleFormData = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        "Content-Type": "multipart/form-data",
      });
    }
    return config;
  };

  axios.defaults.baseURL = Constants.manifest?.extra?.BASE_URL;
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;
