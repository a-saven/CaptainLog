import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignUp from './pages/signup';
import Login from './pages/login';
import Main from './layouts/main';

export default function Auth() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/">
            <Main />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}


function PrivateRoute({ children, ...rest }) {

  const token = sessionStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}



