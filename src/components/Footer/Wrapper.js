import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #06061a;
  padding: 5rem 0;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  div {
    /* border: 1px solid red; */
  }
  .copyright {
    font-size: 12px;
    font-weight: 300;
    opacity: 0.7;
  }
  .line {
    border: none;
    width: 30%;
    border-top: 2px solid #600ffb;
    border-image: transparent linear-gradient(262deg, #41e2c9 0%, #600ffb 100%)
      0% 0% no-repeat padding-box;
    margin-bottom: 1rem;
  }
  .footer-container {
    background-color: #06061a;
    width: 80%;
    margin: 0 auto;
  }
  .list {
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: #06061a;
    font-size: 14px;
    list-style: none;
    li {
      padding: 0 0.2rem;
    }
    .heading {
      font-size: 16px;
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
  .email-btn {
    display: flex;
    flex-direction: row;
    input {
      outline: none;
      border: none;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      padding: 0 1rem;
      font-size: 12px;
    }
    button {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      box-sizing: border-box;
      border: none;
      outline: none;
      padding: 0.5rem 1rem;
      background: transparent linear-gradient(40deg, #600ffb 0%, #41e2c9 100%)
        0% 0% no-repeat padding-box;
    }
  }
  .btns-row img + img {
    margin-left: 2rem;
  }
  .btns-row {
    margin-top: 2rem;
  }
`;

export default Wrapper;
