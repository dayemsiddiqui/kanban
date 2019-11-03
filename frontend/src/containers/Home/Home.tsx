import React from 'react';
import './Home.css';
import NavBar from '../../components/HomeComponents/NavBar';
import Header from '../../components/HomeComponents/Header';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
    </>
  );
};

export default Home;
