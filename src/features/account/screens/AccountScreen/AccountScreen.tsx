import { ParamListBase, useNavigation } from '@react-navigation/native';
import AccountBackground from '../../components/AccountBackground/AccountBackground';
import { AuthButton } from '../../components/AuthButton/AuthButton.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountContainer } from '../../components/AccountBackground/AccountBackground.styles';
import { Title } from '../../components/Title/Title.styles';

const AccountScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <AccountBackground>
      <Title>Meals to Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <AuthButton icon="email" onPress={() => navigation.navigate('Register')}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
