import { Card, Navbar, Container, Nav, NavDropdown, Button, NavItem, ListGroup, ListGroupItem, NavLink, NavbarBrand, Row, Col, ListItem, CardTitle, CardBody, CardFooter } from "react-bootstrap";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faHeart, faCode, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedinIn, faWikipediaW } from "@fortawesome/free-brands-svg-icons";

function Footer() {

    return (
      <footer className="bg-body-tertiary">
        <Card>
        <Row className="footer-links p-5">
            <Col>
              
            </Col>
            <Col>
              <CardTitle className="bold">
                Links
              </CardTitle>
              <Row className="text-left">
                <NavLink><FontAwesomeIcon icon={faWikipediaW} className="inline"/> Wikipedia</NavLink>
                <NavLink><FontAwesomeIcon icon={faLinkedinIn} className="inline"/> LinkedIn</NavLink>
                <NavLink><FontAwesomeIcon icon={faGitlab} className="inline"/> GitLab</NavLink>
                <NavLink><FontAwesomeIcon icon={faGithub} className="inline"/> GitHub</NavLink>
                <NavLink><FontAwesomeIcon icon={faWikipediaW} className="inline"/> Wikipedia</NavLink>

              </Row>
            </Col>
            <Col>
              <CardTitle >
                Links
              </CardTitle>
              <Row>
                <NavLink>Home</NavLink>
                <NavLink>Home</NavLink>
                <NavLink>Home</NavLink>
              </Row>
            </Col>
        </Row>
        <Row>
          <Card>
            <CardBody>
              Made with <FontAwesomeIcon icon={faHeart} color="red" className="inline"/>, some <FontAwesomeIcon icon={faCode} className="inline"/>, and too much <FontAwesomeIcon icon={faCoffee} color="brown" className="inline"/>
              <p>dnicolas.info © 2024 - All rights reserved.</p>
            </CardBody>
          </Card>
        </Row>
        </Card>

      </footer>


    )
}

export default Footer;