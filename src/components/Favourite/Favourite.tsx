import React, { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { FavouritesContext } from '../../services/favourites/favourites.context';
import { Restaurant } from '../../services/restaurants/restaurants.context';

interface Props {
  restaurant: Restaurant;
}

const FavouriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ restaurant }: Props) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.place_id === restaurant.place_id);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        color={isFavourite ? 'red' : 'white'}
        size={24}
      />
    </FavouriteButton>
  );
};

export default Favourite;
