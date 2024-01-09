import { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { AuthenticationContext } from '../../../../services/authentication/authentication.context';
import AccountBackground from '../../components/AccountBackground/AccountBackground';
import { AuthButton } from '../../components/AuthButton/AuthButton.styles';
import { FormContainer } from './LoginScreen.styles';
import { ErrorMessage } from './LoginScreen.styles';
import { AccountContainer } from '../../components/AccountBackground/AccountBackground.styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <AccountBackground>
      <FormContainer>
        <AccountContainer>
          <TextInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <TextInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={setPassword}
          />
          <AuthButton
            icon="lock-open-outline"
            onPress={() => onLogin(email, password)}
            disabled={isLoading}
          >
            Login
          </AuthButton>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </AccountContainer>
      </FormContainer>
      <AuthButton icon="arrow-left" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};

export default LoginScreen;