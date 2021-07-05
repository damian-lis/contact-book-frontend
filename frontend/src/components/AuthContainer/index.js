import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import useStyles from './styles';

const AuthContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>{children}</div>
    </Container>
  );
};

export default AuthContainer;
