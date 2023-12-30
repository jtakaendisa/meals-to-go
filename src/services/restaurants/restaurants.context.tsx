import { useState, createContext, useEffect, useMemo, PropsWithChildren } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

interface Photo {
  width: number;
  height: number;
  html_attributions: string[];
  photo_reference: string;
}

export interface Restaurant {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  icon: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: Photo[];
  rating: number;
  user_ratings_total: number;
  vicinity: string;
  isClosedTemporarily: boolean;
  isOpenNow: boolean;
}

export interface FetchRestaurantsResponse {
  html_attributions: [];
  next_page_token: string;
  results: Restaurant[];
}

interface RestaurantsContextType {
  restaurants: Restaurant[];
  isLoading: boolean;
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  isLoading: false,
});

export const RestaurantsContextProvider = ({ children }: PropsWithChildren) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    restaurantsRequest()
      .then(restaurantsTransform)
      .then((restaurants) => {
        setRestaurants(restaurants);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
