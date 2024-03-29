import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IServiceConfig {
  query?: any;
  limit?: number;
  offset?: number;
  filter?: any;
}

interface IHttpServiceConfig extends IServiceConfig {
  axiosConfig?: AxiosRequestConfig;
}

interface IPagination{
  current_page: number;
  prev_page: number,
  next_page: number,
  total_pages: number
}

interface IMeta{
  pagination: IPagination;
}

interface IAxiosService {
  baseUrl?: string;
  get: (path: string, config?: IHttpServiceConfig) => Promise<AxiosResponse<any>>;
  post: (path: string, data: any, config?: IHttpServiceConfig) => Promise<AxiosResponse<any>>;
  put: (path: string, data: any, config?: IHttpServiceConfig) => Promise<AxiosResponse<any>>;
  patch: (path: string, data: any, config?: IHttpServiceConfig) => Promise<AxiosResponse<any>>;
  delete: (path: string, config?: IHttpServiceConfig) => Promise<AxiosResponse<any>>;
};


export type {
  IAxiosService,
  IServiceConfig,
  IHttpServiceConfig,
  IPagination,
  IMeta,
}