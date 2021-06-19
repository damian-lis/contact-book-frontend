import axios from 'axios';

import {
  CONTACT_CREATE,
  CONTACT_FETCH_ALL,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL
} from 'constants/contact.constants';

export const createContact = (form) => async (dispatch) => {
  try {
    const { data } = await axios.post('/contact', form);
    dispatch({ type: CONTACT_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchContacts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/contact');
    dispatch({ type: CONTACT_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/contact/${id}`);
    dispatch({ type: CONTACT_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContacts = (ids) => async (dispatch) => {
  try {
    await axios.post(`/contact/delete`, ids);
    dispatch({ type: CONTACT_DELETE_ALL, payload: ids });
  } catch (error) {
    console.log(error);
  }
};
