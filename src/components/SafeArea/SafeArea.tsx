import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};
  background-color: ${({ theme }) => theme.customTheme.colors.bg.primary};
`;
