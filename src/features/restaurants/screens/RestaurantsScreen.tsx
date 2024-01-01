import { useContext } from 'react';

import { Text } from 'react-native';
import { SafeArea } from '../../../components/SafeArea/SafeArea';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { RestaurantList, SearchContainer } from './RestaurantScreen.styles';

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  if (isLoading || error)
    return (
      <SafeArea style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>{error ? error.message : 'Loading...'}</Text>
      </SafeArea>
    );

  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
