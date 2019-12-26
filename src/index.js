import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  status: {
    danger: 'red',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  , document.getElementById('root'));



const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

client
  .query({
    query: gql`
      {
        getUsers {
          a
        },
        getAllUsers {
          a
        }
        getAllPosts {
          _id
          text
          tags
          createdAt
          userId
          index
        }
      }`
  })
  .then(result => console.log(result));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
