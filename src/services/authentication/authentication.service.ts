import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);

let auth: Auth;

export const getFirebaseAuth = () => {
  if (!auth) {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  }
  return auth;
};

export const checkLoginStatus = (
  setUser: (user: User) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
    setIsLoading(false);
  });
};

export const loginRequest = async (email: string, password: string) => {
  let user;
  let error;

  try {
    user = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  } finally {
    return { user, error };
  }
};

export const createUser = async (email: string, password: string) => {
  let newUser;
  let error;
  try {
    newUser = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  } finally {
    return { newUser, error };
  }
};
