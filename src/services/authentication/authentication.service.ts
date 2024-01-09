import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseConfig } from './config';

initializeApp(firebaseConfig);

const auth = getAuth();

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
