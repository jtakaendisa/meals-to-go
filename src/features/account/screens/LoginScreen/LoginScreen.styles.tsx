import styled from 'styled-components/native';

export const FormContainer = styled.View`
  width: 360px;
  margin-bottom: ${({ theme }) => theme.customTheme.space[3]};
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.customTheme.colors.text.error};
  font-family: ${({ theme }) => theme.customTheme.fonts.body};
`;
