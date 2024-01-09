import styled from 'styled-components/native';

export const AccountImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }) => theme.customTheme.space[4]};
  margin-top: ${({ theme }) => theme.customTheme.space[2]};
  gap: ${({ theme }) => theme.customTheme.space[3]};
`;
