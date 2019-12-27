import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from '@material-ui/core/styles';
import Post from './post';
import Box from '@material-ui/core/Box';

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
    maxHeight: '88vh',
    display: 'flex',
    overflow: "auto",
    flexDirection: 'column-reverse',
    alignItems: 'center',
    //width: 'inherit',
    margin: theme.spacing(1),
  },
}));

export default function Feed() {
  const { loading, error, data } = useQuery(POSTS);
  const cls = useStyles();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box className={cls.paper} xs={12}>
      {data.getAllPosts.map((params) => (
        <Post params={params} key={params._id} className={cls.post}/>
      ))}
    </Box>
  );
}