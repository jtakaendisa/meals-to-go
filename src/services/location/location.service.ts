import { locations } from './location.mock';

export type SearchTerm = keyof typeof locations;
type Location = (typeof locations)[SearchTerm];

export const locationRequest = (searchTerm: SearchTerm): Promise<Location> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      reject('not found');
    }

    resolve(locationMock);
  });
};

export const locationTransform = (location: Location) => {
  const {
    geometry: {
      location: { lat, lng },
    },
  } = location.results[0];

  return { lat, lng };
};
