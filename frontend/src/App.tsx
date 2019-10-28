import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Dashboard from './containers/Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default App;
