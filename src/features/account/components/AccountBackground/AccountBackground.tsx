import { ReactNode } from 'react';
import { AccountImageBackground, AccountCover } from './AccountBackground.styles';

interface Props {
  children: ReactNode;
}

const AccountBackground = ({ children }: Props) => {
  return (
    <AccountImageBackground
      source={require('../../../../../assets/home-bg.jpg')}
      resizeMode="cover"
    >
      <AccountCover />
      {children}
    </AccountImageBackground>
  );
};

export default AccountBackground;
