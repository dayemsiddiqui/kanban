import { useState, useEffect } from 'react';
import { firebaseAuth } from '../firebaseApp';
import { useHistory } from 'react-router-dom';

const useFirebaseAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const history = useHistory();
  const signOut = () => {
    firebaseAuth.signOut();
    history.push('/');
  };
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);
  return {
    user,
    signOut
  };
};

export default useFirebaseAuth;
