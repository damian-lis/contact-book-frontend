import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from 'actions/auth.actions';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem'
  },
  name: {
    textAlign: 'left',
    [theme.breakpoints.down(550)]: {
      fontSize: '16px'
    }
  },
  bar: {
    marginBottom: '20px'
  },

  barFix: {
    width: '100vw',
    marginTop: '-8px',
    marginBottom: '20px',
    marginLeft: '-8px'
  },

  button: {
    marginLeft: 'auto',
    [theme.breakpoints.down(550)]: {
      fontSize: '12px',
      padding: '3px 5px'
    }
  }
}));

const Header = ({ userInfo, success }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <AppBar
        position="static"
        className={success !== undefined && success !== false ? classes.barFix : classes.bar}>
        <Toolbar>
          {success !== undefined && success !== false ? (
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
    </div>
  );
};

export default Header;
