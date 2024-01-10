import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext } from 'react';
import { List } from 'react-native-paper';
import { SafeArea } from '../../../../components/SafeArea/SafeArea';
import { AuthenticationContext } from '../../../../services/authentication/authentication.context';
import { SettingsItem, UserAvatar, UserDetailsContainer } from './Settings.styles';
import { Text } from 'react-native';
import { User } from 'firebase/auth';

const SettingsScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <SafeArea>
      <UserDetailsContainer>
        <UserAvatar size={180} icon="human" />
        <Text>{(user as User).email}</Text>
      </UserDetailsContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
