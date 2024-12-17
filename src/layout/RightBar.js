import {Button, Image,} from "react-bootstrap";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faMoon, faLightbulb, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
import {faGithub, faGitlab, faWikipediaW, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next";
import Select from 'react-select'

function RightBar({ theme, setTheme }) {
    const {t, i18n} = useTranslation("rightBar")
    const buttonStyle = {
    }
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
        color: theme === "dark" ? "#111111" : "#DDDDDD"
        })      
      const controlTheme = (base, state) => ({
        ...base,
        backgroundColor: "transparent",
        borderColor: "gray",
        display: "inline-block"
        })
        const dropdownIndicatorTheme = (base, state) => ({
        ...base,
        display: "none"
        })
        const containerTheme = (base, state) => ({
            ...base,
            maxWidth: "60px"
            })
      const CustomStyle = {
        option: (base, state) => baseSwitchTheme(base, state),
        menu: (base, state) => menuTheme(base, state),
        control: (base, state) => controlTheme(base, state),
        dropdownIndicator: (base, state) => dropdownIndicatorTheme(base, state),
        indicatorSeparator: (base, state) => dropdownIndicatorTheme(base, state),
        container: (base, state) => containerTheme(base, state)
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
    let defaultValue = languages.find((lng) => lng.value === i18n.resolvedLanguage)
    console.log(defaultValue)
    return (

      
      <div className="z-9 position-fixed top-50 justify-content-center end-0 translate-middle-y d-grid gap-2 mx-3"   data-aos="fade-left">
            <Button href="https://fr.wikipedia.org/wiki/Utilisateur:Masf%C3%A9tus" style={buttonStyle} variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="Wikipedia" icon={faWikipediaW} className="fa-m" />
            </Button>
            <Button href="https://www.linkedin.com/in/dimnicolas/" style={buttonStyle} variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="LinkedIn" icon={faLinkedin}  className="fa-m" />
            </Button>
            <Button href="https://gitlab.com/Masfetus" style={buttonStyle} variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="Gitlab" icon={faGitlab}  className="fa-m"/>
            </Button>
            <Button href="https://github.com/Masfetus" style={buttonStyle} variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title="Github" icon={faGithub}  className="fa-m"/>
            </Button>

            <Button className="opacity-50" title={t('scrollTop')} style={buttonStyle} variant="btn btn-outline-secondary btn-m" onClick={scroll.scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} className="fa-m"/>
            </Button>
            <Button className="opacity-50" title={t('scrollDown')} style={buttonStyle} variant="btn btn-outline-secondary btn-m" onClick={scroll.scrollToBottom}>
                <FontAwesomeIcon icon={faArrowDown} className="fa-m"/>
            </Button>
            {theme === "dark"?
            <Button variant="btn btn-outline-secondary btn-m" style={buttonStyle} onClick={onDarkModeButtonClicked}>
                <FontAwesomeIcon title={t('switchLight')} icon={faLightbulb} className="fa-regular"/>
            </Button> :
            <Button variant="btn btn-outline-secondary btn-m" style={buttonStyle} onClick={onDarkModeButtonClicked}>
                <FontAwesomeIcon title={t('switchDark')} icon={faMoon}/>
            </Button>
            }
            <Select defaultValue={defaultValue} options={languages} onChange={setNewLanguage} style={buttonStyle} styles={CustomStyle}  formatOptionLabel={lng => (
                <Image fluid src={`/icons/${lng.value}.png`} style={cardImageStyle}/>  
            )}/>
            <Button href="mailto:dimi-nico@outlook.fr" style={buttonStyle} variant="btn btn-outline-secondary btn-m" >
                <FontAwesomeIcon title={t('contactMe')} icon={faEnvelope} />
            </Button>
      </div>


    )
}

export default RightBar;