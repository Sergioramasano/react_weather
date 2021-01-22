import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import "./counter.scss";

export const Counter=()=>{
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
      const classes = useStyles();

    return(
        <div className="counter">
            <Badge badgeContent={4} color="primary">
            <MailIcon />
            </Badge>
        </div>
    )
}