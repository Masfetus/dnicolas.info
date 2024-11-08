import { Navbar, Container, Nav, NavDropdown, Button, NavLink, Dropdown } from "react-bootstrap";
import React, { useState } from 'react';
import i18n from "../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faPerson, faSignIn, faSignInAlt, faSignOut, faSignOutAlt, faSun, faSunPlantWilt, faUser } from "@fortawesome/free-solid-svg-icons";


function Header({ theme, setTheme }) {

    function onDarkModeButtonClicked() {
      setTheme(theme === "dark"? "light" : "dark");
    }
    return (
      <header>
        <Navbar expand="lg" >
          <Container>
            <Navbar.Brand href="#home">dnicolas.info</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About me</Nav.Link>
                <NavDropdown title="Experiences" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">SA-MP & PAWN adventures</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">System Administration</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Software Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">AR/VR Technologies</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="#action/3.5">Professional Journey</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Hobbies" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Table tennis</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Hiking</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Bricks building</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Gaming</NavDropdown.Item>
              </NavDropdown>
              </Nav>

              <Navbar>
              <Nav className="me-auto">
                  <Nav.Link>
                    <Button variant="btn btn-outline-secondary">
                        <FontAwesomeIcon title="GitHub"/>
                      </Button>
                  </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                  <Nav.Link>
                  {theme === "dark"?
                    <Button variant="btn btn-outline-secondary" onClick={onDarkModeButtonClicked}>
                      <FontAwesomeIcon title="Switch to light mode" icon={faMoon}/>
                    </Button> :
                    <Button variant="btn btn-outline-secondary" onClick={onDarkModeButtonClicked}>
                      <FontAwesomeIcon title="Switch to dark mode" icon={faSun}/>
                    
                    </Button>
                    }
                    </Nav.Link>
                </Nav>
              </Navbar>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      

    )
}

export default Header;