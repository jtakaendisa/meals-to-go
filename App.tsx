import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { theme } from './src/infrastructure/theme';
import SettingsScreen from './src/features/settings/screens/SettingsScreen';
import MapScreen from './src/features/map/screens/MapScreen';

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

const App = () => {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
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
            <Tab.Screen name={ROUTES.restaurants} component={RestaurantsScreen} />
            <Tab.Screen name={ROUTES.map} component={MapScreen} />
            <Tab.Screen name={ROUTES.settings} component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
};

export default App;
