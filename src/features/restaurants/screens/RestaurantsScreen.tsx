import SearchBar from '../../../components/SearchBar/SearchBar';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { RestaurantList, SearchContainer } from './RestaurantScreen.styles';

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: '1' },
          { name: '2' },
          { name: '3' },
          { name: '4' },
          { name: '5' },
          { name: '6' },
          { name: '7' },
          { name: '8' },
        ]}
        renderItem={() => <RestaurantInfoCard restaurant={{}} />}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
