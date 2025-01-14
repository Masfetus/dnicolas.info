import {Row, Card, Button, Col, Container, Badge} from 'react-bootstrap';
import React, { useEffect, useRef, useState } from "react";
import hololensImg from '../assets/img/bg/hololens-card.jpg';
import qwirkleImage from '../assets/img/bg/qwirkle_diy_02.jpg';
import bgImage from '../assets/img/bg/bg-img2.jpg';
import bgSamp from '../assets/img/bg/bg-samp.jpg';
import bgPyg from '../assets/img/bg/bg-pyg.jpg'
import tableTennis from '../assets/img/bg/table-tennis.jpg'
import santorini from '../assets/img/bricks/hogwarts.png'
import ecoImg from '../assets/img/bg/bg-eco.png'
import bgHiking from '../assets/img/bg/bg-hiking.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import CardElement from '../components/CardElement';

const pageTitle = `DN - Home`
var homeSectionStyle = {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundOpacity: 0.5
}
function Home({ theme, setTheme }) {
    const showroomRef = useRef(null)
    const executeScroll = () => showroomRef.current.scrollIntoView()    
    const {t, i18n} = useTranslation("homePage")

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className='bg-body-tertiary' data-aos="fade-up" data-aos-delay="100">
            <div style={homeSectionStyle}>
                <Card className="p-5 w-100" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <div class="row justify-content-center text-center text-white" >
                        <div class="col-xl-6 col-lg-8 p-3">
                            <h1 className='fw-bold'>Dimitri Nicolas</h1>
                            <p>{t('welcomeDescription')}</p>
                        </div>
                    </div>
                    <Row className='justify-content-center text-center'>
                        <Button className='text-white btn-outline-secondary' variant="outline-secondary" onClick={executeScroll} style={{maxWidth: "50vw"}} size="lg">
                            {t('seeMore')} <FontAwesomeIcon className='mx-1' icon={faArrowDown}/>
                        </Button> 
                    </Row>
                </Card>

            </div>
            <Container className='bg-body-tertiary'>
                <Row className='my-3 ' ref={showroomRef}>
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center border-bottom p-3 my-5`}>
                        {t('showroom')} 
                    </h2>
                </Row>
                <Row className='my-5'>
                    <Col className='d-flex justify-content-center m-3' >
                        <CardElement image={bgPyg} title="Play Your Games" description={t('pygDescription')} btnRef="/it/pyg" t={t}/>
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <CardElement image={bgSamp} title={t('sampTitle')} description={t('sampDescription')} btnRef='/it/pawn#samp' t={t}/>
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <CardElement image={hololensImg} title={t('mxTitle')} description={t('mxDescription')} inWork t={t}/>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center m-3'>
                        <CardElement image={santorini} title={t('bricksTitle')} description={t('bricksDescription')} btnRef='/activities/bricks' t={t}/>   
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <CardElement image={ecoImg} title={t('gamingTitle')} description={t('gamingDescription')} t={t} inWork/>
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <CardElement image={bgHiking} title={t('hikingTitle')} description={t('hikingDescription')}  t={t} inWork/> 
                    </Col>
                </Row>
            </Container>

        </div>


    )
}

export default Home;