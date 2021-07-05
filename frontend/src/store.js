import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactReducer } from 'reducers/contacts.reducer';
import { authReducer } from 'reducers/auth.reducer';

const reducers = combineReducers({
  contacts: contactReducer,
  auth: authReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  auth: {
    userInfo: userInfoFromStorage,
    authFailedNumbers: 0,
    message: '',
    loading: false,
    loadingGoogle: false
  },
  contacts: { list: null, message: '', error: false, loading: false }
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
