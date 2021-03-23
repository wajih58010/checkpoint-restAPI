// impotation type
import {
  GET_CONTACTS,
  LOAD_CONTACTS,
  FAIL_CONTACTS,
  GET_CONTACT,
} from "../actionTypes/contact";
// initialState
const inistialState = {
  contactList: [],
  error: null,
  load: false,
  contact: {},
};

// pure function
const contactReducer = (state = inistialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };
    case GET_CONTACTS:
      return { ...state, load: false, contactList: payload.contacts };
    case FAIL_CONTACTS:
      return { ...state, load: false, errors: payload };

    case GET_CONTACT:
      return { ...state, contact: payload.contact };

    default:
      return state;
  }
};

export default contactReducer;
