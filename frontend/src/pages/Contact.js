import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import ContactForm from 'components/ContactForm';
import ContactTable from 'components/ContactTable';
import { fetchContacts } from 'actions/contact.actions';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ContactForm open={open} handleClose={handleClose} />
      <ContactTable open={open} handleClose={handleClose} handleOpen={handleOpen} />
    </div>
  );
};

export default Contact;
