import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Login from './login';
import SingUp from './sing-up';

type Style = {
    root: string
}

const useStyles: () => Style = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
  },
}));

function Auth(): React.ReactElement {
  const classes: Style = useStyles();
  const { path }: { path: string, } = useRouteMatch();
  console.log(path);
  return (
    <div className={classes.root}>
      {path === '/login' ? <Login /> : <SingUp />}
    </div>
  );
}

export default Auth;
