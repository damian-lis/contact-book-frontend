import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from 'components/ContactForm';
import ContactTable from 'components/ContactTable';
import { fetchContacts } from 'actions/contact.actions';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const [editVariant, setEditVariant] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleOpen = ({ editVariant } = false) => {
    setOpen(true);
    editVariant && setEditVariant(true);
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
        editVariant={editVariant}
        setEditVariant={setEditVariant}
        setLoader={setLoader}
      />
      <ContactTable
        handleOpen={handleOpen}
        setCurrentId={setCurrentId}
        loader={loader}
        setLoader={setLoader}
      />
    </div>
  );
};

export default Contact;
