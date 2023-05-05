import styled from "styled-components";
import bg from "../../assets/Path 1627.svg";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: #eff2f6;
  padding: 5rem 1rem;
  position: relative;
  background-image: url(${bg});
  .team-Container {
    background-color: #eff2f6;
  }
  .team-head {
    color: #600ffb;
    text-transform: uppercase;
  }
  .sub-heading {
    font-size: 20px;
    text-transform: capitalize;
  }
  .bg-img-wrapper {
    position: absolute;
    left: -5%;
    bottom: 30%;
  }
  .img-wrapper {
    position: relative;
    .row {
      gap: 170px;
    }
    img {
      width: 300px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .img-wrapper {
      .row {
        gap: 100px;
      }
      img {
        width: 231px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 1rem 1rem;
  }

  @media only screen and (max-width: 768px) {
    .head-container {
      margin: 0 !important;
    }
    .img-768 {
      display: flex;
      justify-content: center;
    }
    .bg-img-wrapper {
      position: absolute;
      left: -5%;
      bottom: 69%;
      width: 282px !important;
    }
  }
  @media only screen and (max-width: 480px) {
    .img-wrapper {
      position: relative;
      .row {
        gap: 20px;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .head-container {
      margin-bottom: 2rem !important;
    }
    .bg-img-wrapper {
      width: 40% !important;
    }
  }
`;

export default Wrapper;
