import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  /* overflow: hidden; */
  div {
    /* border: 1px solid red; */
  }
  .business-container {
    width: 80%;
    margin: auto;
  }
  background-color: #eff2f6;
  h3.business-heading {
    font-family: "Montserrat", sans-serif;
    color: #06061a;
    font-weight: 500;
    margin: 1rem 0;
  }

  p.busines-para {
    color: #06061a;
    font-weight: normal;
    font-family: "Montserrat", sans-serif;
  }

  /* .background-image img {
    width: 410px;
  } */
  .img-container {
    position: absolute;
    right: -6%;
    bottom: -32%;
  }

  @media only screen and (max-width: 1024px) {
    .business-container {
      width: 90%;
    }
    .img-container {
      position: absolute;
      right: -6%;
      bottom: -21%;
    }
  }

  @media only screen and (max-width: 900px) {
    .business-container {
      width: 100%;
    }
    .img-container {
      position: absolute;
      right: -12%;
      bottom: -21%;
    }
    .card-wrapper {
      padding: 0 !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .business-container {
      width: 70%;
    }
    .img-container {
      display: none;
    }
    .card-wrapper {
      padding: 0 !important;
    }
  }

  @media only screen and (max-width: 480px) {
    .business-container {
      width: 100%;
    }
  }
`;

export default Wrapper;
