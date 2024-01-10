import {
  useState,
  createContext,
  PropsWithChildren,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { User, UserCredential } from 'firebase/auth';

import {
  checkLoginStatus,
  createUser,
  getFirebaseAuth,
  loginRequest,
  signOutUser,
} from './authentication.service';

interface AuthenticationContextType {
  user: User | UserCredential | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, repeatedPassword: string) => void;
  onLogout: () => void;
}

export const AuthenticationContext = createContext<AuthenticationContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
});

export const AuthenticationContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | UserCredential | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getFirebaseAuth();
    checkLoginStatus(setUser, setIsLoading);
  }, []);

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

  const onLogout = async () => {
    setUser(null);
    await signOutUser();
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
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
