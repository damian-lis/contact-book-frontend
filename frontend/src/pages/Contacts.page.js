import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'actions/contacts.actions';
import { Form, Table } from 'components/Contacts';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form />
      <Table />
    </div>
  );
};

export default Contacts;
