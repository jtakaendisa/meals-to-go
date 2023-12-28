import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors!.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors!.bg.primary};
  border-radius: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Status = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const ClosedText = styled.Text`
  color: ${({ theme }) => theme.colors.text.error};
  font-family: ${({ theme }) => theme.fonts.body};
`;
