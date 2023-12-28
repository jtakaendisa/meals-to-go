import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  justify-content: center;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})``;
