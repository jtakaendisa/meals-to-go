import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../../features/map/screens/MapScreen/MapScreen';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import RestaurantsNavigator from './restaurants.navigator';
import SettingsNavigator from './settings.navigator';

const ROUTES = {
  restaurants: 'Restaurants',
  map: 'Map',
  settings: 'Settings',
};

const TAB_ICONS = {
  [ROUTES.restaurants]: 'restaurant',
  [ROUTES.map]: 'ios-map',
  [ROUTES.settings]: 'ios-settings-sharp',
} as const;

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarIcon: ({ color, size }) => {
                const iconName = TAB_ICONS[route.name];

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name={ROUTES.restaurants} component={RestaurantsNavigator} />
            <Tab.Screen name={ROUTES.map} component={MapScreen} />
            <Tab.Screen name={ROUTES.settings} component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
