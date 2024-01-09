import { useState, createContext, PropsWithChildren } from 'react';
import { UserCredential } from 'firebase/auth';

import { createUser, loginRequest } from './authentication.service';

interface AuthenticationContextType {
  user: UserCredential | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, repeatedPassword: string) => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
  onLogin: () => {},
  onRegister: () => {},
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

  const onRegister = async (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError({ name: 'Password Mismatch', message: 'Error: Passwords do not match' });
      setIsLoading(false);
      return;
    }

    const { newUser, error } = await createUser(email, password);
    if (newUser) {
      setUser(newUser);
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
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
