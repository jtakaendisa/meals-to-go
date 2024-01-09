import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../../features/account/screens/AccountScreen/AccountScreen';
import LoginScreen from '../../features/account/screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../features/account/screens/RegisterScreen/RegisterScreen';

const AccountStack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
