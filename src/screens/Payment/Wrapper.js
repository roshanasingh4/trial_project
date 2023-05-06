import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem;

  .paypal-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffc439;
    width: 100%;
    border: none;
    margin: 0.4rem 0;
    border-radius: 5px;
    padding: 0.3rem 0.3rem;
  }

  .stripe-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffc439;
    width: 100%;
    border: none;
    margin: 0.4rem 0;
    border-radius: 5px;
    padding: 0.3rem 0.3rem;
    color: white;
    font-weight: 500;
    background-color: black;
  }
`;

export default Wrapper;
