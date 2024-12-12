import React, { useEffect, useRef, useState } from "react";
import anvers from "../../assets/img/bricks/anvers.png"
import berlin from "../../assets/img/bricks/berlin.png"
import london from "../../assets/img/bricks/london.png"
import nyc from "../../assets/img/bricks/nyc.png"
import paris from "../../assets/img/bricks/paris.png"
import tokyo from "../../assets/img/bricks/tokyo.png"
import vegas from "../../assets/img/bricks/vegas.png"
import venice from "../../assets/img/bricks/venice.png"

import arc_triomphe from "../../assets/img/bricks/arc-triomphe.png"
import eiffel from "../../assets/img/bricks/eiffel.png"
import notre_dame from "../../assets/img/bricks/notre-dame.png"
import pisaTower from "../../assets/img/bricks/pisa-tower.png"
import santorini from "../../assets/img/bricks/santorini.png"

import { Container, Carousel, Image, Row, Col } from "react-bootstrap";

const imageStyle = {
    objectFit: "cover"
}
const pageTitle = `DN - Bricks`


function BrickPage({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div  className={`${theme === "dark"? "text-light": "text-dark"} bg-body-tertiary p-5`} data-aos="fade-up" data-aos-delay="100">
            <Container >
                <h2>Cities Skylines</h2>
                <Carousel className="m-5">
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={anvers} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Anvers, Belgium</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>


                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={berlin} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Berlin, Germany</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={london} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>London, United Kingdom</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={nyc} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>New York City, United States</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={paris} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Paris, France</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={tokyo} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Tokyo, Japan</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={vegas} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Las Vegas, United States</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={venice} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Venice, Italy</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container data-bs-theme={theme}>
                <h2>Landmarks</h2>
                <Carousel className="m-5">
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={arc_triomphe} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Arc de Triomphe, Paris, France</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={eiffel} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Eiffel Tower, Paris, France</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={notre_dame} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Notre-Dame Cathedral, Paris, France</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={pisaTower} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Pisa Tower, Pisa, Italy</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 border">
                        <Row>
                            <Col>                        
                                <Image fluid src={santorini} style={imageStyle} />
                            </Col>
                            <Col className="border-left">
                               <h3>Santorini, Greece</h3>

                               <p className="justify-content-center align-middle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>


    )
}

export default BrickPage;