import axios from 'axios';
import { AUTH_SUCCESS, AUTH_FAILED, LOGOUT, AUTH_REQUEST } from 'constants/auth.constants';

export const signIn = (form, google) => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST, payload: google ? true : false });

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.post('/auth/login', form, config);

    dispatch({
      type: AUTH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILED,
      payload: error.response.data.message
    });
  }
};

export const signUp = (form, google) => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST, payload: google ? true : false });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.post('/auth', form, config);

    dispatch({
      type: AUTH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILED,
      payload: error.response.data.message
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('userInfo');
  document.location.href = '/';
};
