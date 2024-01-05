import { useState, createContext, PropsWithChildren, useEffect } from 'react';

import { SearchTerm, locationRequest, locationTransform } from './location.service';

interface Viewport {
  northeast: {
    lat: number;
    lng: number;
  };
  southwest: {
    lat: number;
    lng: number;
  };
}

interface LocationContextType {
  location: { lat: number; lng: number; viewport: Viewport } | null;
  search: (s: SearchTerm) => void;
  keyword: SearchTerm;
  isLoading: boolean;
  error: string | null;
}

export const LocationContext = createContext<LocationContextType>({
  location: {
    lat: 37.7749295,
    lng: -122.4194155,
    viewport: {
      northeast: {
        lat: 37.7750214302915,
        lng: -122.4202089697085,
      },
      southwest: {
        lat: 37.7723234697085,
        lng: -122.4229069302915,
      },
    },
  },
  search: () => {},
  keyword: 'san francisco',
  isLoading: false,
  error: null,
});

export const LocationContextProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState<LocationContextType['location']>(null);
  const [keyword, setKeyword] = useState<SearchTerm>('san francisco');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (searchKeyword: SearchTerm) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      return;
    }

    try {
      const location = await locationRequest(searchKeyword.toLowerCase() as SearchTerm);
      const locationCoords = locationTransform(location);

      setLocation(locationCoords);
      setIsLoading(false);
    } catch (error) {
      if (typeof error === 'string') {
        setError(error);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    search(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        search,
        keyword,
        isLoading,
        error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
