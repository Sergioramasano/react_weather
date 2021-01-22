import { TextField } from "@material-ui/core";
import React from "react";
import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export const Home = () => {
  return (
    <section className="Home">
      <h1>Home</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </div>
      </form>
    </section>
  );
};
