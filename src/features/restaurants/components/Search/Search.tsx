import { useContext, useEffect, useState } from 'react';

import { LocationContext } from '../../../../services/location/location.context';
import SearchBar from '../../../../components/SearchBar/SearchBar';
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
        placeholder="Search..."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSearch={search}
      />
    </SearchContainer>
  );
};

export default Search;
