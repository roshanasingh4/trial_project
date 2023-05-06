import React from "react";
import Wrapper from "./Wrapper";
import logo from "../../assets/logo-2.svg";
import phone from "../../assets/Group 1.svg";
import location from "../../assets/Location.svg";
import email from "../../assets/Path 1632.svg";
import twitter from "../../assets/Twitter.svg";
import youtube from "../../assets/Youtube.svg";
import facebook from "../../assets/Facebook.svg";
import google from "../../assets/Google+.svg";
export default function Footer() {
  return (
    <Wrapper>
      <div className="">
        <div className="line"></div>
        <div className="row footer-container">
          <div className="col-md-3">
            <div className="d-flex flex-column align-items-center">
              <img src={logo} alt="" />
              <h3 className="pt-4">BLACKBOX</h3>
              <p className="copyright">&#169; 2023 all rights reserved</p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <ul className="list">
              <li className="heading">Contact</li>
              <a href="#">
                <li>
                  <img src={phone} className="px-1" alt="phone" />
                  +123 456 789 00
                </li>
              </a>
              <a href="#">
                <li>
                  <img
                    src={location}
                    className="px-2 img-fluid"
                    alt="location"
                  />
                  location
                </li>
              </a>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list">
              <a href="#">
                <li className="">Overview</li>
              </a>
              <a href="#">
                <li>Main</li>
              </a>
              <a href="#">
                <li>Our Approach</li>
              </a>
              <a href="#">
                <li>Pricing</li>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list">
              <li>
                <p>Sign up for our newsletter</p>
              </li>
              <li>
                <div className="email-btn">
                  <input type="text" placeholder="name@email.com" />

                  <button>
                    <img src={email} alt="email" />
                  </button>
                </div>
              </li>
              <li className="d-flex justify-content-between btns-row">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={google} alt="" />
                <img src={youtube} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
