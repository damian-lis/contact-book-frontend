import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from 'components/ContactForm';
import ContactTable from 'components/ContactTable';
import { fetchContacts } from 'actions/contact.actions';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

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
      <ContactForm
        open={open}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <ContactTable handleOpen={handleOpen} setCurrentId={setCurrentId} />
    </div>
  );
};

export default Contact;
