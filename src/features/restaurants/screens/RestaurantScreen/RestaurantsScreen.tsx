import { useContext } from 'react';
import { ListRenderItemInfo, Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeArea } from '../../../../components/SafeArea/SafeArea';
import { colors } from '../../../../infrastructure/theme/colors';
import {
  Restaurant,
  RestaurantsContext,
} from '../../../../services/restaurants/restaurants.context';
import RestaurantInfoCard from '../../components/RestaurantInfoCard/RestaurantInfoCard';
import Search from '../../components/Search/Search';
import { RestaurantList } from './RestaurantScreen.styles';

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  if (isLoading || error) {
    return (
      <SafeArea style={{ alignItems: 'center', justifyContent: 'center' }}>
        {isLoading && <ActivityIndicator color={colors.ui.error} size={'large'} />}
        {error && <Text>{error}</Text>}
      </SafeArea>
    );
  }

  const renderItem = ({ item }: ListRenderItemInfo<Restaurant>) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
      >
        <RestaurantInfoCard restaurant={item} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeArea>
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
