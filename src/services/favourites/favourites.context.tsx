import { PropsWithChildren, createContext, useState } from 'react';
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

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
