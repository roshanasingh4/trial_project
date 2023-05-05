import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 15px;
  border: 1px solid #600ffb;
  padding: 2rem;
  transition: all 0.4s ease 0s;

  :hover {
    transform: translateY(-20px);
    transition: all 0.4s ease 0s;
    background: transparent linear-gradient(262deg, #41e2c9 0%, #600ffb 100%) 0%;
    color: white !important;
    border: none;
  }
  :hover .price {
    color: white;
  }

  :hover p {
    color: white;
  }

  :hover .price-btn {
    transition: all 0.4s ease 0s;
    color: #06061a;
    background: white;
  }

  .price-btn:hover {
    color: white;
    background: #06061a !important;
  }

  .card-head .price {
    color: #06061a;
  }
  .card-head {
    font-size: 16px;
    font-weight: bold;
  }
  .price {
    font-size: 30px;
  }
  p {
    color: #06061a;
    font-size: 10px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 1rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export default Wrapper;
