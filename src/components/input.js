import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import SubmitPost from './submitPost';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  field: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flexGrow: 1,
    marginRight: theme.spacing(1)
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}));

const Input = () => {
  const cls = useStyles();
  const [values, setValues] = React.useState({
    text: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const clearInput = () => {
    setValues({ ...values, text: "" });
  }

  return (
    <Paper className={cls.paper}>
      <form onSubmit={(e) => e.preventDefault()} className={cls.field}>
        <TextField
          id="text-input"
          value={values.text}
          onChange={handleChange("text")}
          className={cls.input}
          placeholder=">>>"
        />
        <SubmitPost text={values.text} clearInput={clearInput}/>
      </form>
    </Paper>
  );
};

export default Input;

