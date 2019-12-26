import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Moment from "react-moment";

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "90%",
    height:'100%',
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    height: '4.5vh',
    width: '4.5vh',
  },
}));

const Chat = ({params}) => {
  const c = params;
  //console.log('⚽', c)
  const cls = useStyles();

  if (!c) return ( <Paper className={cls.main}></Paper>)
  return (
    <Paper className={cls.main} key={c._id}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar className={cls.avatar} src='images/avatars/chatBot.png' />
        </Grid>
        <Grid item xs={12} sm container direction="column" justify="center" >
          <div>
            {c.text}
          </div>
          <div>
            {c.index}
          </div>
          <div>
            UpdatedAt: <Moment format="D MMM YYYY" unix>{c.createdAt/1000}</Moment> 
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
};

export default Chat;