import { AUTH_SUCCESS, AUTH_FAILED, LOGOUT, AUTH_REQUEST } from 'constants/auth.constants';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: !action.payload,
        loadingGoogle: action.payload
      };

    case AUTH_SUCCESS:
      localStorage.setItem('userInfo', JSON.stringify({ ...action.payload.user }));
      return {
        ...state,
        userInfo: action.payload.user,
        message: '',
        loading: false,
        loadingGoogle: false
      };

    case AUTH_FAILED:
      return {
        ...state,
        authFailedNumbers: state.authFailedNumbers + 1,
        message: action.payload,
        userInfo: null,
        loading: false,
        loadingGoogle: false
      };

    case LOGOUT:
      return { ...state, userInfo: null, message: '', loading: false, loadingGoogle: false };

    default:
      return state;
  }
};
