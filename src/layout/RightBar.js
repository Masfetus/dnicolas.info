import { Navbar, Card, Nav, NavDropdown, Button, NavItem, Row, Image, Form } from "react-bootstrap";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faMoon, faSun, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
import {faGithub, faGitlab, faWikipediaW, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next";
import Select from 'react-select'

function RightBar({ theme, setTheme }) {
    const {t, i18n} = useTranslation("")

    function onDarkModeButtonClicked() {
        setTheme(theme === "dark"? "light" : "dark");
      }
      const baseSwitchTheme = (base, state) => ({
        ...base,
        backgroundColor: theme === "dark" ? "#111111" : "#DDDDDD",
        color: theme === "dark" ? "#111111" : "#DDDDDD",
      })
      const menuTheme = (base, state) => ({
        ...base,
        backgroundColor: theme === "dark" ? "#111111" : "#DDDDDD",
        color: theme === "dark" ? "#111111" : "#DDDDDD",
        maxWidth: "50%"
        })      
      const controlTheme = (base, state) => ({
        ...base,
        backgroundColor: "transparent",
        borderColor: "gray",
        maxWidth: "50%"
        })
        const dropdownIndicatorTheme = (base, state) => ({
        ...base,
        display: "none"
        })
      const CustomStyle = {
        option: (base, state) => baseSwitchTheme(base, state),
        menu: (base, state) => menuTheme(base, state),
        control: (base, state) => controlTheme(base, state),
        dropdownIndicator: (base, state) => dropdownIndicatorTheme(base, state),
        indicatorSeparator: (base, state) => dropdownIndicatorTheme(base, state)
      }
      const cardImageStyle = {
        objectFit: "cover"
      }
    const setNewLanguage = event  => {
        let language = event.value
        i18n.changeLanguage(language)
    }
    const languages = [
        { value:"en", label: 'EN'},
        { value:"fr", label: 'FR'},
        { value:"de", label: 'DE'}
    ]
    let defaultValue = languages.find((lng) => lng.value == i18n.resolvedLanguage)
    console.log(defaultValue)
    return (

      
      <div className="z-9 position-fixed top-50 end-0 translate-middle-y text-end w-20 d-grid gap-2 col-1" data-aos="fade-left">
            <Button className="w-50" href="https://fr.wikipedia.org/wiki/Utilisateur:Masf%C3%A9tus" variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="Wikipedia" icon={faWikipediaW} className="fa-m" />
            </Button>
            <Button className="w-50" href="https://www.linkedin.com/in/dimnicolas/" variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="LinkedIn" icon={faLinkedin}  className="fa-m" />
            </Button>
            <Button className="w-50" href="https://gitlab.com/Masfetus" variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="Gitlab" icon={faGitlab}  className="fa-m"/>
            </Button>
            <Button className="w-50" href="https://github.com/Masfetus" variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="Github" icon={faGithub}  className="fa-m"/>
            </Button>

            <Button className="w-50 opacity-50" title="Go to the top" variant="btn btn-outline-secondary btn-m" onClick={scroll.scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} className="fa-m"/>
            </Button>
            <Button className="w-50 opacity-50" title="Go to the bottom" variant="btn btn-outline-secondary btn-m" onClick={scroll.scrollToBottom}>
                <FontAwesomeIcon icon={faArrowDown} className="fa-m"/>
            </Button>
            {theme === "dark"?
            <Button className="w-50" variant="btn btn-outline-secondary btn-m" onClick={onDarkModeButtonClicked}>
                <FontAwesomeIcon title="Switch to light mode" icon={faMoon}/>
            </Button> :
            <Button className="w-50" variant="btn btn-outline-secondary btn-m" onClick={onDarkModeButtonClicked}>
                <FontAwesomeIcon title="Switch to dark mode" icon={faSun}/>
            </Button>
            }
            <Select defaultValue={defaultValue} options={languages} onChange={setNewLanguage} styles={CustomStyle}  formatOptionLabel={lng => (
                <Row>
                    <Image fluid src={`/icons/${lng.value}.png`} style={cardImageStyle}/>  
                </Row>  
            )}/>
            <Button className="w-50" href="mailto:dimi-nico@outlook.fr" variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="Contact me" icon={faEnvelope} />
            </Button>
      </div>


    )
}

export default RightBar;