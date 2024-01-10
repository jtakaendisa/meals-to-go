import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { User } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import { SafeArea } from '../../../../components/SafeArea/SafeArea';
import { AuthenticationContext } from '../../../../services/authentication/authentication.context';
import {
  SettingsItem,
  UserDetailsContainer,
  UserIcon,
  UserImage,
} from './Settings.styles';

const SettingsScreen = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const { onLogout, user } = useContext(AuthenticationContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useFocusEffect(() => {
    const getProfilePicture = async () => {
      const photoUri = await AsyncStorage.getItem(`${(user as User).uid}-photo`);

      if (photoUri) {
        setPhoto(photoUri);
      }
    };
    getProfilePicture();
  });

  return (
    <SafeArea>
      <UserDetailsContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo ? (
            <UserIcon size={180} icon="human" />
          ) : (
            <UserImage size={180} source={{ uri: photo }} />
          )}
        </TouchableOpacity>
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
