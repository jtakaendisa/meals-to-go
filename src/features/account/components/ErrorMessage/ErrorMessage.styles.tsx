import { styled } from 'styled-components/native';

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.customTheme.colors.text.error};
  font-family: ${({ theme }) => theme.customTheme.fonts.body};
  align-self: center;
`;
