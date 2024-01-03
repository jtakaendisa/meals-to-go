import {
  useState,
  createContext,
  useEffect,
  useMemo,
  PropsWithChildren,
  useContext,
} from 'react';

import {
  LocationString,
  restaurantsRequest,
  restaurantsTransform,
} from './restaurants.service';
import { LocationContext } from '../location/location.context';

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
  photos: string[];
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
  error: string | null;
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: PropsWithChildren) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc: LocationString) => {
    setIsLoading(true);
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((restaurants) => {
        setRestaurants(restaurants);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location?.lat},${location?.lng}` as LocationString;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
