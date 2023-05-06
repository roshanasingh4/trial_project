import React from "react";
import Wrapper from "./Wrapper";
import search from "../../assets/006-search.svg";
import growth from "../../assets/005-growth.svg";
import bars from "../../assets/044-bars-graphic.svg";
import bg from "../../assets/Group 349.svg";
import { Container, Row } from "react-bootstrap";
import BusinessCard from "../BusinessCard/BusinessCard";

export default function Business() {
  return (
    <Wrapper id="business">
      <Container fluid className="business-container">
        <div className="row">
          <div className="col-md-7 m-auto text-center">
            <h3 className="business-heading">
              How Does Blackbox help Your Business?
            </h3>
            <p className="business-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 col-12 card-wrapper">
            <BusinessCard
              image={growth}
              heading="Increase Campaign ROI"
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              }
            />
          </div>
          <div className="col-md-4 col-12 card-wrapper">
            <BusinessCard
              image={bars}
              heading="Reduce Business Costs"
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              }
            />
          </div>
          <div className="col-md-4 col-12 card-wrapper">
            <BusinessCard
              image={search}
              heading="Improve decision-making"
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
              }
            />
          </div>
        </div>
      </Container>
      <div className="background-image row">
        <div className="img-container col-md-3">
          <img className="img-fluid" src={bg} alt="background" />
        </div>
      </div>
    </Wrapper>
  );
}
