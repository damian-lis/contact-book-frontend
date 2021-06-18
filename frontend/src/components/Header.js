import React from 'react';

import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ marginTop: '20px' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.name}></Typography>
          <Typography variant="h6" className={classes.title}>
            Contact Book
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
