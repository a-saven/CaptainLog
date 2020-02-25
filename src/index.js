import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './theme.js';
import Routes from './routes.js';
import { UserContextProvider } from './components/userContext';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';

const client = new ApolloClient({
  uri: 'https://captainlog.herokuapp.com:80/',
  request: (operation) => {
    const token = sessionStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? token : ''
      }
    })
  }
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline/>
      <UserContextProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </UserContextProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
