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
  FlowerSightings
} from './flowersStyle';

const Flowers = ({
  flowers
}: IFlowersProps) => {

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