import { Searchbar as PaperSearchBar } from 'react-native-paper';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (s: any) => void;
  onSearch: (s: any) => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onSearch }: Props) => {
  return (
    <PaperSearchBar
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      onSubmitEditing={() => onSearch(value)}
    />
  );
};

export default SearchBar;
