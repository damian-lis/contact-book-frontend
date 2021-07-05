import React, { createContext, useState } from 'react';
import { initialState } from 'data/contacts.data';

const store = createContext();
const { Provider: ContactsProvider } = store;

function Provider({ children }) {
  const [contactData, setContactData] = useState(initialState);
  const [formSubmit, setFormSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [editVariant, setEditVariant] = useState(false);
  const [loader, setLoader] = useState(false);
  const [deleteContactAlert, setDeleteContactAlert] = useState(false);
  const [deleteContactsAlert, setDeleteContactsAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <ContactsProvider
      value={{
        contactData,
        setContactData,
        formSubmit,
        setFormSubmit,
        open,
        setOpen,
        currentId,
        setCurrentId,
        editVariant,
        setEditVariant,
        loader,
        setLoader,
        deleteContactAlert,
        setDeleteContactAlert,
        deleteContactsAlert,
        setDeleteContactsAlert,
        showAlert,
        setShowAlert
      }}>
      {children}
    </ContactsProvider>
  );
}

const ContactsContext = {
  store,
  Provider
};

export default ContactsContext;
