import { useContext, useState } from 'react';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import RestaurantList from '../../../../components/RestaurantList/RestaurantList';
import { SafeArea } from '../../../../components/SafeArea/SafeArea';
import FavouritesBar from '../../../../components/favourites/FavouritesBar/FavouritesBar';
import { colors } from '../../../../infrastructure/theme/colors';
import { FavouritesContext } from '../../../../services/favourites/favourites.context';
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';
import Search from '../../components/Search/Search';
import FadeInView from '../../../../components/animations/FadeIn/FadeIn';

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  if (isLoading || error) {
    return (
      <SafeArea style={{ alignItems: 'center', justifyContent: 'center' }}>
        {isLoading && <ActivityIndicator color={colors.ui.error} size="large" />}
        {error && <Text>{error}</Text>}
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled((prev) => !prev)}
      />
      {isToggled && <FavouritesBar favourites={favourites} />}
      <FadeInView>
        <RestaurantList data={restaurants} />
      </FadeInView>
    </SafeArea>
  );
};

export default RestaurantsScreen;
