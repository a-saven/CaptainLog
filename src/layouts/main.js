import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Feed from '../components/feed';

const useStyles = makeStyles(theme => ({
 
}));


const Main = () => {
  const classes = useStyles();

  return (
    <Container>
      <Feed />
    </Container>
  )
}

export default Main;