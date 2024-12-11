import {Row, Card, Button, Col} from 'react-bootstrap';
import React, { useEffect, useRef, useState } from "react";
import hololensImg from '../assets/img/bg/hololens-card.jpg';
import qwirkleImage from '../assets/img/bg/qwirkle_diy_02.jpg';
import bgImage from '../assets/img/bg/bg-img2.jpg';
import bgSamp from '../assets/img/bg/bg-samp.jpg';
import bgPyg from '../assets/img/bg/bg-pyg.jpg'
import tableTennis from '../assets/img/bg/table-tennis.jpg'
import santorini from '../assets/img/bricks/santorini1.jpg'
import ecoImg from '../assets/img/bg/bg-eco.png'
import bgHiking from '../assets/img/bg/bg-hiking.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
const cardStyle = {
    minWidth: '22rem', 
    height: '100%'
}
const cardImageStyle = {
    minHeight: "12vw", 
    objectFit: "cover"
}
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
            <Row style={homeSectionStyle}>
                <Card className="p-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <div class="row justify-content-center text-center text-white" >
                        <div class="col-xl-6 col-lg-8 p-3">
                            <h1 className='fw-bold'>Dimitri Nicolas</h1>
                            <p>{t('welcomeDescription')}</p>
                        </div>
                    </div>
                    <Row className='justify-content-center text-center'>
                        <Button className='text-white btn-outline-secondary' variant="outline-secondary" onClick={executeScroll} style={{maxWidth: "25vw"}} size="lg">
                            {t('seeMore')} <FontAwesomeIcon className='mx-1' icon={faArrowDown}/>
                        </Button> 
                    </Row>
                </Card>

            </Row>
            <Row>
                <Row className='my-3 ' ref={showroomRef}>
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center my-5`}>
                        {t('showroom')} 
                    </h2>
                </Row>
                <Row className='my-5'>
                    <Col className='d-flex justify-content-center m-3' >
                        <Card style={cardStyle} className='' data-aos='zoom-in' data-aos-delay="100"> 
                            <Card.Img variant="top" src={bgPyg} style={cardImageStyle} />
                            <Card.Body className='text-justify-bottom'>
                                <Card.Title className='fw-bold'>Play Your Games</Card.Title>
                                <Card.Text>
                                    {t('pygDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')} <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={bgSamp} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>{t('sampTitle')}</Card.Title>
                                <Card.Text>
                                    {t('sampDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')} <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="200" className='full-height'>
                            <Card.Img variant="top" src={hololensImg} style={cardImageStyle} />
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>{t('mxTitle')}</Card.Title>
                                <Card.Text>
                                {t('mxDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')} <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={qwirkleImage} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>{t('qwirkleTitle')}</Card.Title>
                                <Card.Text>
                                {t('qwirkleDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')}<FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="100"> 
                            <Card.Img variant="top" src={santorini} style={cardImageStyle} />
                            <Card.Body className='text-justify-bottom'>
                                <Card.Title className='fw-bold'>{t('bricksTitle')}</Card.Title>
                                <Card.Text>
                                {t('bricksDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')} <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={tableTennis} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>{t('tableTennisTitle')}</Card.Title>
                                <Card.Text>
                                {t('tableTennisDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')} <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    

                </Row>
                <Row className='my-5'>
                <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="200" className='full-height'>
                            <Card.Img variant="top" src={ecoImg} style={cardImageStyle} />
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>{t('gamingTitle')}</Card.Title>
                                <Card.Text>
                                {t('gamingDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')} <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col/>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={bgHiking} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>{t('hikingTitle')}</Card.Title>
                                <Card.Text>
                                {t('hikingDescription')}
                                </Card.Text>
                                <Button variant="secondary">{t('learnMore')}<FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>

                </Row>
            </Row>

        </div>


    )
}

export default Home;