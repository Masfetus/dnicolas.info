import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody, Col, Container, Image, Row } from "react-bootstrap";
import pyg from "../../assets/img/icons/pyg.png"
import pyg_header from "../../assets/img/logos/Banniere_PYG_anime_2.gif"
import agario from "../../assets/img/pyg/agario.png"
import bot_discord1 from "../../assets/img/pyg/bot discord.png"
import bot_discord2 from "../../assets/img/pyg/chat-agario.png"


import TextLink from "../../components/TextLink";
import { useTranslation } from "react-i18next";


const pageTitle = `DN - Play Your Games`

function PlayYourGames({ theme, setTheme }) {
    const {t, i18n} = useTranslation("pygPage")
    
    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className='bg-body-tertiary py-1' data-aos="fade-up" data-aos-delay="100">
            <Container>
                <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} border-bottom p-3 text-start my-5`}>
                    Play Your Games
                </h2>  
                <Card className="my-4 p-4 text-start">
                    <Image thumbnail fluid src={pyg_header}/>
                    <Row>
                        <Col sm={4} className="d-flex flex-wrap align-items-center text-center">
                            <Image src={pyg} fluid className="h-75 mx-auto d-block text-center" data-aos="flip-left"  data-aos-delay="500"></Image>
                        </Col>
                        <Col sm={8} >
                            <CardBody>
                                <h4 className="text-start border-bottom py-2">
                                {t('section1.title')}
                                </h4>
                                <p>
                                {t('section1.p1-1')}(<TextLink href="/it/pawn" text={t('section1.p1-2')}/>{t('section1.p1-3')} 
                                </p>
                                <p>
                                {t('section1.p2')}                            
                                </p>
                                
                            </CardBody>   
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p>
                            {t('section1.p3')}                       
                            </p>
                            <p>
                            {t('section1.p4')} 
                            </p>
                        </Col>

                    </Row>
                </Card>
                <Card className="my-4 p-2 text-start">
                    <Row>

                        <Col sm={7} >
                            <CardBody>
                                <h4 className="border-bottom py-2">
                                {t('section2.title')}
                                </h4>
                                <p>
                                {t('section2.p1')} 
                                </p>
                                <p>
                                {t('section2.p2-1')} <TextLink href="https://github.com/owenashurst/agar.io-clone" text="Github Repo"/>){t('section2.p2-2')}   
                                </p>
                                <p>
                                {t('section2.p3')} 
                                </p>
                            </CardBody>   
                        </Col>
                        <Col sm={5} className="d-flex flex-wrap align-items-center text-center">
                            <Image src={agario} fluid className="mx-auto d-block text-center" data-aos="flip-left"  data-aos-delay="500"></Image>
                        </Col>
                    </Row>
                </Card>
                <Card className="my-4 p-2 text-start">
                    <Row>
                        <Col sm={5} className="d-flex flex-wrap align-items-center text-center">
                            <Image src={bot_discord2} thumbnail fluid className="mx-auto d-block text-center my-2" data-aos="flip-left"  data-aos-delay="500"></Image>
                            <Image src={bot_discord1} thumbnail fluid className="mx-auto d-block text-center my-2" data-aos="flip-left"  data-aos-delay="500"></Image>
                        </Col>
                        <Col sm={7} >
                            <CardBody>
                                <h4 className="border-bottom py-2">
                                {t('section3.title')}
                                </h4>
                                <p>
                                {t('section3.p1')}                                
                                </p>
                                <p>
                                {t('section3.p2')}
                                </p>
                                <p>
                                {t('section3.p3-1')}<TextLink href="https://www.igdb.com/api" text="IGDB API"/>.
                                </p>
                                <p>
                                {t('section3.p4')}                                
                                </p>
                            </CardBody>   
                        </Col>

                    </Row>
                </Card>
            </Container>
      
            
        </div>


    )
}

export default PlayYourGames;