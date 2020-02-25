import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Button from '@material-ui/core/Button';
import { POSTS } from './feed';

const ADD_POST = gql`
  mutation addPost($text: String, $title: String, $tag: String) {
    addPost(text: $text, title: $title, tag: $tag ) {
      _id
      text
      tag
      userId
      createdAt
      index
    }
  }
`;

export default function SubmitPost({ text, title, tag, clearInput }) {
  // eslint-disable-next-line
  const [submitPost, { data }] = useMutation(
    ADD_POST,
    {
      variables: { text, title, tag },
      refetchQueries: [{
        query: POSTS,
      }],
      onCompleted () {
        clearInput()
      }
    }
  );

  return  (
      <Button  type="submit" variant="contained" color="primary" onClick={submitPost} data-testid="post-button">
        Submit
      </Button>
    );
}


// data && data.getAllPosts && !data.getAllPosts.success
//     ? <p data-testid="post">{data.getAllPosts.text}</p>
//     :

//remove iframe
//remove extension