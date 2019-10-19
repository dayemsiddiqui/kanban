import React from 'react';
import './App.css';
import Board from './containers/Board/Board';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Board />
    </>
  );
};

export default App;
