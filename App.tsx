import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts } from '@expo-google-fonts/oswald';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { PaperProvider } from 'react-native-paper';

import MapScreen from './src/features/map/screens/MapScreen';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import SettingsScreen from './src/features/settings/screens/SettingsScreen';
import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

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
      <PaperProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <RestaurantsContextProvider>
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
          </RestaurantsContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar />
    </>
  );
};

export default App;
