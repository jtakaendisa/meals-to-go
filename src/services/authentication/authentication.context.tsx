import { useState, createContext, PropsWithChildren } from 'react';
import { UserCredential } from 'firebase/auth';

import { loginRequest } from './authentication.service';

interface AuthenticationContextType {
  user: UserCredential | null;
  isLoading: boolean;
  error: string | null;
  onLogin: (e: string, p: string) => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  user: null,
  isLoading: false,
  error: null,
  onLogin: () => {},
});

export const AuthenticationContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserCredential | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const user = await loginRequest(email, password);
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    } catch (error) {
      if (typeof error === 'string') {
        setError(error);
      }
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
