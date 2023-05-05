import {
  CONTACT_US_REQUEST,
  CONTACT_US_REQUEST_FAILURE,
  CONTACT_US_REQUEST_SUCCESS,
} from "../constants/contactUsConstants";

export const contactUsReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_US_REQUEST:
      return { loading: true };
    case CONTACT_US_REQUEST_FAILURE:
      return { loading: false, error: action.payload };
    case CONTACT_US_REQUEST_SUCCESS:
      return { loading: false, contactUsInfo: action.payload };
    default:
      return state;
  }
};
