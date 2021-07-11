import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import { logout } from 'actions/auth.actions';
import AuthContext from 'contexts/auth.context';
import { initialState } from 'data/contacts.data';

const Header = () => {
  const { setIsSignUp, setAuthForm } = useContext(AuthContext.store);
  const { userInfo } = useSelector((state) => state.auth);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthForm(initialState);
    setIsSignUp(false);
    dispatch(logout());
  };

  return (
    <AppBar position="static" className={classes.bar}>
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
          <Link className={classes.titleLink} to="/">
            <Typography className={classes.title} variant="h6">
              CONTACT BOOK
            </Typography>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
