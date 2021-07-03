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
import Alert from '@material-ui/lab/Alert';
import { createContact, updateContact } from 'actions/contact.actions';

const useStyles = makeStyles(() => ({
  file: {
    marginTop: '15px'
  }
}));

const ContactForm = ({
  open,
  handleClose,
  currentId,
  setCurrentId,
  editVariant,
  setEditVariant,
  setLoader
}) => {
  const initialState = {
    name: '',
    email: '',
    phoneNo1: '',
    address: '',
    selectedImage: 'images/smile.svg'
  };

  const [contactData, setContactData] = useState(initialState);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  const clearData = () => {
    setContactData(initialState);
    setCurrentId(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValidationRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (contactData.name === '' || contactData.name.length < 2) {
      setInvalidName(true);
    }

    if (contactData.phoneNo1 === '' || contactData.phoneNo1.length < 2) {
      setInvalidPhone(true);
    }

    if (contactData.address === '' || contactData.address.length < 2) {
      setInvalidAddress(true);
    }

    if (
      contactData.email === '' ||
      !emailValidationRegexp.test(String(contactData.email).toLowerCase())
    ) {
      return setInvalidEmail(true);
    }

    if (
      contactData.name === '' ||
      contactData.email === '' ||
      contactData.phone === '' ||
      contactData.address === ''
    ) {
      return;
    }

    handleClose();
    currentId === 0
      ? dispatch(createContact(contactData))
      : dispatch(updateContact(currentId, contactData));

    clearData();
    setLoader(true);
    setFormSubmit(true);
  };

  const contactDetails = useSelector((state) =>
    currentId ? state.contacts.find((contact) => contact._id === currentId) : null
  );

  useEffect(() => {
    contactDetails && setContactData(contactDetails);
  }, [contactDetails]);

  return (
    <>
      <Dialog
        style={{ margin: '-20px' }}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle style={{ textAlign: 'center' }} id="form-dialog-title">
          Contact Details
        </DialogTitle>
        <DialogContent style={{ overflow: 'hidden' }}>
          <DialogContentText style={{ textAlign: 'center' }}>
            {`To ${currentId === 0 ? 'add' : 'update'} your contact details from here`}
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Good Name"
            type="text"
            fullWidth
            required
            value={contactData.name}
            helperText={invalidName && 'Incorrect name.'}
            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
            onFocus={() => setInvalidName(false)}
            error={invalidName ? true : false}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={contactData.email}
            helperText={invalidEmail && 'Incorrect email.'}
            error={invalidEmail ? true : false}
            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
            onFocus={() => setInvalidEmail(false)}
          />
          <TextField
            margin="dense"
            id="phn1"
            label="Phone Number"
            type="number"
            fullWidth
            value={contactData.phoneNo1}
            helperText={invalidPhone && 'Incorrect phone.'}
            error={invalidPhone ? true : false}
            onChange={(e) => setContactData({ ...contactData, phoneNo1: e.target.value })}
            onFocus={() => setInvalidPhone(false)}
          />
          <TextField
            margin="dense"
            id="address"
            label="Your Address"
            type="text"
            fullWidth
            value={contactData.address}
            helperText={invalidAddress && 'Incorrect address.'}
            error={invalidAddress ? true : false}
            onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
            onFocus={() => setInvalidAddress(false)}
          />
          <div className={classes.file}>
            <FileBase
              de
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setContactData({ ...contactData, selectedImage: base64 });
                console.log(setContactData({ ...contactData, selectedImage: base64 }));
              }}
            />
          </div>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center', margin: '15px 0' }}>
          <Button
            style={{ marginRight: '5px' }}
            variant="contained"
            color="secondary"
            onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {`${currentId === 0 ? 'Add' : 'Update'} Contact`}
          </Button>
        </DialogActions>
      </Dialog>
      {formSubmit && (
        <Alert
          action={
            <Button
              onClick={() => {
                setFormSubmit(false);
                setEditVariant(false);
              }}
              color="inherit"
              size="small">
              X
            </Button>
          }
          severity="success">
          {editVariant ? 'Contact updated!' : 'New contact added!'}
        </Alert>
      )}
    </>
  );
};

export default ContactForm;
