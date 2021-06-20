import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from 'actions/auth.actions';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem'
  },
  name: {
    textAlign: 'left'
  }
}));

const Header = ({ userInfo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <AppBar position="static" style={{ marginTop: '20px' }}>
        <Toolbar>
          {userInfo && (
            <Typography variant="h6" className={classes.name}>
              {`Hello, ${userInfo.firstName} ${userInfo.lastName}`}
            </Typography>
          )}
          <Typography variant="h6" className={classes.name}></Typography>
          <Typography variant="h6" className={classes.title}>
            Contact Book
          </Typography>
          {userInfo && (
            <Button variant="contained" style={{ textAlign: 'right' }} onClick={handleLogout}>
              Sign Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
