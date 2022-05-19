import IFlowersSearchProps from "./flowersSearchProps";
import { FlowersSearchInput, FlowersSearchItems, FlowersSearchSubtitle, FlowersSearchTitle, FlowersSearchWrapper } from "./flowersSearchStyle";

const FlowersSearch = ({
  searchInput,
  setSearchInput,
}: IFlowersSearchProps) => {

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  return (
    <FlowersSearchWrapper>
      <FlowersSearchItems>
        <FlowersSearchTitle>
          Discover flowers around you
        </FlowersSearchTitle>
        <FlowersSearchSubtitle>
          Explore between more than 8.427 sightings
        </FlowersSearchSubtitle>
        <FlowersSearchInput
          value={searchInput}
          onChange={handleSearchInputChange}
          fullWidth
          placeholder="Looking for something specific?"
        />
      </FlowersSearchItems>
    </FlowersSearchWrapper>
  )
};

export default FlowersSearch;