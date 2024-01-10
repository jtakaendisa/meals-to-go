import { Button } from 'react-native-paper';
import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { useContext } from 'react';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button onPress={onLogout}>Log out</Button>
    </SafeArea>
  );
};

export default SettingsScreen;
