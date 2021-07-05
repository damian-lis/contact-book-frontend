import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import { logout } from 'actions/auth.actions';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <AppBar position="static" className={userInfo ? classes.barFix : classes.bar}>
      <Toolbar>
        {userInfo ? (
          <>
            <Typography variant="h6" className={classes.name}>
              {`Hello, ${userInfo.firstName} ${userInfo.lastName}`}
            </Typography>
            <Button variant="contained" className={classes.button} onClick={handleLogout}>
              Sign Out
            </Button>
          </>
        ) : (
          <Typography variant="h6" className={classes.title}>
            Contact Book
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
