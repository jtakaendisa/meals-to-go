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

const App = () => {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <ExpoStatusBar />
    </>
  );
};

export default App;
