import axios from 'axios';

import { CONTACT_CREATE, CONTACT_FETCH_ALL } from 'constants/contact.constants';

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
