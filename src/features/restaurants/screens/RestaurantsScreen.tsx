import { useContext } from 'react';

import { FlatList, ListRenderItem } from 'react-native';
import { SafeArea } from '../../../components/SafeArea/SafeArea';
import SearchBar from '../../../components/SearchBar/SearchBar';
import {
  Restaurant,
  RestaurantsContext,
} from '../../../services/restaurants/restaurants.context';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { RestaurantList, SearchContainer } from './RestaurantScreen.styles';

const RestaurantsScreen = () => {
  const { restaurants } = useContext(RestaurantsContext);

  const renderItem: ListRenderItem<Restaurant> = ({ item }) => {
    return <RestaurantInfoCard restaurant={item} />;
  };

  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item: Restaurant) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
