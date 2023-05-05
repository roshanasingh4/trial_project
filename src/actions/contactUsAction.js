import axios from "axios";
import baseURL from "../config";
import {
  CONTACT_US_REQUEST,
  CONTACT_US_REQUEST_FAILURE,
  CONTACT_US_REQUEST_SUCCESS,
} from "../constants/contactUsConstants";

const saveContactInfo = (contatcObj) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_US_REQUEST,
    });

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseURL}/api/contactUs`,
      contatcObj,
      config
    );

    dispatch({
      type: CONTACT_US_REQUEST_SUCCESS,
      payload: data,
    });

    console.log(data);
  } catch (error) {
    console.log(error);
    dispatch({
      type: CONTACT_US_REQUEST_FAILURE,
      payload: error?.response?.data,
    });
  }
};

export default saveContactInfo;
