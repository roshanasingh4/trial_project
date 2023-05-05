import styled from "styled-components";

const Wrapper = styled.div`
  .navbar-container {
    padding: 0.5rem 4rem;
  }
  a {
    text-decoration: none;
  }
  .navbar {
    background-color: #eff2f6;
    padding: 1.5rem 0.5rem;
    a.nav-link {
      color: #06061a;
      :hover {
        color: #600ffb;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .navbar-container {
      display: flex;
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 20px;
    }
    .navbar-container {
      padding: 0.5rem 1rem;
    }
  }
`;

export default Wrapper;
