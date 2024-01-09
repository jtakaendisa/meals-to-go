import { createStackNavigator } from '@react-navigation/stack';
import RestaurantDetailsScreen from '../../features/restaurants/screens/RestaurantDetailsScreen/RestaurantDetailsScreen';
import RestaurantsScreen from '../../features/restaurants/screens/RestaurantScreen/RestaurantsScreen';
import { Restaurant } from '../../services/restaurants/restaurants.context';

export type RootStackParamList = {
  RestaurantsList: undefined;
  RestaurantDetails: {
    restaurant: Restaurant;
  };
};

const RestaurantStack = createStackNavigator<RootStackParamList>();

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
