import styled from "styled-components";

const Wrapper = styled.button`
  padding: 11px 15px;
  color: ${(props) => props.textcolor};
  background: transparent linear-gradient(262deg, #41e2c9 0%, #600ffb 100%) 0%
    0% no-repeat padding-box;
  width: ${(props) => props.width};
  color: #ffffff;
  font-size: 14px;
  font-weight: ${(props) => (props.weight ? props.weight : 600)};
  text-align: center;
  font-family: "Montserrat", sans-serif;
  border: none;
  outline: none;
  border-radius: 50px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Wrapper;
