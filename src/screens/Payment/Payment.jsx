import React from "react";
import axios from "axios";
import Wrapper from "./Wrapper";
import paypal from "../../assets/paypal.svg";
import baseURL from "../../config.js";
import { useSelector } from "react-redux";

export default function Payment() {
  const cart = useSelector((state) => state.cart);
  const { id, name } = cart.cart;
  console.log("cart", cart);
  const handleStripePayment = async () => {
    try {
      console.log("Hello world");
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const items = [{ id, quantity: 1 }];
      // console.log(items, items);

      const { data } = await axios.post(
        `${baseURL}/api/create-stripe-checkout-session`,
        { items },
        config
      );

      // Storing payments details in locall storage only for Dvelopment
      localStorage.setItem("payment_details", JSON.stringify(data));
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaypalPayment = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${baseURL}/api/create-paypal-checkout-session`,
        config
      );

      window.location = data.approval_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div>
        <h3>Payment Checkout</h3>
        <button
          className="stripe-btn btn-secondary"
          onClick={handleStripePayment}
        >
          Stripe Pay
        </button>
        <button onClick={handlePaypalPayment} className="paypal-btn">
          <img src={paypal} alt="" />
        </button>
      </div>
    </Wrapper>
  );
}
