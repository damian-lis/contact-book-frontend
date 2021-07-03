import { AUTH_SUCCESS, AUTH_FAILED, LOGOUT } from 'constants/auth.constants';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      localStorage.setItem('userInfo', JSON.stringify({ ...action?.payload }));
      return { ...state, userInfo: action.payload };

    case AUTH_FAILED:
      return { ...state, authFailedNumbers: state.authFailedNumbers + 1, userInfo: false };

    case LOGOUT:
      return { ...state, userInfo: null };

    default:
      return state;
  }
};
