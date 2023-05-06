import {
  SAVE_USER_LOGIN_DATA,
  SAVE_USER_LOGIN_DATA_SUCCESS,
  SAVE_USER_LOGIN_DATA_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USER_LOGIN_DATA:
      return { loading: true };
    case SAVE_USER_LOGIN_DATA_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SAVE_USER_LOGIN_DATA_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
