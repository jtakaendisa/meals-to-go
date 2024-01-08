import styled from 'styled-components/native';

export const FavouritesContainer = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.customTheme.fonts.body};
  font-size: ${({ theme }) => theme.customTheme.fontSizes.caption};
`;

export const FavouriteContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;
