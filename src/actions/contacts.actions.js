import axios from 'axios';

import {
  CONTACT_CREATE,
  CONTACT_FETCH_ALL,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_UPDATE,
  CONTACT_FETCH_ALL_FAIL,
  CONTACT_CREATE_FAIL,
  CONTACT_DELETE_FAIL,
  CONTACT_DELETE_ALL_FAIL,
  CONTACT_UPDATE_FAIL,
  CONTACTS_REQUEST
} from 'constants/contacts.constants';

export const createContact = (form) => async (dispatch, getState) => {
  dispatch({ type: CONTACTS_REQUEST });

  try {
    const {
      auth: { userInfo }
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
    dispatch({ type: CONTACT_CREATE_FAIL, payload: error.response.data.message });
  }
};

export const fetchContacts = () => async (dispatch, getState) => {
  dispatch({ type: CONTACTS_REQUEST });

  try {
    const {
      auth: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.get('/contact', config);

    dispatch({ type: CONTACT_FETCH_ALL, payload: data });
  } catch (error) {
    dispatch({ type: CONTACT_FETCH_ALL_FAIL, payload: error.response.data.message });
  }
};

export const deleteContact = (id) => async (dispatch, getState) => {
  dispatch({ type: CONTACTS_REQUEST });

  try {
    const {
      auth: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.delete(`/contact/${id}`, config);

    dispatch({ type: CONTACT_DELETE, payload: { id, message: data.message } });
  } catch (error) {
    dispatch({ type: CONTACT_DELETE_FAIL, payload: error.response.data.message });
  }
};

export const deleteContacts = (ids) => async (dispatch, getState) => {
  dispatch({ type: CONTACTS_REQUEST });

  try {
    const {
      auth: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.post(`/contact/delete`, ids, config);

    dispatch({ type: CONTACT_DELETE_ALL, payload: { ids, message: data.message } });
  } catch (error) {
    dispatch({ type: CONTACT_DELETE_ALL_FAIL, payload: error.response.data.message });
  }
};

export const updateContact = (id, form) => async (dispatch, getState) => {
  dispatch({ type: CONTACTS_REQUEST });

  try {
    const {
      auth: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.put(`/contact/${id}`, form, config);

    dispatch({ type: CONTACT_UPDATE, payload: data });
  } catch (error) {
    dispatch({ type: CONTACT_UPDATE_FAIL, payload: error.response.data.message });
  }
};
