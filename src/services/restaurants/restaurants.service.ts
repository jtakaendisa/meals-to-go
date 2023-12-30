import { mocks } from './mock';
import { FetchRestaurantsResponse } from './restaurants.context';

export const restaurantsRequest = (
  location: keyof typeof mocks = '37.7749295,-122.4194155'
) =>
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
  const restaurants = value.results.map((restaurant) => ({
    ...restaurant,
    isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
  }));

  return restaurants;
};
