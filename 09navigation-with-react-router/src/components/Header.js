import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

import GAuth from "./GoogleAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3vh",
  },
  title: {
    flexGrow: 1,
  },

  titleLink: {
    textDecoration: "none",
    color: "white",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            AUTH
          </Typography>
          <GAuth />
        </Toolbar>
      </AppBar>
    </div>
  );
};
