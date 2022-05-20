import IFlower from '../../../models/flower/flower';

export default interface IFlowersProps{
  flowers: IFlower[];
  selectedFlower: IFlower;
  setSelectedFlower: (flower: IFlower) => void;
}