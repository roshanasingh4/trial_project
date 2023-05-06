import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  margin-bottom: 3rem;
  margin-top: 2rem;
  .outer-wrapper {
    display: flex;
    width: 250px;
    background-color: #06061a;
    height: 35px;
    border-radius: 20px;
    margin: 0;
    /* padding: 0 0.5rem; */
    transition: all 0.4s ease 0s;

    color: white;
    position: relative;
    cursor: pointer;
  }

  .slider {
    background: transparent linear-gradient(40deg, #600ffb 0%, #41e2c9 100%) 0%
      0% no-repeat padding-box;
    position: absolute;
    height: 35px;
    width: 50%;
    border-radius: 20px;
    /* filter: opacity(0.5); */
    cursor: pointer;
    transition: all 0.4s ease 0s;
  }

  .selected {
    transition: all 0.4s ease 0s;
    margin-left: 125px;
  }
`;

export default Wrapper;
