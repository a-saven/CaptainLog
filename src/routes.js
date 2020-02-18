import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import SignUp from './pages/signup';
import Login from './pages/login';
import Main from './layouts/main';
import { UserContext } from './components/userContext';

export default function Auth() {
  return (
    <Router>
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

  let { state } = useContext(UserContext);

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



