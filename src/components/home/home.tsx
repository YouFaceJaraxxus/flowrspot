import { useEffect, useState } from 'react';
import IFlower from '../../models/flower/flower';
import { getFlowersAsync } from '../../redux/slices/flowersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectFlowers } from '../../redux/store/store';
import Flowers from './flowers/flowers';
import FlowersSearch from './flowersSearch/flowersSearch';
import { HomeWrapper } from './homeStyle';

const Home = () => {
  const dispatch = useAppDispatch();
  const { flowers } = useAppSelector(selectFlowers);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    dispatch(getFlowersAsync());
  }, []);

  const filterFlowers = (flowers: IFlower[]) => {
    if (searchInput && searchInput !== '') {
      return flowers?.filter((flower) => flower.name.toLowerCase().includes(searchInput.toLowerCase()));
    } else return flowers;
  }

  return (
    <HomeWrapper>
      <FlowersSearch setSearchInput={setSearchInput} />
      <Flowers flowers={filterFlowers(flowers)} />
    </HomeWrapper>
  )
};

export default Home;