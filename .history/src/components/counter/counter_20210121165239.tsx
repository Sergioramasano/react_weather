import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import "./counter.scss";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export const Counter=()=>{
    
      const classes = useStyles();

    return(
        <div className={classes.root}>
            <Badge badgeContent={4} color="primary">
            <MailIcon />
            </Badge>
        </div>
    )
}