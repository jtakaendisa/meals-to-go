import { useContext } from 'react';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { colors } from '../../../infrastructure/theme/colors';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import RestaurantInfoCard from '../components/RestaurantInfoCard/RestaurantInfoCard';
import Search from '../components/Search/Search';
import { RestaurantList } from './RestaurantScreen.styles';

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  if (isLoading || error) {
    return (
      <SafeArea style={{ alignItems: 'center', justifyContent: 'center' }}>
        {isLoading && <ActivityIndicator color={colors.ui.error} size={'large'} />}
        {error && <Text>{error}</Text>}
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
