import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const BACKEND_URL = 'https://jsonplaceholder.typicode.com';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => Promise.reject(error),
  );

  return api;
};
