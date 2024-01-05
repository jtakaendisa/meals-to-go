import { useContext, useEffect, useState } from 'react';

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
      <SearchBar
        icon="heart"
        onIconPress={() => null}
        placeholder="Search..."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSearch={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};

export default Search;
