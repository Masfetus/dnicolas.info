import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { faUniversity, faIndustry} from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header({ theme, setTheme }) {

    return (
      <header  >
        <Navbar expand="lg">
          <Container >
            <Navbar.Brand href="/">dnicolas.info</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" title="Home">Home</Nav.Link>
                <NavDropdown title="About me" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about-me">Introduction </NavDropdown.Item>
                  <NavDropdown.Item href="/experience">Experience </NavDropdown.Item>
                  <NavDropdown.Item href="/education">Education </NavDropdown.Item>
                </NavDropdown>             
                <NavDropdown title="IT Corner" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Pawn Language</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Play Your Games</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Software & Utilities</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Student Projects</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Activities" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Table tennis</NavDropdown.Item>
                  <NavDropdown.Item href="/activities/bricks">Bricks</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Gaming</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Hiking</NavDropdown.Item>
              </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      

    )
}

export default Header;