import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo 1.svg";
import Wrapper from "./Wrapper";
import { Col, Nav, Row, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
function BrandExample() {
  return (
    <>
      <Wrapper>
        <Navbar className="navbar" variant="light" expand="lg">
          <Container className="navbar-container" fluid>
            {/* <Row className="justify-content-between w-100"> */}
            {/* <Col className="col-md-6"> */}
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={Logo}
                width="200"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            {/* </Col> */}
            {/* <Col className="col-md-6"> */}
            <div className="ml-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex navbar-row">
                  <HashLink to={"#Home"}>
                    <Nav.Link eventKey={1} href="#home" smooth>
                      Home
                    </Nav.Link>
                  </HashLink>
                  <HashLink to={"#approach"} smooth>
                    <Nav.Link eventKey={2} href="#link">
                      Our Approach
                    </Nav.Link>
                  </HashLink>
                  <HashLink to={"#pricing"} smooth>
                    <Nav.Link eventKey={3} href="#link">
                      Pricing
                    </Nav.Link>
                  </HashLink>
                  <HashLink to={"#team"} smooth>
                    <Nav.Link eventKey={4} href="#link">
                      Team
                    </Nav.Link>
                  </HashLink>
                  <HashLink to={"#contactus"} smooth>
                    <Nav.Link eventKey={5} href="#link">
                      Contact
                    </Nav.Link>
                  </HashLink>
                </Nav>
              </Navbar.Collapse>
            </div>
            {/* </Col> */}
            {/* </Row> */}
          </Container>
        </Navbar>
      </Wrapper>
    </>
  );
}

export default BrandExample;
