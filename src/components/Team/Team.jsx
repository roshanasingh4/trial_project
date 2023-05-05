import React from "react";
import { Container } from "react-bootstrap";
import Wrapper from "./Wrapper";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import bg from "../../assets/Path 1627.svg";

export default function Team() {
  return (
    <Wrapper className="team-wrapper" id="team">
      <div className="team-container">
        <Container fluid className="my-5 head-container">
          <div className="row ">
            <div className="col-md-6 m-auto text-center">
              <h3 className="team-head">Team</h3>
              <h3 className="sub-heading">Meet the Team</h3>
            </div>
          </div>
        </Container>
        <div className="floating-img">
          <div className="row">
            <div className="col-md-3 bg-img-wrapper">
              <img className="img-fluid" src={bg} alt="" />
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <div className="row justify-content-center">
            <div className="col-md-2 img-768 img-fluid">
              <img src={img1} alt="" />
            </div>
            <div className="col-md-2 img-768 img-fluid">
              <img src={img2} alt="" />
            </div>
            <div className="col-md-2 img-768 img-fluid">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
