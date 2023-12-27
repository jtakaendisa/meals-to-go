import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';

const App = () => {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar />
    </>
  );
};

export default App;
