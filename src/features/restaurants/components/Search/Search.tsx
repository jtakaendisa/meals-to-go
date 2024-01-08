import { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../../services/location/location.context';
import { SearchContainer } from './Search.styles';

interface Props {
  isFavouritesToggled: boolean;
  onFavouritesToggle: () => void;
}

const Search = ({ isFavouritesToggled, onFavouritesToggle }: Props) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search..."
        value={searchKeyword}
        onChangeText={(text: any) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};

export default Search;
