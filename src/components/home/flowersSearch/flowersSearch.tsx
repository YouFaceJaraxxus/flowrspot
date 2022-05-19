import { useEffect, useState } from 'react';
import IFlowersSearchProps from './flowersSearchProps';
import {
  FlowersSearchInput,
  FlowersSearchItems,
  FlowersSearchSubtitle,
  FlowersSearchTitle,
  FlowersSearchWrapper
} from "./flowersSearchStyle";

const SEARCH_DELAY = 300;
const FlowersSearch = ({
  setSearchInput,
}: IFlowersSearchProps) => {

  const [currentSearchInput, setCurrentSearchInput] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(
      setTimeout(() => {
        setSearchInput(currentSearchInput);
      }, SEARCH_DELAY)
    )

    return () => {
      clearTimeout(searchTimeout);
    }
  }, [currentSearchInput]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchInput(e.target.value);
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
          value={currentSearchInput}
          onChange={handleSearchInputChange}
          fullWidth
          placeholder="Looking for something specific?"
        />
      </FlowersSearchItems>
    </FlowersSearchWrapper>
  )
};

export default FlowersSearch;