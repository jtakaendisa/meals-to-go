import { useState, createContext, PropsWithChildren } from 'react';
import { UserCredential } from 'firebase/auth';

import { loginRequest } from './authentication.service';

interface AuthenticationContextType {
  user: UserCredential | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  onLogin: (email: string, password: string) => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
  onLogin: () => {},
});

export const AuthenticationContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserCredential | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    const { user, error } = await loginRequest(email, password);
    if (user) {
      setUser(user);
    }
    if (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
    setIsLoading(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
