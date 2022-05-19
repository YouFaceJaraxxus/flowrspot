import IFlower from '../../models/flower/flower';
import { IMeta } from './service';


interface IGetFlowersResponse{
  flowers: IFlower[];
  meta: IMeta;
}

export default interface IFlowersService {
  getAllFlowers: () => Promise<IGetFlowersResponse>;
};


export type {
  IGetFlowersResponse,
}