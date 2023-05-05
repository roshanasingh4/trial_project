import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  position: relative;
  z-index: 111111;
  transition: all 0.5s ease 0s;

  :hover {
    transform: translateY(-20px);
    transition: all 0.4s ease 0s;
  }

  background-color: #06061a;
  border-radius: 20px;
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;

  .card-container {
    gap: 20px;
  }

  .card-head {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
  }

  .card-content {
    color: #ffffff;
    font-size: 14px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 2rem 1rem;
  }
`;

export default Wrapper;
