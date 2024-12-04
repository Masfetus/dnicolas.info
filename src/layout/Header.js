import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import React from 'react';


function Header({ theme, setTheme }) {

    return (
      <header  >
        <Navbar expand="lg" className="z-5" >
          <Container data-aos="fade-right" data-aos-delay="50">
            <Navbar.Brand href="/">dnicolas.info</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" title="Home">Home</Nav.Link>
                <Nav.Link href="/about-me" title="">About me</Nav.Link>
                <NavDropdown title="IT Corner" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Pawn Language</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Play Your Games</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Software & Utilities</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Student Projects</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Activities" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Table tennis</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Bricks</NavDropdown.Item>
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