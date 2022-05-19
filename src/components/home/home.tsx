import { useEffect } from 'react';
import { getFlowersAsync } from '../../redux/slices/flowersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectFlowers } from '../../redux/store/store';
import Content from '../common/content/content';
import { HomeWrapper } from './homeStyle';

const Home = () => {
  const dispatch = useAppDispatch();
  const { flowers } = useAppSelector(selectFlowers);

  useEffect(() => {
    dispatch(getFlowersAsync());
  }, []);

  return (
    <Content title="Home">
      <HomeWrapper>
        {
          flowers?.map((flower) => (
            <div key={flower.id}>
              {flower.name}
            </div>
          ))
        }
      </HomeWrapper>
    </Content>
  )
};

export default Home;