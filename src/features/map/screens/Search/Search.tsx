import { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../../services/location/location.context';
import { SearchContainer } from './Search.styles';

const Search = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onChangeText={(text: any) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};

export default Search;
