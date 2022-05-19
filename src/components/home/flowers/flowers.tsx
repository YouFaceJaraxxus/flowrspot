import { useEffect } from 'react';
import { getFlowersAsync } from '../../../redux/slices/flowersSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store/hooks';
import { selectFlowers } from '../../../redux/store/store';
import {
  FlowersWrapper,
  FlowerDetails,
  FlowerImage,
  FlowerImageWrapper,
  FlowerLatinName,
  FlowerName,
  FlowersGrid,
  FlowersGridItem,
  FlowerSightings
} from './flowersStyle';

const Flowers = () => {
  const dispatch = useAppDispatch();
  const { flowers } = useAppSelector(selectFlowers);

  useEffect(() => {
    dispatch(getFlowersAsync());
  }, []);

  return (
    <FlowersWrapper>
      <FlowersGrid>
        {
          flowers?.map((flower) => (
            <FlowersGridItem key={flower.id}>
              <FlowerImageWrapper>
                <FlowerImage src={flower.profile_picture} alt={flower.profile_picture} />
                <FlowerDetails>
                  <FlowerName>
                    {flower.name}
                  </FlowerName>
                  <FlowerLatinName>
                    {flower.latin_name}
                  </FlowerLatinName>
                  <FlowerSightings>
                    {flower.sightings} sightings
                  </FlowerSightings>
                </FlowerDetails>
              </FlowerImageWrapper>
            </FlowersGridItem>
          ))
        }
      </FlowersGrid>
    </FlowersWrapper>
  )
};

export default Flowers;