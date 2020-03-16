import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3,2)
  },
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </div>
  );
}