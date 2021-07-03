import axios from 'axios';
import { AUTH_SUCCESS, AUTH_FAILED, LOGOUT } from 'constants/auth.constants';

export const signIn = (form) => async (dispatch) => {
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
      type: AUTH_FAILED
    });
  }
};

export const signUp = (form) => async (dispatch) => {
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
      type: AUTH_FAILED
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('userInfo');
  document.location.href = '/';
};
