import { mockImages, mocks } from './mock';
import { FetchRestaurantsResponse } from './restaurants.context';

export type LocationString = keyof typeof mocks;

export const restaurantsRequest = (location: LocationString) =>
  new Promise<FetchRestaurantsResponse>((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject('not found');
    }

    setTimeout(() => {
      resolve(mock as unknown as FetchRestaurantsResponse);
    }, 2000);
  });

export const restaurantsTransform = (value: FetchRestaurantsResponse) => {
  const restaurants = value.results.map((restaurant) => {
    const photo = mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];

    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      photos: [photo],
    };
  });

  return restaurants;
};
