import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components/native';

export const SettingsItem = styled(List.Item)`
  padding: 16px;
`;

export const UserIcon = styled(Avatar.Icon)`
  background-color: #2182bd;
`;

export const UserImage = styled(Avatar.Image)`
  background-color: #2182bd;
`;

export const UserDetailsContainer = styled.View`
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;
