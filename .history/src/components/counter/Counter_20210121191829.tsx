import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../../redux/actionCreators'
import { Dispatch } from 'redux';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import BlockIcon from '@material-ui/icons/Block';
import classes from './counter.module.scss'




const Counter=(props:any)=> {
    console.log(classes.Counter);
    

  return (
    <div className={classes.Counter}>
      <Fab onClick={props.incr} color="primary" aria-label="add">
        <ArrowUpwardIcon />
      </Fab>
      <Fab onClick={props.decr} color="primary" aria-label="add">
        <ArrowDownwardIcon />
      </Fab>
      <Badge badgeContent={props.counter} color="secondary">
        <MailIcon />
      </Badge>
      <Fab onClick={props.del} color="primary" aria-label="add">
        <BlockIcon />
      </Fab>
    </div>
  );
}

const mapStateToProps = (state:object) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps=(dispatch: Dispatch) =>{
  return {
    incr: ()=>dispatch(increment()),
    decr: ()=>dispatch(decrement()),
    del: ()=>dispatch(reset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)