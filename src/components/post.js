import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Moment from "react-moment";

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    padding: theme.spacing(3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    height: "3vh",
    width: "3vh"
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  gridItem: {
    flexGrow: 0
  }

}));

const Post = ({ params }) => {
  const c = params;
  //console.log('⚽', c)
  const cls = useStyles();

  if (!c) return <Paper className={cls.main}></Paper>;
  return (
    <Paper xs={12} className={cls.main} key={c._id} >
      <Grid item container spacing={2} className={cls.wrap}>
          <Grid item className={cls.header}>
            <Grid item className={cls.gridItem}>
              <Avatar className={cls.avatar} src="images/avatars/chatBot.png" />
            </Grid>
            <Grid item>
              <p>{c.title || 'Post title'}</p>
            </Grid>
            <Typography variant="caption" display="block" gutterBottom>
            <Moment format="HH:MM:SS D MMM YYYY" unix>
              {c.createdAt / 1000}
            </Moment>
            </Typography>
          </Grid>
          <Grid container>
            {c.text}
          </Grid>
          <Grid container justify="flex-end">
              <p>{c.tag || "Tag"}</p>
          </Grid>
      </Grid>
    </Paper>
  );
};

export default Post;
