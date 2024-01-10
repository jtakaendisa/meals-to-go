import { useContext } from 'react';
import { Text } from 'react-native';
import RestaurantList from '../../../../components/RestaurantList/RestaurantList';
import { FavouritesContext } from '../../../../services/favourites/favourites.context';
import { NoFavouritesContainer } from './FavouritesScreen.styles';

const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);

  if (!favourites.length)
    return (
      <NoFavouritesContainer>
        <Text>No favourites yet</Text>
      </NoFavouritesContainer>
    );

  return <RestaurantList data={favourites} />;
};

export default FavouritesScreen;
