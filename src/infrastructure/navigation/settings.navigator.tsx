import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../features/settings/screens/SettingsScreen/SettingsScreen';
import FavouritesScreen from '../../features/settings/screens/FavouritesScreen/FavouritesScreen';
import CameraScreen from '../../features/settings/screens/CameraScreen/CameraScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsList"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
