import { Avatar } from '@mui/material';
import IFlower from '../../../models/flower/flower';
import { useAppSelector } from '../../../redux/store/hooks';
import { selectUser } from '../../../redux/store/store';
import IFlowersProps from './flowersProps';
import {
  FlowersWrapper,
  FlowerDetails,
  FlowerImage,
  FlowerImageWrapper,
  FlowerLatinName,
  FlowerName,
  FlowersGrid,
  FlowersGridItem,
  FlowerSightings,
  FlowerFavoriteStarWrapper,
  FlowerFavoriteStarAvatar
} from './flowersStyle';

const ENABLED_FLOWER_IMG_SRC = './images/flower_star_enabled.png';
const DISABLED_FLOWER_IMG_SRC = './images/flower_star_disabled.png';
const Flowers = ({
  flowers,
  selectedFlower,
  setSelectedFlower,
}: IFlowersProps) => {

  const { isLogged } = useAppSelector(selectUser);

  const isSelectedFlower = (flower: IFlower): boolean => {
    return flower?.id === selectedFlower?.id;
  }

  const getFlowerStarImage = (flower: IFlower): string => {
    return isSelectedFlower(flower) ? ENABLED_FLOWER_IMG_SRC : DISABLED_FLOWER_IMG_SRC;
  }

  const handleFlowerItemClick = (flower: IFlower): void => {
    setSelectedFlower(flower);
  }

  return (
    <FlowersWrapper>
      <FlowersGrid>
        {
          flowers?.map((flower) => (
            <FlowersGridItem key={flower.id} onClick={() => { handleFlowerItemClick(flower) }}>
              <FlowerImageWrapper>
                <FlowerImage src={flower.profile_picture} alt={flower.profile_picture} />
                {isLogged &&
                  (
                    <FlowerFavoriteStarWrapper>
                      <FlowerFavoriteStarAvatar selected={selectedFlower?.id === flower.id}>
                        <img src={getFlowerStarImage(flower)} alt="star" />
                      </FlowerFavoriteStarAvatar>
                    </FlowerFavoriteStarWrapper>
                  )
                }
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