import { useState } from 'react';
import { Searchbar as PaperSearchBar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <PaperSearchBar
      placeholder="Search..."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
