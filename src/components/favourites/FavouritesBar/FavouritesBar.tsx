import React from 'react';
import { ScrollView } from 'react-native';
import { Restaurant } from '../../../services/restaurants/restaurants.context';
import CompactRestaurantInfo from '../../CompactRestaurantInfo/CompactRestaurantInfo';
import { FavouritesContainer, FavouriteContainer, Title } from './FavouritesBar.styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  favourites: Restaurant[];
}

const FavouritesBar = ({ favourites }: Props) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  if (!favourites.length) return null;

  return (
    <FavouritesContainer>
      <Title>Favourites</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite) => {
          return (
            <FavouriteContainer
              key={favourite.name}
              onPress={() =>
                navigation.navigate('RestaurantDetails', { restaurant: favourite })
              }
            >
              <CompactRestaurantInfo restaurant={favourite} />
            </FavouriteContainer>
          );
        })}
      </ScrollView>
    </FavouritesContainer>
  );
};

export default FavouritesBar;
