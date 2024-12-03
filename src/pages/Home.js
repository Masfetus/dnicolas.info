import {CardGroup, Container, Row, Card, Button, Col, Image, ModalTitle, CardTitle} from 'react-bootstrap';
import logo from '../logo.svg';
import React, { useEffect, useRef, useState } from "react";
import hololensImg from '../assets/img/bg/hololens-card.jpg';
import qwirkleImage from '../assets/img/bg/qwirkle_diy_02.jpg';
import bgImage from '../assets/img/bg/bg-img2.jpg';

import bgPyg from '../assets/img/bg/bg-pyg.jpg'
import CarouselImage from "../components/CarouselImage";
import Blur from "react-css-blur";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
const cardStyle = {
    width: '22rem', 
    height: '100%'
}
const cardImageStyle = {
    height: "15vw", 
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
        <div className='bg-body-tertiary full-width'>
            <Row style={homeSectionStyle}>
                <Card className="p-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <div class="row justify-content-center text-center text-white" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-xl-6 col-lg-8 p-3">
                            <h1 className='fw-bold'>Dimitri Nicolas</h1>
                            <p>Welcome to my personal website where information on my journey, projects and achievements is available. Grab a coffee and enjoy!</p>

                        </div>
                    </div>
                    <Row className='justify-content-center text-center'>
                        <Button className='text-white btn btn-outline-secondary' variant="outline-secondary" onClick={executeScroll} style={{width: "10vw"}} size="lg">
                            <p>See more</p>
                            <FontAwesomeIcon icon={faArrowDown}/>
                        </Button> 
                    </Row>
                </Card>

            </Row>
            <Row>
                <Row className='m-3' ref={showroomRef}>
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center m-5`}>
                        Showroom 
                    </h2>
                </Row>
                <Row className='m-5'>
                    <Col>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="100"> 
                            <Card.Img variant="top" src={bgPyg} style={cardImageStyle} />
                            <Card.Body className='text-justify-bottom'>
                                <Card.Title className='fw-bold'>Play Your Games</Card.Title>
                                <Card.Text>
                                A community uniting players together around the most popular games. You can join us via discord using this <a href="https://discord.gg/SYgf8r2Nf9" className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>link</a>.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="200" className='full-height'>
                            <Card.Img variant="top" src={hololensImg} style={{height: "15vw", objectFit: "cover"}} />
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>Mixed Reality & Duty of Remembrance</Card.Title>
                                <Card.Text>
                                When the innovation serves the duty of remembrance. This projects assists a local museum in offering new ways of presenting history through immersive experiences.
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle} fluid data-aos='zoom-in' data-aos-delay="300" className='full-height'>
                            <Card.Img variant="top" src={qwirkleImage} style={{height: "15vw", objectFit: "cover"}}/>
                            <Card.Body className='text-justify'>
                                <Card.Title className='fw-bold'>Qwirkle: Digital Version</Card.Title>
                                <Card.Text>
                                A digital adaptation of the original game board Qwirkle. A desktop application developed in the scope of studies that runs the game. Same rules, same fun!
                                </Card.Text>
                                <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
                <Row className='m-5'>
                    <Col>
                        <Card style={{ width: '18rem' }} data-aos='zoom-in'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} data-aos='zoom-in'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} data-aos='zoom-in'>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Row>

        </div>


    )
}

export default Home;