import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header';
import ContactForm from 'components/ContactForm';
import ContactTable from 'components/ContactTable';
import { fetchContacts } from 'actions/contact.actions';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const { userInfo } = useSelector((state) => state.userLogin);

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
      <Header userInfo={userInfo} />
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
