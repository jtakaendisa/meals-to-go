import { Text } from 'react-native-paper';

import { Restaurant } from '../../services/restaurants/restaurants.context';
import { Container, Image, WebViewImage } from './CompactRestaurantInfo.styles';
import { Platform } from 'react-native';

interface Props {
  restaurant: Restaurant;
  isMap?: boolean;
}

const CompactRestaurantInfo = ({ restaurant: { name, photos }, isMap }: Props) => {
  return (
    <Container>
      {Platform.OS === 'android' && isMap ? (
        <WebViewImage source={{ uri: photos[0] }} />
      ) : (
        <Image source={{ uri: photos[0] }} />
      )}
      <Text variant="labelLarge" numberOfLines={3}>
        {name}
      </Text>
    </Container>
  );
};

export default CompactRestaurantInfo;
