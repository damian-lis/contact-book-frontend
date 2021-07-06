import React, { useContext } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles.auth';
import AuthContext from 'contexts/auth.context';

const AuthAvatar = () => {
  const { isSignUp } = useContext(AuthContext.store);
  const classes = useStyles();

  return (
    <div>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {`${isSignUp ? 'Sign Up' : 'Sign In'}`}
      </Typography>
    </div>
  );
};

export default AuthAvatar;
