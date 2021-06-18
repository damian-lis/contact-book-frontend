import React from 'react';
import FileBase from 'react-file-base64';
import { makeStyles } from '@material-ui/core/styles';
import {
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  file: {
    marginTop: '15px'
  }
}));

const ContactForm = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Contact Details</DialogTitle>
      <DialogContent>
        <DialogContentText>To add your contact details from here</DialogContentText>

        <TextField margin="dense" id="name" label="Good Name" type="text" fullWidth value="" />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          value=""
        />
        <TextField margin="dense" id="phn1" label="Phone Number" type="number" fullWidth value="" />
        <TextField
          margin="dense"
          id="phn2"
          label="Alternative Phone Number"
          type="number"
          fullWidth
          value=""
        />
        <TextField
          margin="dense"
          id="address"
          label="Your Address"
          type="text"
          fullWidth
          value=""
        />
        <div className={classes.file}>
          <FileBase type="file" multiple={false} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button color="primary">Add Contact</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactForm;
