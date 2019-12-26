import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Button from '@material-ui/core/Button';
import { POSTS } from './feed';

const ADD_POST = gql`
  mutation addPost($text: String) {
    addPost(text: $text ) {
      _id
      text
      tags
      userId
      createdAt
      index
    }
  }
`;

export default function SubmitPost({ text }) {
  const [submitPost, { data }] = useMutation(
    ADD_POST,
    {
      variables: { text },
      refetchQueries: [{
        query: POSTS,
      }],
      // update(cache) {
      //   cache.writeData({ data: { cartItems: [] } });
      // }
    }
  );
    
  console.log('data', data)

  return data && data.getAllPosts && !data.getAllPosts.success
    ? <p data-testid="post">{data.getAllPosts.text}</p>
    : (
      <Button variant="contained" color="primary" onClick={submitPost} data-testid="post-button">
        Submit
      </Button>
    );
}
