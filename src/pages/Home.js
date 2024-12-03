import {CardGroup, Container, Row, Card, Button, Col, Image, ModalTitle} from 'react-bootstrap';
import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import hololensImg from '../assets/img/bg/hololens-card.jpg';
import qwirkleImage from '../assets/img/bg/qwirkle_diy_02.jpg';

import bgPyg from '../assets/img/bg/bg-pyg.jpg'
import CarouselImage from "../components/CarouselImage";
import Blur from "react-css-blur";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
const title = "Home"
const cardStyle = {width: '22rem'}

var pageStyle = {
    
 }
function Home() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = title;
  });
    return (
        <div className='bg-body-tertiary p-5' style={pageStyle}>
            <Row className=' m-5'>
                <Col>
                    <h3>Have a look at ...</h3>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src={bgPyg} />
                        <Card.Body className='text-justify'>
                            <Card.Title>Play Your Games</Card.Title>
                            <Card.Text>
                            A community uniting players together around the most popular games. You can join us via discord using this <a href="https://discord.gg/SYgf8r2Nf9" className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>link</a>.
                            </Card.Text>
                            <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src={hololensImg} />
                        <Card.Body className='text-justify'>
                            <Card.Title>Mixed Reality & Duty of Remembrance</Card.Title>
                            <Card.Text>
                            When the innovation serves the duty of remembrance. This projects assists a local museum in offering new ways of presenting history through immersive experiences.
                            </Card.Text>
                            <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src={qwirkleImage} />
                        <Card.Body className='text-justify'>
                            <Card.Title>Qwirkle: Digital Version</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
            <Row className='m-5'>
                <Col>
                    <Card style={{ width: '18rem' }}>
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
                    <Card style={{ width: '18rem' }}>
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
                    <Card style={{ width: '18rem' }}>
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
        </div>


    )
}

export default Home;