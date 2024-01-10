import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})`` as typeof FlatList;
