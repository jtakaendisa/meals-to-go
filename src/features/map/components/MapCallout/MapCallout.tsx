import { Platform } from 'react-native';
import { Text } from 'react-native-paper';

import { Restaurant } from '../../../../services/restaurants/restaurants.context';
import { CalloutContainer, CalloutImage, CalloutWebView } from './MapCallout.styles';

interface Props {
  restaurant: Restaurant;
}

const MapCallout = ({ restaurant: { photos, name } }: Props) => {
  return (
    <CalloutContainer>
      {Platform.OS === 'android' ? (
        <CalloutWebView source={{ uri: photos[0] }} />
      ) : (
        <CalloutImage source={{ uri: photos[0] }} />
      )}
      <Text variant="labelLarge" numberOfLines={3}>
        {name}
      </Text>
    </CalloutContainer>
  );
};

export default MapCallout;
