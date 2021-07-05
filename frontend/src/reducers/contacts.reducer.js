import {
  CONTACT_CREATE,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_FETCH_ALL,
  CONTACT_UPDATE,
  CONTACT_FETCH_ALL_FAIL,
  CONTACT_CREATE_FAIL,
  CONTACT_DELETE_FAIL,
  CONTACT_DELETE_ALL_FAIL,
  CONTACT_UPDATE_FAIL,
  CONTACTS_REQUEST
} from 'constants/contacts.constants';

export const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CONTACT_FETCH_ALL:
      return {
        ...state,
        list: action.payload.contacts,
        message: action.payload.message,
        error: false,
        loading: false
      };

    case CONTACT_FETCH_ALL_FAIL:
      return {
        ...state,
        message: action.payload,
        error: true,
        loading: false
      };

    case CONTACT_CREATE:
      return {
        ...state,
        list: [...state.list, action.payload.newContact],
        message: action.payload.message,
        error: false,
        loading: false
      };

    case CONTACT_CREATE_FAIL:
      return {
        ...state,
        message: action.payload,
        error: true,
        loading: false
      };

    case CONTACT_UPDATE:
      return {
        ...state,
        list: state.list.map((contact) =>
          contact._id === action.payload.updatedContact._id
            ? action.payload.updatedContact
            : contact
        ),
        message: action.payload.message,
        error: false,
        loading: false
      };

    case CONTACT_UPDATE_FAIL:
      return {
        ...state,
        message: action.payload,
        error: true
      };

    case CONTACT_DELETE:
      return {
        ...state,
        list: state.list.filter((contact) => contact._id !== action.payload.id),
        message: action.payload.message,
        error: false,
        loading: false
      };

    case CONTACT_DELETE_FAIL:
      return {
        ...state,
        message: action.payload,
        error: true,
        loading: false
      };

    case CONTACT_DELETE_ALL:
      return {
        ...state,
        list: state.list.filter((contact) => action.payload.ids.indexOf(contact._id) === -1),
        message: action.payload.message,
        error: false,
        loading: false
      };

    case CONTACT_DELETE_ALL_FAIL:
      return {
        ...state,
        message: action.payload,
        error: true,
        loading: false
      };

    default:
      return state;
  }
};
