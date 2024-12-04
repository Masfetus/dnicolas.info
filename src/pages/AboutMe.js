import React, { useEffect, useRef, useState } from "react";
import img from "../assets/img/bricks/santorini1.jpg"
import { Row, Container, Card, CardBody, CardTitle, CardImg, Col } from "react-bootstrap";

const pageTitle = `DN - About me`

function AboutMe({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <Container className='bg-body-tertiary my-5' data-aos="fade-up" data-aos-delay="100">
            <Row className='my-3 ' >
                <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center my-5`}>
                    About Me 
                </h2>
            </Row>
            <Row className="justify-content-start text-left"> 
                <Card>
                    <Row>
                        <CardTitle>Title 1</CardTitle>

                    </Row>
                    <Row>
                        <Col>
                            <CardImg src={img}></CardImg>
                        </Col>
                        <Col>
                        </Col>
                        <Col>                        
                            <CardBody>sdfgsasdgakjsdfasadkj</CardBody>
                        </Col>
                    </Row>

                </Card>
            </Row>
        </Container>


    )
}

export default AboutMe;