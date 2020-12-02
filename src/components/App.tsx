import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Auth from './auth';

type Style = {
    root: string
}

const useStyles: () => Style = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}));

function App() {
  const classes: Style = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Kaban
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <Link to="/login">
          Login
        </Link>
        <Link to="/singup">
          Sing up
        </Link>

        <Switch>

          <Route path="/login">
            <Auth />
          </Route>

          <Route path="/singup">
            <Auth />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
