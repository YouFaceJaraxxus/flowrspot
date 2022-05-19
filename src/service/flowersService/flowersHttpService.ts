import { API_BASE_URL } from '../../config/config';
import HttpService from '../httpService';
import { IAxiosService } from '../interfaces/service';
import IFlowersService, { IGetFlowersResponse } from '../interfaces/flowersService';

const FLOWERS_BASE_URL = 'flowers';

class FlowersHttpService implements IFlowersService {
  constructor(baseUrl?: string) {
    this.service = new HttpService(`${baseUrl || API_BASE_URL}${FLOWERS_BASE_URL}`);
  }
  service: IAxiosService;
  getAllFlowers = (): Promise<IGetFlowersResponse> => this.service.get('').then((response) => response.data);
}

const flowersHttpService = new FlowersHttpService();

export {
  flowersHttpService,
};