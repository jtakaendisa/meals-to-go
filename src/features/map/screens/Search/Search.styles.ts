import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.customTheme.space[3]};
  justify-content: center;
  width: 100%;
  position: absolute;
  top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : '40px'};
  z-index: 999;
`;
