import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  card: {
    margin: '10px'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem'
  }
}));

const ContactTable = ({ handleOpen }) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleOpen}>
          Add Contact
        </Button>
      </div>
    </>
  );
};

export default ContactTable;
