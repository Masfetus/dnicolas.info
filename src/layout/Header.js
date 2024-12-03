import { Navbar, Container, Nav, NavDropdown, Button, NavLink, Dropdown } from "react-bootstrap";
import React, { useState } from 'react';
import i18n from "../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faMoon, faPerson, faSignIn, faSignInAlt, faSignOut, faSignOutAlt, faSun, faSunPlantWilt, faUser } from "@fortawesome/free-solid-svg-icons";


function Header({ theme, setTheme }) {

    return (
      <header data-aos="z-5 fade-right" data-aos-delay="100">
        <Navbar expand="lg" >
          <Container>
            <Navbar.Brand href="#home">dnicolas.info</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" title="Home">Home</Nav.Link>
                <Nav.Link href="#link" title="">About me</Nav.Link>
                <NavDropdown title="Showroom" id="basic-nav-dropdown">
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