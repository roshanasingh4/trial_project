import React from "react";
import Button from "../Button/Button";
import check from "../../assets/Checkmark.svg";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function PricingCard({ heading, price, onClick }) {
  return (
    <Wrapper className="pricing-wrapper">
      <div className="d-flex flex-column justify-content-center  card-container">
        <h3 className="card-head">{heading}</h3>
        <p className="price my-4">${price}/mo</p>
        <Link to={"/login"}>
          <Button
            text={"Get Started"}
            onClick={onClick}
            width="100%"
            weight={"400"}
            className="my-3 price-btn"
          />
        </Link>
        <div>
          <p>
            {" "}
            <img src={check} className="img-fluid px-2" alt="" /> Lorem ipsum
            dolor sit amet consectetur
          </p>
          <p>
            {" "}
            <img src={check} className="img-fluid px-2" alt="" />
            adipiscing elit sed do{" "}
          </p>
          <p>
            <img src={check} className="img-fluid px-2" alt="" />
            dolor in reprehenderit in voluptate velit
          </p>
          <p>
            <img src={check} className="img-fluid px-2" alt="" />
            dolore magna aliqua Ut enim ad minim
          </p>
          <p>
            <img src={check} className="img-fluid px-2" alt="" />
            exercitation ullamco laboris nisi
          </p>
          <p>
            <img src={check} className="img-fluid px-2" alt="" /> incididunt ut
            labore et quis nostrud ut
          </p>
          <p>
            <img src={check} className="img-fluid px-2" alt="" />
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
