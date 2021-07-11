import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import {
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
  Button
} from '@material-ui/core';
import { createContact, updateContact } from 'actions/contacts.actions';
import { initialState } from 'data/contacts.data';
import contactValidation from 'helpers/contactValidation.helper';
import useStyles from './styles.contacts';
import ContactsContext from 'contexts/contacts.context';

const ContactsForm = () => {
  const {
    contactData,
    setContactData,
    setFormSubmit,
    open,
    setOpen,
    currentId,
    setCurrentId,
    setShowAlert
  } = useContext(ContactsContext.store);

  const contactDetails = useSelector((state) =>
    currentId ? state.contacts.list.find((contact) => contact._id === currentId) : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  const clearData = () => {
    setContactData(initialState);
    setCurrentId(0);
  };

  const handleButtonClose = () => {
    setOpen(false);
  };

  const handleFieldChange = (e, field) => {
    setContactData({
      ...contactData,
      [field]: e.target.value
    });
  };

  const handleFieldFocus = (fieldName) => {
    setContactData({
      ...contactData,
      ['invalid' + fieldName[0].toUpperCase() + fieldName.substring(1)]: false
    });
  };

  const handleFieldFile = (base64) => {
    setContactData({
      ...contactData,
      selectedImage: base64
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isFormCorrect = contactValidation({
      contactData,
      setContactData
    });

    if (!isFormCorrect) return;

    currentId === 0
      ? dispatch(createContact(contactData))
      : dispatch(updateContact(currentId, contactData));

    handleButtonClose();
    clearData();
    setFormSubmit(true);
    setShowAlert(true);
  };

  useEffect(() => {
    contactDetails && setContactData(contactDetails);
  }, [contactDetails]);

  return (
    <>
      <Dialog maxWidth={'xs'} open={open} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          Contact Details
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText className={classes.dialogContentText}>
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
            error={contactData.invalidName ? true : false}
            helperText={contactData.invalidName && 'Incorrect name.'}
            onChange={(e) => handleFieldChange(e, 'name')}
            onFocus={() => handleFieldFocus('name')}
            onClose={handleButtonClose}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={contactData.email}
            error={contactData.invalidEmail ? true : false}
            helperText={contactData.invalidEmail && 'Incorrect email.'}
            onChange={(e) => handleFieldChange(e, 'email')}
            onFocus={() => handleFieldFocus('email')}
          />
          <TextField
            margin="dense"
            id="phn1"
            label="Phone Number"
            type="number"
            fullWidth
            value={contactData.phoneNumber}
            error={contactData.invalidPhoneNumber ? true : false}
            helperText={contactData.invalidPhoneNumber && 'Incorrect phone number.'}
            onChange={(e) => handleFieldChange(e, 'phoneNumber')}
            onFocus={() => handleFieldFocus('phoneNumber')}
          />
          <TextField
            margin="dense"
            id="address"
            label="Your Address"
            type="text"
            fullWidth
            value={contactData.address}
            error={contactData.invalidAddress ? true : false}
            helperText={contactData.invalidAddress && 'Incorrect address.'}
            onChange={(e) => handleFieldChange(e, 'address')}
            onFocus={() => handleFieldFocus('address')}
          />
          <div className={classes.dialogFile}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => handleFieldFile(base64)}
            />
          </div>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            className={classes.dialogButtonClose}
            variant="contained"
            color="secondary"
            onClick={handleButtonClose}>
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            {`${currentId === 0 ? 'Add' : 'Update'} Contact`}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactsForm;
