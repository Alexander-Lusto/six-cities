import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const BACKEND_URL = '';
const REQUEST_TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401,
}

type UnauthorizedCallBack = () => void;
export const createAPI = (onUnathorized: UnauthorizedCallBack): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const {response} = error;
      if (response?.status === HttpCode.Unauthorized) {
        return onUnathorized();
      }

      return Promise.reject(error);
    }
  );

  return api;
};
