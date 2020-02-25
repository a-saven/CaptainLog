import React from 'react';
import Container from '@material-ui/core/Container';
import Feed from '../components/feed';
import Input from '../components/input';
import AppBar from '../components/appBar';

const Main = () => {
  return (
    <Container>
      <AppBar />
      <Feed />
      <Input />
    </Container>
  )
}

export default Main;