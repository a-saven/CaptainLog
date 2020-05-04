import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { POSTS } from './feed';

const options = [
  'Edit',
  'Delete',
];

const ITEM_HEIGHT = 48;

const DELETE_POST = gql`
  mutation deletePost($id: ID) {
    deletePost(id: $id ) 
  }
`;

export default function LongMenu({ id }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [deletePost, { loading, error }] = useMutation(
    DELETE_POST,
    {
      variables:  { id },
      refetchQueries: [{
        query: POSTS,
      }],
      onCompleted () {
        //clearInput()
      }
    }
  );

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    if(option === "Delete") {
      console.log('option', option)
      deletePost();
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {loading && "Loadign"}
        {error && "Error"}
        {options.map(option => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
