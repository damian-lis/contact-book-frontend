import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsForm from 'components/ContactsForm';
import ContactsTable from 'components/ContactsTable';
import { fetchContacts } from 'actions/contacts.actions';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactsForm />
      <ContactsTable />
    </div>
  );
};

export default Contacts;
