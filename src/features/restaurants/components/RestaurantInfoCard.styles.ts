import { Card } from 'react-native-paper';
import styled, { withTheme } from 'styled-components/native';

export const RestaurantCard = styled(withTheme(Card))`
  background-color: ${({ theme }) => theme.customTheme.colors.bg.primary};
` as typeof Card;

export const RestaurantCardCover = styled(withTheme(Card.Cover))`
  padding: ${({ theme }) => theme.customTheme.space[3]};
  background-color: ${({ theme }) => theme.customTheme.colors.bg.primary};
  border-radius: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
` as typeof Card.Cover;

export const Title = styled.Text`
  color: ${({ theme }) => theme.customTheme.colors.ui.primary};
  font-family: ${({ theme }) => theme.customTheme.fonts.heading};
  font-size: ${({ theme }) => theme.customTheme.fontSizes.body};
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.customTheme.fonts.body};
  font-size: ${({ theme }) => theme.customTheme.fontSizes.caption};
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.customTheme.space[2]};
  padding-bottom: ${({ theme }) => theme.customTheme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ClosedText = styled.Text`
  color: ${({ theme }) => theme.customTheme.colors.text.error};
  font-family: ${({ theme }) => theme.customTheme.fonts.body};
`;