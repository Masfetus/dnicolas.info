import {CardGroup, Container, Row, Card, Button, Col, Image} from 'react-bootstrap';
import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import bg1 from '../assets/img/bg/fendt-bg.jpg';
import bg2 from '../assets/img/bg/bg-img2.jpg';
import bgPyg from '../assets/img/bg/bg-pyg.jpg'
import CarouselImage from "../components/CarouselImage";
import Blur from "react-css-blur";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowRight} from "@fortawesome/free-solid-svg-icons";
const title = "Home"

function Home() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = title;
  });
    return (
        <Container>
            <Row className='m-5'>
                <h3 className='text text-secondary'>Have a look at ...</h3>
            </Row>
            <Row className='m-3'>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="bottom" src={bgPyg} />
                        <Card.Body className='text-justify'>
                            <Card.Title>Play Your Games</Card.Title>
                            <Card.Text>
                            A community uniting players together around the most popular games. You can join us via discord using this <Link href="https://discord.gg/SYgf8r2Nf9">link</Link>.
                            </Card.Text>
                            <Button variant="secondary">Learn more <FontAwesomeIcon icon={faArrowRight}/></Button>
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
            <Row className='m-3'>
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
        </Container>


    )
}

export default Home;