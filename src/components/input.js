import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import SubmitPost from './submitPost';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    width: '97%',
    margin: theme.spacing(1.5),
    color: theme.palette.primary.main,
  },
  field: {
    display: 'flex',
    direction: 'row',
    margin: theme.spacing(3),
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
    <form onSubmit={(e) => e.preventDefault()}>
    <Paper className={cls.field}>
        <TextField
          id="text-input"
          value={values.text}
          onChange={handleChange("text")}
          className={cls.input}
          placeholder=">>>"
        />
        <SubmitPost text={values.text} clearInput={clearInput}/>
    </Paper>
    </form>
  );
};

export default Input;

