import { Navbar, Container, Nav, NavDropdown, Badge} from "react-bootstrap";
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
                  <NavDropdown.Item href="/it/pawn">Pawn & SA-MP </NavDropdown.Item>
                  <NavDropdown.Item href="/it/pyg">Play Your Games <Badge pill bg="warning">In work</Badge></NavDropdown.Item>
                  <NavDropdown.Item disabled className="disabled" href="#action/3.3">{t("softwareLink")} <Badge pill bg="warning">In work</Badge></NavDropdown.Item>
                  <NavDropdown.Item disabled href="#action/3.4">{t("studentProjectLink")} <Badge pill bg="warning">In work</Badge></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={t("activitiesLink")} id="basic-nav-dropdown">
                  <NavDropdown.Item disabled href="#action/3.1">{t("tableTennisLink")} <Badge pill bg="warning">In work</Badge></NavDropdown.Item>
                  <NavDropdown.Item href="/activities/bricks">{t("bricksLink")} </NavDropdown.Item>
                  <NavDropdown.Item disabled href="#action/3.4">{t("gamingLink")} <Badge pill bg="warning">In work</Badge></NavDropdown.Item>
                  <NavDropdown.Item disabled href="#action/3.2">{t("hikingLink")} <Badge pill bg="warning">In work</Badge></NavDropdown.Item>
              </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      

    )
}

export default Header;