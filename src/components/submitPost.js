import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Button from '@material-ui/core/Button';
import { POSTS } from './feed';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const [submitPost, { loading, error }] = useMutation(
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
    <React.Fragment>
      <Button  type="submit" variant="contained" color="primary" onClick={submitPost} data-testid="post-button">
        {error ? error.message.replace("GraphQL error: ", "") : null}
        {loading && <CircularProgress />}
        Submit
      </Button>
    </React.Fragment>
    );
}


// data && data.getAllPosts && !data.getAllPosts.success
//     ? <p data-testid="post">{data.getAllPosts.text}</p>
//     :

//remove iframe
//remove extension