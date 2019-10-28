import { firebaseAuth } from '../firebaseApp';
import { useHistory } from 'react-router';

const useFirebaseAuth = () => {
  const history = useHistory();
  let user = null;
  const userFromLocalStorage = window.localStorage.getItem('user');
  const loggedIn = !!userFromLocalStorage;
  if (userFromLocalStorage) {
    user = JSON.parse(userFromLocalStorage);
  }
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
