import { Navbar, Container, Nav, NavDropdown, Button, NavLink, Dropdown } from "react-bootstrap";
import React, { useState } from 'react';
import i18n from "../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faGitlab, faWikipediaW, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faLink, faMoon, faPerson, faSignIn, faSignInAlt, faSignOut, faSignOutAlt, faSun, faSunPlantWilt, faUser } from "@fortawesome/free-solid-svg-icons";


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
                <Nav.Link href="#home" title="Home">Home</Nav.Link>
                <Nav.Link href="#link" title="">About me</Nav.Link>
                <NavDropdown title="Experiences" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">SA-MP & PAWN adventures</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">System Administration</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Software Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">AR/VR Technologies</NavDropdown.Item>
                  <NavDropdown.Divider title="Test"/>
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
              <Nav.Link href="https://fr.wikipedia.org/wiki/Utilisateur:Masf%C3%A9tus">
                    <Button variant="btn btn-outline-secondary" >
                        <FontAwesomeIcon title="Wikipedia" icon={faWikipediaW} />
                      </Button>
                  </Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/dimnicolas/">
                    <Button variant="btn btn-outline-secondary" >
                        <FontAwesomeIcon title="LinkedIn" icon={faLinkedin} />
                      </Button>
                  </Nav.Link>
                  <Nav.Link href="https://gitlab.com/Masfetus">
                    <Button variant="btn btn-outline-secondary" >
                        <FontAwesomeIcon title="Github" icon={faGitlab} />
                      </Button>
                  </Nav.Link>
                  <Nav.Link href="https://github.com/Masfetus">
                    <Button variant="btn btn-outline-secondary" >
                        <FontAwesomeIcon title="Github" icon={faGithub} />
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