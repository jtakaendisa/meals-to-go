import { createStackNavigator } from '@react-navigation/stack';
import RestaurantDetailsScreen from '../../features/restaurants/screens/RestaurantDetailsScreen/RestaurantDetailsScreen';
import RestaurantsScreen from '../../features/restaurants/screens/RestaurantScreen/RestaurantsScreen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="RestaurantsList" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
