import React, { useState } from 'react';
import Header from 'components/Header';
import ContactForm from 'components/ContactForm';
import ContactTable from 'components/ContactTable';

const Index = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <ContactForm open={open} handleClose={handleClose} />
      <ContactTable open={open} handleClose={handleClose} handleOpen={handleOpen} />
    </div>
  );
};

export default Index;
