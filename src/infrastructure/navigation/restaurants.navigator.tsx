import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="RestaurantsList" component={RestaurantsScreen} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
