import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Restaurant } from '../restaurants/restaurants.context';

interface FavouritesContextType {
  favourites: Restaurant[];
  addToFavourites: (r: Restaurant) => void;
  removeFromFavourites: (r: Restaurant) => void;
}

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

export const FavouritesContextProvider = ({ children }: PropsWithChildren) => {
  const [favourites, setFavourites] = useState<Restaurant[]>([]);

  const addToFavourites = (restaurant: Restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = (restaurant: Restaurant) => {
    const filteredFavourites = favourites.filter(
      (favourite) => favourite.place_id != restaurant.place_id
    );

    setFavourites(filteredFavourites);
  };

  const saveFavourites = async (value: Restaurant[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('favourites', jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favourites');
      if (jsonValue != null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
