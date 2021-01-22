import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { connect } from 'react-redux'
import { increment, decrement, reset } from '../../redux/actionCreators'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Counter=(props: object)=> {
  const classes = useStyles();

  const addNumber =()=> {
    props.increment();
  }

  return (
    <div className={classes.root}>
      <Fab onClick="addNumber()" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
    </div>
  );
}

const mapStateToProps = (state:any) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)