import axios from 'axios';

import {
  CONTACT_CREATE,
  CONTACT_FETCH_ALL,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_UPDATE
} from 'constants/contact.constants';

export const createContact = (form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.post('/contact', form, config);

    dispatch({ type: CONTACT_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchContacts = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.get('/contact', config);

    dispatch({ type: CONTACT_FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await axios.delete(`/contact/${id}`, config);

    dispatch({ type: CONTACT_DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContacts = (ids) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    await axios.post(`/contact/delete`, ids, config);

    dispatch({ type: CONTACT_DELETE_ALL, payload: ids });
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = (id, form) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.put(`/contact/${id}`, form, config);

    console.log(data);
    dispatch({ type: CONTACT_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
