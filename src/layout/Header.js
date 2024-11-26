import { Navbar, Container, Nav, NavDropdown, Button, NavLink, Dropdown } from "react-bootstrap";
import React, { useState } from 'react';
import i18n from "../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faPerson, faSignIn, faSignInAlt, faSignOut, faSignOutAlt, faSun, faSunPlantWilt, faUser } from "@fortawesome/free-solid-svg-icons";
import anime from 'animejs/lib/anime.es.js';
import "animate.css"

function Header() {


    return (
      <header className="bg-body-tertiary">
        <Navbar expand="lg" >
          <Container>
            <Navbar.Brand href="/" >
              dnicolas.info 
           </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className="animate__animated animate_zoomInDown">Home</Nav.Link>
                <Nav.Link href="#link">About me</Nav.Link>
                <NavDropdown title="Experiences" className="z-2" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">SA-MP & PAWN adventures</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">System Administration</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Software Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">AR/VR Technologies</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="#action/3.5">Professional Journey</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Hobbies" className="z-2" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/bricks">Table tennis</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Hiking</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Bricks building</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Gaming</NavDropdown.Item>
              </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      

    )
}

export default Header;