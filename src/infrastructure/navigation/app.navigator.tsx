import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MapScreen from '../../features/map/screens/MapScreen';
import SettingsScreen from '../../features/settings/screens/SettingsScreen';
import RestaurantsNavigator from './restaurants.navigator';

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName = TAB_ICONS[route.name];

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name={ROUTES.restaurants}
          component={RestaurantsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={ROUTES.map}
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={ROUTES.settings}
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
