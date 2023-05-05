import React from "react";
import Wrapper from "./Wrapper";
import { Container } from "react-bootstrap";
import ApproachMask1 from "../../assets/Mask Group 1.svg";
import ApproachMask2 from "../../assets/Mask Group 2.svg";
import bg from "../../assets/Group 348.svg";
import { Col } from "react-bootstrap";

export default function OurApproach() {
  return (
    <>
      <Wrapper id="approach">
        <Container fluid className="row approach-section">
          <Col className="col-md-6 col-12">
            <div>
              <div className="col-lg-8 col-md-10 d-flex justify-content-center align-items-center flex-column">
                <img
                  src={ApproachMask1}
                  alt="approach1-mask"
                  className="img-fluid"
                />
                <p className="my-5">
                  With cutting-edge technology and data analysis tools, our
                  platform streamlines key processes throughout the investment
                  lifecycle, making it an ideal solution for private equity
                  firms, venture capital firms, investment banks, corporate
                  development departments, hedge funds, real estate developers,
                  and government entities. With Blackbox, businesses and
                  organizations can harness the power of AI to drive efficiency,
                  cost savings, and improved decision-making, positioning them
                  as leaders in the industry.
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-md-6 col-12">
            <div>
              <div className="col-lg-8 col-md-10 d-flex justify-content-center align-items-center flex-column m-auto">
                <div className="">
                  <h3>Our Approach</h3>
                  <p>
                    As a company, we believe in putting our clients' needs
                    first, that's why at Blackbox we focus on understanding them
                    before providing our technology-based solutions.
                  </p>
                  <p>
                    Blackbox is a leading AI-powered software platform that
                    revolutionizes the way businesses and organizations make
                    investment decisions.
                  </p>
                  <img
                    src={ApproachMask1}
                    alt="approach2-mask"
                    className="img-fluid my-5"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Container>
        <div className="row">
          <div className="col-md-7 img-container">
            <img className="img-fluid" src={bg} alt="" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
