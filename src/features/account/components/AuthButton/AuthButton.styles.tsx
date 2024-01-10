import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors } from '../../../../infrastructure/theme/colors';

export const AuthButton = styled(Button).attrs({
  mode: 'contained',
  buttonColor: colors.brand.primary,
  contentStyle: {
    padding: 8,
  },
})`
  border-radius: 8px;
`;
