import axios from 'axios';
import { API_BASE_URL } from '../config/config';
import { IAxiosService, IHttpServiceConfig } from './interfaces/service';
import qs from 'qs';

class HttpService implements IAxiosService {
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || API_BASE_URL;
  }
  baseUrl?: string | undefined;
  get = (path: string, config?: IHttpServiceConfig) => {
    let queryString;
    const query = config?.query;
    if (query) {
      queryString = qs.stringify(query);
    }
    return axios.get(`${this.baseUrl}${path}${queryString ? `?${queryString}` : ''}`, config?.axiosConfig);
  }

  post = (path: string, data: object, config?: IHttpServiceConfig) => {
    return axios.post(`${this.baseUrl}${path}`, JSON.stringify(data), config?.axiosConfig);
  }

  put = (path: string, data: any, config?: IHttpServiceConfig) => {
    return axios.put(`${this.baseUrl}${path}`, JSON.stringify(data), config?.axiosConfig);
  }

  patch = (path: string, data: any, config?: IHttpServiceConfig) => {
    return axios.patch(`${this.baseUrl}${path}`, JSON.stringify(data), config?.axiosConfig);
  }

  delete = (path: string, config?: IHttpServiceConfig) => {
    return axios.delete(`${this.baseUrl}${path}`, config?.axiosConfig);
  }
}

export default HttpService;
