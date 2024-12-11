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
                            <p>Welcome to my personal website where information on my journey, projects and achievements is available. Grab a coffee and enjoy!</p>

                        </div>
                    </div>
                    <Row className='justify-content-center text-center'>
                        <Button className='text-white btn-outline-secondary' variant="outline-secondary" onClick={executeScroll} style={{maxWidth: "25vw"}} size="lg">
                            See more <FontAwesomeIcon className='mx-1' icon={faArrowDown}/>
                        </Button> 
                    </Row>
                </Card>

            </Row>
            <Row>
                <Row className='my-3 ' ref={showroomRef}>
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center my-5`}>
                        Showroom 
                    </h2>
                </Row>
                <Row className='my-5'>
                    <Col className='d-flex justify-content-center m-3' >
                        <Card style={cardStyle} className='' data-aos='zoom-in' data-aos-delay="100"> 
                            <Card.Img variant="top" src={bgPyg} style={cardImageStyle} />
                            <Card.Body className='text-justify-bottom'>
                                <Card.Title className='fw-bold'>Play Your Games</Card.Title>
                                <Card.Text>
                                A united community of players around the most popular games. Events, gaming sessions, and encounters are part of the deal. You can join us via discord using this <a href="https://discord.gg/SYgf8r2Nf9" className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>link</a>.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={bgSamp} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>San Andreas Multiplayer: Gamemodes development</Card.Title>
                                <Card.Text>
                                The starting point of my IT journey. Check out how I got the coding passion by learning a really singular language. A development that made sense and served a community of players.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="200" className='full-height'>
                            <Card.Img variant="top" src={hololensImg} style={cardImageStyle} />
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>Mixed Reality & Duty of Remembrance</Card.Title>
                                <Card.Text>
                                When innovation serves the duty of remembrance. This project assists a local museum in creating new ways of presenting history through immersive experiences.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={qwirkleImage} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>Qwirkle: Digital Version</Card.Title>
                                <Card.Text>
                                A digital adaptation of the original game board Qwirkle. A desktop application developed in the scope of studies that runs the game. Same rules, same fun!
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="100"> 
                            <Card.Img variant="top" src={santorini} style={cardImageStyle} />
                            <Card.Body className='text-justify-bottom'>
                                <Card.Title className='fw-bold'>Bricks & Lego - Architecture</Card.Title>
                                <Card.Text>
                                Dive into a passion that might flash back to your childhood. For more than a year, I enjoy building representations of famous worldwide architectures.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={tableTennis} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>Table Tennis</Card.Title>
                                <Card.Text>
                                Get to know this racket sport I have been playing for more than 10 years. The atmosphere, the mindset, and all the fantastic clubs driven by volunteers worth it.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    

                </Row>
                <Row className='my-5'>
                <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="200" className='full-height'>
                            <Card.Img variant="top" src={ecoImg} style={cardImageStyle} />
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>Gaming</Card.Title>
                                <Card.Text>
                                Discover and (why not) try out this few games that provide an unsual experience. Snapshots and links available!
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col/>
                    <Col className='d-flex justify-content-center m-3'>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={bgHiking} style={cardImageStyle}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>Hiking</Card.Title>
                                <Card.Text>
                                The Alps are an unvaluable natural treasure offering breath-taking views. From Bavaria to Tyrol, going by Allgäu and Vorarlberg, the landscapes will give you an overview on the beauty of nature.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>

                </Row>
            </Row>

        </div>


    )
}

export default Home;