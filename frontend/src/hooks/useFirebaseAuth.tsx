import { firebaseAuth } from '../firebaseApp';
import { useHistory } from 'react-router';
import { onSnapshot } from 'mobx-state-tree';
import { userStore } from '../models/stores';
import { UserStoreSnapshot } from '../models/User.model';
import { useState, useEffect } from 'react';

const useFirebaseAuth = () => {
  const history = useHistory();
  const [user, setUser] = useState<UserStoreSnapshot>({
    isAuthenticated: false,
    email: '',
    uid: '',
    displayName: ''
  });
  const userFromLocalStorage = window.localStorage.getItem('user');
  const loggedIn = !!userFromLocalStorage;
  useEffect(() => {
    onSnapshot(userStore, userStore => {
      setUser(userStore);
    });
  }, []);
  const signOut = () => {
    firebaseAuth.signOut();
    window.localStorage.removeItem('user');
    history.push('/');
  };

  return {
    user,
    loggedIn,
    signOut
  };
};

export default useFirebaseAuth;
