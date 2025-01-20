import { Card, Container, NavLink, Col, CardTitle, CardBody, Badge } from "react-bootstrap";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCode, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedinIn, faWikipediaW, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t} = useTranslation("footer")

    return (
      <footer className="bg-body-tertiary">
        <Card>
        <Container className="text-start d-flex flex-wrap p-5">
            <Col>
              <CardTitle className="bold">
                {t('aboutMeLink')}
              </CardTitle>
              <Container className="py-2">
                <NavLink href="/about-me">
                  <span>{t('introductionLink')} </span>
                </NavLink>
                <NavLink href="/experience">
                  <span>{t('experienceLink')}</span> 
                </NavLink>
                <NavLink href="/education">
                  <span>{t('educationLink')}</span>
                </NavLink>
              </Container>
            </Col>
            <Col>
              <CardTitle className="bold">
              {t('itCornerLink')}
              </CardTitle>
              <Container className="py-2">
                <NavLink href="/it/pawn">
                  <span>Pawn & SA-MP </span>
                </NavLink>
                <NavLink href="/it/pyg">
                  <span>Play Your Games </span> 
                </NavLink>
                <NavLink disabled>
                  <span>{t('softwareLink')} <Badge pill bg="warning">In work</Badge></span>
                </NavLink>
                <NavLink disabled>
                  <span>{t('studentProjectLink')} <Badge pill bg="warning">In work</Badge></span>
                </NavLink>
              </Container>
            </Col>
            <Col>
              <CardTitle className="bold">
              {t('activitiesLink')}
              </CardTitle>
              <Container className="py-2">
                <NavLink href="/activities/bricks">
                  <span>{t('bricksLink')}</span> 
                </NavLink>
                <NavLink disabled>
                  <span>{t('gamingLink')} <Badge pill bg="warning">In work</Badge></span>
                </NavLink>
                <NavLink href="/activities/outdoors"> 
                  <span>{t('hikingLink')}</span>
                </NavLink>
              </Container>
            </Col>
            <Col>
              <CardTitle className="bold">
              {t('linksTitle')}
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
        </Container>
          <Card>
            <CardBody>
              Made with <FontAwesomeIcon icon={faHeart} color="red" className="inline"/>, some <FontAwesomeIcon icon={faCode} className="inline"/>, and too much <FontAwesomeIcon icon={faCoffee} color="brown" className="inline"/>
              <p>dnicolas.info © 2024 - {t('copyright')}</p>
            </CardBody>
          </Card>
        </Card>

      </footer>


    )
}

export default Footer;