import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import SubmitPost from './submitPost';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  field: {
    display: 'flex',
    flexDirection: 'column',
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
  const [values, setValues] = useState({text: "", title: "", tag: ""});

  useEffect(() => {
    console.log('effect')
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const clearInput = () => {
    setValues({ ...values, text: "", title: "", tag: "" });
  }

  return (
    <Paper className={cls.paper}>
      <form onSubmit={(e) => e.preventDefault()} className={cls.field}>
      <TextField
          id="title-input"
          value={values.title}
          onChange={handleChange("title")}
          className={cls.input}
          placeholder="Title"
        />
        <TextField
          id="text-input"
          value={values.text}
          onChange={handleChange("text")}
          className={cls.input}
          placeholder="Text"
        />
        <TextField
          id="tag-input"
          value={values.tag}
          onChange={handleChange("tag")}
          className={cls.input}
          placeholder="Tags"
        />
        <SubmitPost text={values.text} title={values.title} tag={values.tag} clearInput={clearInput}/>
      </form>
    </Paper>
  );
};

export default Input;

