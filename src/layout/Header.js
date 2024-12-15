import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import React from 'react';
import { useTranslation } from "react-i18next";


function Header({ theme, setTheme }) {
    const { t} = useTranslation("header")
    return (
      <header  >
        <Navbar expand="lg">
          <Container >
            <Navbar.Brand href="/">dnicolas.info</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" title="Home">{t("homeLink")}</Nav.Link>
                <NavDropdown title={t("aboutMeLink")} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about-me">{t("introductionLink")} </NavDropdown.Item>
                  <NavDropdown.Item href="/experience">{t("experienceLink")} </NavDropdown.Item>
                  <NavDropdown.Item href="/education">{t("educationLink")} </NavDropdown.Item>
                </NavDropdown>             
                <NavDropdown title={t("itCornerLink")} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">{t("pawnLanguageLink")}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Play Your Games</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">{t("softwareLink")}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">{t("studentProjectLink")}</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={t("activitiesLink")} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">{t("tableTennisLink")}</NavDropdown.Item>
                  <NavDropdown.Item href="/activities/bricks">{t("bricksLink")}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">{t("gamingLink")}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">{t("hikingLink")}</NavDropdown.Item>
              </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      

    )
}

export default Header;