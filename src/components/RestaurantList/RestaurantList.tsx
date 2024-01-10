import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListRenderItemInfo, TouchableOpacity } from 'react-native';
import RestaurantInfoCard from '../../features/restaurants/components/RestaurantInfoCard/RestaurantInfoCard';
import { Restaurant } from '../../services/restaurants/restaurants.context';
import { RestaurantFlatList } from './RestaurantList.styles';

interface Props {
  data: Restaurant[];
}

const RestaurantList = ({ data }: Props) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

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
    <RestaurantFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

export default RestaurantList;
