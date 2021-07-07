import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const Loader = ({ type }) => {
  const classes = useStyles();

  return <CircularProgress className={classes[type]} disableShrink />;
};

export default Loader;
