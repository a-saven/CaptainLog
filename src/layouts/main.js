import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Feed from '../components/feed';
import Input from '../components/input';
import AppBar from '../components/appBar';

const useStyles = makeStyles(theme => ({
 
}));


const Main = () => {
  const classes = useStyles();

  return (
    <Container>
      <AppBar />
      <Feed />
      <Input />
    </Container>
  )
}

export default Main;