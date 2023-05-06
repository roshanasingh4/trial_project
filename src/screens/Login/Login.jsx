import React, { useEffect, useState } from "react";
import {
  SAVE_USER_LOGIN_DATA,
  SAVE_USER_LOGIN_DATA_SUCCESS,
} from "../../constants/userConstants";
import jwtDecode from "jwt-decode";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (User?.userInfo?.name) {
      navigate("/payment");
    }
  }, [User, navigate]);

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: ", response);
    const user = jwtDecode(response.credential);

    dispatch({
      type: SAVE_USER_LOGIN_DATA,
    });

    dispatch({
      type: SAVE_USER_LOGIN_DATA_SUCCESS,
      payload: user,
    });

    // SETTING LOCAL STORAGE
    localStorage.setItem("user", JSON.stringify(user));

    if (user) {
      navigate("/payment");
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "246708121585-jjbjr9rd5002a15rel7aaujk7sm3q944.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <Wrapper>
      <div className="row">
        <div className="col-md-2">
          <div id="signInDiv"></div>
        </div>
      </div>
    </Wrapper>
  );
}
