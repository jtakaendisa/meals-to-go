import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

import { Restaurant } from '../../../../services/restaurants/restaurants.context';
import { Text } from 'react-native-paper';

interface Props {
  restaurant: Restaurant;
}

const CalloutContainer = styled.View`
  padding: ${({ theme }) => theme.customTheme.space[2]};
  max-width: 120px;
  align-items: center;
`;

const CalloutImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CalloutWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

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
