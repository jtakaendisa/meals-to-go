import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { AuthenticationContext } from '../authentication/authentication.context';
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
  const { user } = useContext(AuthenticationContext);

  const addToFavourites = (restaurant: Restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = (restaurant: Restaurant) => {
    const filteredFavourites = favourites.filter(
      (favourite) => favourite.place_id != restaurant.place_id
    );

    setFavourites(filteredFavourites);
  };

  const saveFavourites = async (value: Restaurant[], uid: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async (uid: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`favourites-${uid}`);
      if (jsonValue != null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  useEffect(() => {
    if (user && 'uid' in user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && 'uid' in user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
