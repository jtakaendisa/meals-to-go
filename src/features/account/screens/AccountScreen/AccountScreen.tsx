import { ParamListBase, useNavigation } from '@react-navigation/native';
import AccountBackground from '../../components/AccountBackground/AccountBackground';
import { AuthButton } from '../../components/AuthButton/AuthButton.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountContainer } from '../../components/AccountBackground/AccountBackground.styles';
import { Title } from '../../components/Title/Title.styles';
import { useContext } from 'react';
import { AuthenticationContext } from '../../../../services/authentication/authentication.context';
import { ActivityIndicator } from 'react-native-paper';
import { SafeArea } from '../../../../components/SafeArea/SafeArea';
import { colors } from '../../../../infrastructure/theme/colors';
import AnimatedLottieView from 'lottie-react-native';
import { AnimationContainer } from './AccountScreen.styles';

const AccountScreen = () => {
  const { isLoading } = useContext(AuthenticationContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  if (isLoading) {
    return (
      <SafeArea style={{ alignItems: 'center', justifyContent: 'center' }}>
        {isLoading && <ActivityIndicator color={colors.ui.error} size={'large'} />}
      </SafeArea>
    );
  }

  return (
    <AccountBackground>
      <AnimationContainer>
        <AnimatedLottieView
          key="animation"
          resizeMode="cover"
          autoPlay
          loop
          source={require('../../../../../assets/watermelon.json')}
        />
      </AnimationContainer>
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
