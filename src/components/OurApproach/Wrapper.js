import styled from "styled-components";
import bg from "../../assets/Group 348.svg";

const Wrapper = styled.div`
  padding: 0.5rem 4rem;
  background-color: #eff2f6;
  position: relative;
  .approach-section {
    p {
      color: #06061a;
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
    }
    h3 {
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      font-family: "Montserrat", sans-serif;
      font-weight: normal;
      color: #600ffb;
      text-align: left !important;
    }
  }

  .img-container {
    position: absolute;
    left: -7%;
    bottom: 46%;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0.5rem 1rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
    .img-container {
      display: none;
    }
  }
`;
export default Wrapper;
