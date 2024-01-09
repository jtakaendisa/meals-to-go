import { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { AuthenticationContext } from '../../../../services/authentication/authentication.context';
import AccountBackground from '../../components/AccountBackground/AccountBackground';
import { AuthButton } from '../../components/AuthButton/AuthButton.styles';
import { FormContainer } from '../../components/FormContainer/FormContainer.styles';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage.styles';
import { AccountContainer } from '../../components/AccountBackground/AccountBackground.styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Title } from '../../components/Title/Title.styles';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <AccountBackground>
      <Title>User Registration</Title>
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
          <TextInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={setRepeatedPassword}
          />
          <AuthButton
            icon="email"
            onPress={() => onRegister(email, password, repeatedPassword)}
            disabled={isLoading}
          >
            Register
          </AuthButton>
          {error && <ErrorMessage>{error.message.split(': ')[1]}</ErrorMessage>}
        </AccountContainer>
      </FormContainer>
      <AuthButton icon="arrow-left" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};

export default RegisterScreen;
