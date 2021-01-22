import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { Dispatch } from 'redux';


import { connect } from 'react-redux'
import { increment, decrement, reset } from '../../redux/actionCreators'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Counter=(props: any)=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab onClick={props.increment} color="primary" aria-label="add">
        <ArrowUpwardIcon />
      </Fab>
      <Fab onClick={props.decrement} color="primary" aria-label="add">
        <ArrowDownwardIcon />
      </Fab>
      <Badge badgeContent={props.counter} color="secondary">
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

const mapDispatchToProps=(dispatch: Dispatch) =>{{
  return {
    increment: ()=>dispatch({type: 'ADD'}),
    decrement: ()=>dispatch({type: 'DECREASE'}),
    reset: ()=>dispatch({type: 'RESET'}),
  }
}}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)