import { Navbar, Container, Nav, NavDropdown, Button, NavItem, Row } from "react-bootstrap";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

function LeftBar({ theme, setTheme }) {
    function onDarkModeButtonClicked() {
        setTheme(theme === "dark"? "light" : "dark");
      }
    return (

      
      <div className="z-3 position-fixed top-50 end-0 translate-middle-y">

        <Row className="m-2">
            <Button title="Go to the top"  className="btn btn-secondary opacity-50 btn-m" onClick={scroll.scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </Button>
        </Row>
        <Row className="m-2">
            <Button title="Go to the bottom" className="btn btn-secondary opacity-50 btn-m" onClick={scroll.scrollToBottom}>
                <FontAwesomeIcon icon={faArrowDown} />
            </Button>
        </Row>
        <Row className="m-2">
            {theme === "dark"?
            <Button variant="btn btn-outline-secondary btn-m" onClick={onDarkModeButtonClicked}>
                <FontAwesomeIcon title="Switch to light mode" icon={faMoon}/>
            </Button> :
            <Button variant="btn btn-outline-secondary btn-m" onClick={onDarkModeButtonClicked}>
                <FontAwesomeIcon title="Switch to dark mode" icon={faSun}/>
            
            </Button>
            }
        </Row>
      </div>


    )
}

export default LeftBar;