import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { createContact, updateContact } from 'actions/contact.actions';

const useStyles = makeStyles(() => ({
  file: {
    marginTop: '15px'
  }
}));

const ContactForm = ({ open, handleClose, currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialState = {
    name: '',
    email: '',
    phoneNo1: '',
    phoneNo2: '',
    address: '',
    selectedImage: ''
  };

  const [contactData, setContactData] = useState(initialState);

  const clearData = () => {
    setContactData(initialState);
    setCurrentId(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    currentId === 0
      ? dispatch(createContact(contactData))
      : dispatch(updateContact(currentId, contactData));

    clearData();
  };

  const contactDetails = useSelector((state) =>
    currentId ? state.contacts.find((contact) => contact._id === currentId) : null
  );

  useEffect(() => {
    contactDetails && setContactData(contactDetails);
  }, [contactDetails]);

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Contact Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`To ${currentId === 0 ? 'add' : 'update'} your contact details from here`}
        </DialogContentText>
        <TextField
          margin="dense"
          id="name"
          label="Good Name"
          type="text"
          fullWidth
          value={contactData.name}
          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          value={contactData.email}
          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
        />
        <TextField
          margin="dense"
          id="phn1"
          label="Phone Number"
          type="number"
          fullWidth
          value={contactData.phoneNo1}
          onChange={(e) => setContactData({ ...contactData, phoneNo1: e.target.value })}
        />
        <TextField
          margin="dense"
          id="phn2"
          label="Alternative Phone Number"
          type="number"
          fullWidth
          value={contactData.phoneNo2}
          onChange={(e) => setContactData({ ...contactData, phoneNo2: e.target.value })}
        />
        <TextField
          margin="dense"
          id="address"
          label="Your Address"
          type="text"
          fullWidth
          value={contactData.address}
          onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
        />
        <div className={classes.file}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setContactData({ ...contactData, selectedImage: base64 })}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          {`${currentId === 0 ? 'Add' : 'Update'} Contact`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactForm;
