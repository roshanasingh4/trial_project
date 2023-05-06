import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: #eff2f6;
  padding: 7rem 0;
  .pricing-container {
    width: 80%;
    margin: auto;
  }
  .pricing-head {
    color: #600ffb;
    text-transform: uppercase;
    font-size: 20px;
  }
  .sub-heading {
    font-size: 30px;
    text-transform: capitalize;
  }

  @media only screen and (max-width: 1024px) {
    .pricing-container {
      width: 90%;
    }
  }

  @media only screen and (max-width: 900px) {
    .pricing-container {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .pricing-container {
      width: 70%;
    }
  }
  @media only screen and (max-width: 480px) {
    .pricing-container {
      width: 100%;
    }
  }
`;

export default Wrapper;
