import { Searchbar as PaperSearchBar } from 'react-native-paper';

interface Props {
  placeholder: string;
  value: string;
  icon?: string;
  onChangeText: (s: any) => void;
  onSearch: (s: any) => void;
}

const SearchBar = ({ placeholder, icon, value, onChangeText, onSearch }: Props) => {
  return (
    <PaperSearchBar
      placeholder={placeholder}
      icon={icon}
      onChangeText={onChangeText}
      value={value}
      onSubmitEditing={() => onSearch(value)}
    />
  );
};

export default SearchBar;
