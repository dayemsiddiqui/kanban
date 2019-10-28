import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyCHxUf_ISt3yrgk__11IAr8Q58TaNs_pNI',
  authDomain: 'elated-bebop-154812.firebaseapp.com',
  projectId: 'elated-bebop-154812',
  messagingSenderId: '68979267479',
  appId: '1:68979267479:web:17731f64e56f67956156d2',
  measurementId: 'G-MXH3WC54Z1'
};
export const firebaseApp = firebase.initializeApp(config);

export const firebaseAuth = firebaseApp.auth();

firebaseAuth.onAuthStateChanged(async user => {
  if (user === null) {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('idToken');
  } else {
    const token = await user.getIdToken(true);
    window.localStorage.setItem('idToken', token);
    window.localStorage.setItem('user', JSON.stringify(user));
  }
});
