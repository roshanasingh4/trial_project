import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem 4rem;
  background-color: #eff2f6;

  /* div {
    border: 1px solid red;
  } */

  .hero-btn {
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  p.hero-heading {
    color: #06061a;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 3rem;
    text-align: left;
  }

  @media only screen and (max-width: 1024) {
    p.hero-heading {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 0.5rem 1rem;
  }

  @media only screen and (max-width: 768px) {
    p.hero-heading {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .hero-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .hero-btn {
      margin-right: auto;
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 100%;
    }
    p.hero-heading {
      font-size: 1.3rem;
    }

    .img-wrapper {
      margin: 4rem 0;
    }
  }
`;

export default Wrapper;
