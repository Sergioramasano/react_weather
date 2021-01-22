import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Counter=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
    </div>
  );
}

export default Counter;