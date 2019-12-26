import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from '@material-ui/core/styles';
import Post from './post';
import Grid from '@material-ui/core/Grid';

export const POSTS = gql`
    {
      getAllPosts {
        _id
        text
        tags
        createdAt
        userId
        index
      }
    }`

const useStyles = makeStyles(theme => ({
  paper: {
    maxHeight: '80vh',
    display: 'flex',
    overflow: "auto",
    flexDirection: 'column-reverse',
    alignItems: 'center',
    hieght: '100vh'
  },
}));

export default function Feed() {
  const { loading, error, data } = useQuery(POSTS);
  const cl = useStyles();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('data', data)

  return (
    <Grid className={cl.paper}>
      {data.getAllPosts.map((params) => (
        <Post params={params} key={params._id}/>
      ))}
    </Grid>
  );
}