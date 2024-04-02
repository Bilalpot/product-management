import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

import { ExceptionHandler } from "./ExceptionHandler";

// Create an Axios instance with default configuration
const apiInstance: AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
});

// Interceptor for request
apiInstance.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});

// Interceptor for response
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    nProgress.done();
    return response;
  },
  (error: any) => {
    nProgress.done();
    ExceptionHandler(error);
    return Promise.reject(error);
  }
);

// ApiCall function using the Axios instance
export function ApiCall(
  url: string,
  setLoading: ((value: boolean) => void) | null = null,
  method: string = "GET",
  data: any = null
): Promise<any> {
  return apiInstance({
    url,
    method,
    data,
  })
    .then((response: AxiosResponse) => {
      if (setLoading) {
        setLoading(false);
      }
      return response.data;
    })
    .catch((error: any) => {
      if (setLoading) {
        setLoading(false);
      }
      // You can still handle errors here if needed
      // For example, throw an error, log a message, etc.
      // throw new Error(`Unexpected error: ${error.message}`);
    });
}
