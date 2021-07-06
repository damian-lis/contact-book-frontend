import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import useStyles from './styles.auth';

const AuthContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.wrapper}>{children}</div>
    </Container>
  );
};

export default AuthContainer;
