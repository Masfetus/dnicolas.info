import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


function Header({ theme, setTheme }) {

    function onDarkModeButtonClicked() {
      setTheme(theme === "dark"? "light" : "dark");
    }
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
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


          <Button className="btn btn-secondary" onClick={onDarkModeButtonClicked}>
            <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun}>
            </FontAwesomeIcon>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

export default Header;