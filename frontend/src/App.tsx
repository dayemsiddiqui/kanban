import React from 'react';
import './App.css';
import Board from './containers/Board';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


const App: React.FC = () => {
  return (
    <Board />
  );
}

export default App;
