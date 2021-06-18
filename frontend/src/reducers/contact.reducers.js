import {
  CONTACT_CREATE,
  CONTACT_DELETE,
  CONTACT_DELETE_ALL,
  CONTACT_FETCH_ALL,
  CONTACT_UPDATE
} from 'constants/contactContsant';

export const contactReducer = (contacts = [], action) => {
  switch (action.type) {
    case CONTACT_FETCH_ALL:
      return action.payload;

    case CONTACT_CREATE:
      return [...contacts, action.payload];

    case CONTACT_UPDATE:
      return contacts.map((contact) =>
        contact._id === action.payload._id ? action.payload : contact
      );

    case CONTACT_DELETE:
      return contacts.filter((contact) => contact._id !== action.payload);

    case CONTACT_DELETE_ALL:
      return contacts.filter((contact) => action.payload.indexOf(contact._id) === -1);

    default:
      return contacts;
  }
};
