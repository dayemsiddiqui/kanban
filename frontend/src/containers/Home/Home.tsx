import React from 'react';
import './Home.css';
import NavBar from '../../components/HomeComponents/NavBar';
import Header from '../../components/HomeComponents/Header';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import { Redirect } from 'react-router';

const Home: React.FC = () => {
  const { loggedIn } = useFirebaseAuth();
  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <>
        <NavBar />
        <Header />
      </>
    );
  }
};

export default Home;
