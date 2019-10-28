import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Dashboard from './containers/Dashboard/Dashboard';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import useFirebaseAuth from './hooks/useFirebaseAuth';

interface ProtectedRouteProps extends RouteProps {
  loggedIn: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  loggedIn,
  ...props
}) => (loggedIn ? <Route {...props} /> : <Redirect to="/" />);

const App: React.FC = () => {
  const { loggedIn } = useFirebaseAuth();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute
        loggedIn={loggedIn}
        exact
        path="/dashboard"
        component={Dashboard}
      />
    </Switch>
  );
};

export default App;
