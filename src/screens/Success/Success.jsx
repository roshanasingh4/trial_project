import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import baseURL from "../../config";
import axios from "axios";

export default function Success() {
  const user = useSelector((state) => state.user);
  const { name, email } = user.userInfo;

  const savePaymentDetails = async () => {
    try {
      const { id } = JSON.parse(localStorage.getItem("payment_details"));

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${baseURL}/api/savePayment`,
        { payment_id: id, name, email },
        config
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    savePaymentDetails();
  }, []);

  return (
    <div>
      Payment Successful
      <a href="/"> Go Back to home</a>
    </div>
  );
}
