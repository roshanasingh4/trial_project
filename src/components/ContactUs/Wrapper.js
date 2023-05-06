import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: #eff2f6;
  overflow: hidden;

  .contact-us-header {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    margin: 3rem 0;
  }

  .contact-us-container {
    width: 80%;
    margin: 5rem auto;
    background-color: rgba(6, 6, 26, 1);
    mix-blend-mode: hard-light;
    padding: 3rem 5rem;
    overflow: hidden;
    border-radius: 15px;
  }

  .input-field {
    border: none;
    color: white;
    border-bottom: 1px solid #444453;
    outline: none;
    background-color: #06061a;
    padding: 0.3rem 1rem;
    ::placeholder {
      color: #444453;
    }
  }
  .text-area {
    border: none;
    color: white;
    border-bottom: 1px solid #444453;
    outline: none;
    background-color: #06061a;
    padding: 0.3rem 1rem;
    resize: none;
    width: 100%;
  }
  label {
    padding: 0 1rem;
    color: #444453;
    display: block;
  }

  .submit-btn {
    opacity: 1;
    font-size: 16px;
    font-weight: 300;
  }

  .bg-img-container {
    position: relative;
    margin-bottom: 4rem;
  }
  .img-inner {
    position: absolute;
    right: -6.3%;
    display: block;
    bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    .img-inner {
      display: none;
    }
    input.input-field {
      margin: 1rem 0;
    }
    .contact-us-container {
      padding: 3rem 3rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .contact-us-container {
      width: 100%;
    }

    padding: 1rem;
  }
`;

export default Wrapper;
