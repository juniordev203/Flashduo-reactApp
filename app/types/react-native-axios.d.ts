declare module 'react-native-axios' {
    import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from 'axios';
  
    const instance: AxiosInstance;
    export default instance;
    export {AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError};
  }