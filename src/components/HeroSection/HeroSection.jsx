import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../Button/Button";
import Wrapper from "../HeroSection/Wrapper";
import animation from "../../assets/animation.gif";

export default function HeroSection() {
  return (
    <Wrapper>
      <Container fluid className="row hero-container">
        <Col className="col">
          <div>
            <div className=" d-flex justify-content-center align-items-center flex-column">
              <p className="hero-heading">
                Blackbox is a multidimensional software platform bridging the
                gap between data and real-world decision making
              </p>
              <Button
                className={"hero-btn"}
                text={"Learn More"}
                width="250px"
              />
            </div>
          </div>
        </Col>
        <Col className="col img-wrapper">
          <img className="img-fluid" src={animation} alt="" />
        </Col>
      </Container>
    </Wrapper>
  );
}
