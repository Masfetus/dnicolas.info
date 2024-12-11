import { Card, Image, Navbar, Container, Nav, NavDropdown, Button, NavItem, ListGroup, ListGroupItem, NavLink, NavbarBrand, Row, Col, ListItem, CardTitle, CardBody, CardFooter } from "react-bootstrap";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faHeart, faCode, faCoffee, faChessPawn, faTools, faTableTennis, faGamepad, faHiking, faUser, faIndustry} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedinIn, faWikipediaW, faDiscord } from "@fortawesome/free-brands-svg-icons";
import pygLogo from "../assets/img/icons/pyg.png";
import bricksLogo from "../assets/img/icons/lego.png"

function Footer() {

    return (
      <footer className="bg-body-tertiary">
        <Card>
        <Row className="text-start p-5">
            <Col>
              <CardTitle className="bold">
                About me
              </CardTitle>
              <Container className="py-2">
                <NavLink href="/about-me">
                  <span>Introduction </span>
                </NavLink>
                <NavLink href="/experience">
                  <span>Experience</span> 
                </NavLink>
                <NavLink href="/education">
                  <span>Education</span>
                </NavLink>
              </Container>
            </Col>
            <Col>
              <CardTitle className="bold">
                IT Corner
              </CardTitle>
              <Container className="py-2">
                <NavLink>
                  <span>Pawn Language</span>
                </NavLink>
                <NavLink>
                  <span>Play Your Games</span> 
                </NavLink>
                <NavLink>
                  <span>Software & Utilities</span>
                </NavLink>
                <NavLink>
                  <span>Student Projects</span>
                </NavLink>
              </Container>
            </Col>
            <Col>
              <CardTitle className="bold">
                Activities
              </CardTitle>
              <Container className="py-2">
                <NavLink>
                  <span>Table Tennis</span>
                </NavLink>
                <NavLink>
                  <span>Bricks</span> 
                </NavLink>
                <NavLink>
                  <span>Gaming</span>
                </NavLink>
                <NavLink>
                  <span>Hiking</span>
                </NavLink>
              </Container>
            </Col>
            <Col>
              <CardTitle className="bold">
                Links
              </CardTitle>
              <Container className="py-2">
                <NavLink href="https://fr.wikipedia.org/wiki/Utilisateur:Masf%C3%A9tus">
                  <span>Wikipedia</span>
                  <FontAwesomeIcon icon={faWikipediaW} className="inline fa-sm ms-2"/> 
                </NavLink>
                <NavLink href="https://www.linkedin.com/in/dimnicolas/">
                  <span>LinkedIn</span> 
                  <FontAwesomeIcon icon={faLinkedinIn} className="inline fa-sm ms-2"/>
                </NavLink>
                <NavLink href="https://gitlab.com/Masfetus">
                  <span>GitLab</span>
                  <FontAwesomeIcon icon={faGitlab} className="inline fa-sm ms-2"/> 
                </NavLink>
                <NavLink href="https://github.com/Masfetus">
                  <span>GitHub</span>
                  <FontAwesomeIcon icon={faGithub} className="inline fa-sm ms-2"/> 
                </NavLink>
                <NavLink href="https://discordapp.com/users/262587053181501441">
                  <span>Discord</span>
                  <FontAwesomeIcon icon={faDiscord} className="inline fa-sm ms-2"/> 
                </NavLink>
              </Container>
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