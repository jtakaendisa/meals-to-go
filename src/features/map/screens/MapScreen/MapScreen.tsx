import { useContext, useEffect, useState } from 'react';
import { Callout, Marker } from 'react-native-maps';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CompactRestaurantInfo from '../../../../components/CompactRestaurantInfo/CompactRestaurantInfo';
import { LocationContext } from '../../../../services/location/location.context';
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';
import Search from '../Search/Search';
import { Map } from './MapScreen.styles';

const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    if (!location) return;

    const northEastLat = location.viewport.northeast.lat;
    const southWestLat = location.viewport.southwest.lat;
    const latDelta = northEastLat - southWestLat;

    setLatDelta(latDelta);
  }, [location]);

  if (!location) return null;

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() => navigation.navigate('RestaurantDetails', { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} isMap />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
