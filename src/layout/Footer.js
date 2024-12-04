import { Card, Image, Navbar, Container, Nav, NavDropdown, Button, NavItem, ListGroup, ListGroupItem, NavLink, NavbarBrand, Row, Col, ListItem, CardTitle, CardBody, CardFooter } from "react-bootstrap";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faHeart, faCode, faCoffee, faChessPawn, faTools, faTableTennis, faGamepad, faHiking} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedinIn, faWikipediaW, faDiscord } from "@fortawesome/free-brands-svg-icons";
import pygLogo from "../assets/img/icons/pyg.png";
import bricksLogo from "../assets/img/icons/lego.png"

function Footer() {

    return (
      <footer className="bg-body-tertiary">
        <Card>
        <Row className="text-start p-5">
            <Col>
              
            </Col>
            <Col>
              <CardTitle className="bold">
                IT Corner
              </CardTitle>
              <Row className="p-2">
                <NavLink>
                  <span>Pawn Language</span>
                  <FontAwesomeIcon icon={faChessPawn} className="inline fa-sm ms-2"/> 
                </NavLink>
                <NavLink>
                  <span>Play Your Games</span> 
                  <Image src={pygLogo} width="4%" className="ms-2"/>
                </NavLink>
                <NavLink>
                  <span>Software & Utilities</span>
                  <FontAwesomeIcon icon={faTools} className="inline fa-sm ms-2"/> 
                </NavLink>
                <NavLink>
                  <span>Student Projects</span>
                  <FontAwesomeIcon icon={faUniversity} className="inline fa-sm ms-2"/> 
                </NavLink>
              </Row>
            </Col>
            <Col>
              <CardTitle className="bold">
                Activities
              </CardTitle>
              <Row className="p-2">
                <NavLink>
                  <span>Table Tennis</span>
                  <FontAwesomeIcon icon={faTableTennis} className="inline fa-sm ms-2"/> 
                </NavLink>
                <NavLink>
                  <span>Bricks</span> 
                  <Image src={bricksLogo} width="4%" className="fa-sm ms-2"/>
                </NavLink>
                <NavLink>
                  <span>Gaming</span>
                  <FontAwesomeIcon icon={faGamepad} className="inline fa-sm ms-2"/> 
                </NavLink>
                <NavLink>
                  <span>Hiking</span>
                  <FontAwesomeIcon icon={faHiking} className="inline fa-sm ms-2"/> 
                </NavLink>
              </Row>
            </Col>
            <Col>
              <CardTitle className="bold">
                Links
              </CardTitle>
              <Row className="p-2">
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