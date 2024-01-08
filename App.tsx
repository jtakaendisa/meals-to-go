import 'react-native-gesture-handler';

import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts } from '@expo-google-fonts/oswald';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';

import AppNavigator from './src/infrastructure/navigation/app.navigator';
import { theme } from './src/infrastructure/theme';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { loginRequest } from './src/services/authentication/authentication.service';
import { useEffect, useState } from 'react';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await loginRequest('takaendisajames@gmail.com', 'test123');
      if (user) {
        setIsAuthenticated(true);
        console.log(user);
      }
    };
    fetchUser();
  }, []);

  if (!fontsLoaded || !isAuthenticated) {
    return null;
  }

  return (
    <>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <FavouritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <AppNavigator />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavouritesContextProvider>
          </AuthenticationContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar />
    </>
  );
};

export default App;
