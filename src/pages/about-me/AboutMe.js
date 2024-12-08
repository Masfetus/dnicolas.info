import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/img/profile/profile-img.JPG"
import img2 from "../../assets/img/profile/profile-img2.jpg"
import { Row, Container, Card, CardBody, CardTitle, Image, Col } from "react-bootstrap";

const pageTitle = `DN - About me`

function AboutMe({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className="bg-body-tertiary">
            <Container className='py-5' data-aos="fade-up" data-aos-delay="100">
                <Row className='my-3 ' >
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center my-5`}>
                        About Me 
                    </h2>
                </Row>
                <Row className="justify-content-start text-left "> 
                    <Card>
                        <Row className="m-5">
                            <CardTitle className="text-end">Quick words on myself...</CardTitle>

                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Image src={img} thumbnail fluid className="h-75" data-aos="flip-left"  data-aos-delay="500"></Image>
                            </Col>
                            <Col sm={8}>                        
                                <CardBody className="justify-content-start text-start p-5 " data-aos="flip-up"  data-aos-delay="500">
                                    <p>
                                        IT passionate, Lego builder, French, European, ? Not sure what words would describe me the best. 
                                        Even if my roots are French, I have been living in Germany for more than a year in the beautiful region of Allgäu. The discovery of new cultures and traditions 
                                        is always an enriching experience. And, this goes by learning the local language to better understand the specifities and the how local people express themselves.
                                    </p>
                                    <p>
                                        Not only I am an eager of these cultures, but also a passionated of IT technologies. Even before going to college, I always had this curiosity on how systems work and can be connected together.
                                        Thus, I started working at 14 on some humble development projects. The most important was not to get a worthful return out of it but to feed this passion, and starts writing the very beginning of my journey.
                                        There was no more pleasure than working together with friends while learning and growing, autonomously, as self-learners. Then, my IT education perfectly completed the theorical aspects
                                        I was lacking of to go one step further.
                                    </p>
                                    <p>
                                        As part of this interest for technologies and innovation, I have been working on several student projects that allowed me to find technical solutions meeting requirements. 
                                        Whether it is around software engineering, XR/VR/AR technologies, or IoT; each of these projects was the achievement of a collaborative work, and the efforts truly paid off. 
                                        If you are interested in one of them, explore the website, and get a closer look at how they have been conducted.
                                    </p>

                                </CardBody>
                            </Col>
                        </Row>
                        <Row className="justify-content-start text-start mx-5">
                            <Col sm={8} data-aos="flip-up"  data-aos-delay="500">
                                <p>
                                    Professionnally speaking, I work in industrial IT close to MES & PLM systems. Such experience is insightful especially when it comes to a combination of very specific production-related requirements
                                    and innovative solutions. Coordination between IT & Businness teams, data pipelines enablement, 3D data management, these activities lead to a new way of thinking production processes, as part of industry 4.0.
                                    I also contributed to the development of applications computing manufacturing data (MES, Thingworx applications). 
                                </p>
                                <p>
                                    What about after work? Well, I had been playing table tennis for many years in France. This sport requires a lot of "body coordination" as well as mental and technical capabilities.
                                    In addition, I like gaming on PC and hiking in pleasant mountain environments. Lastly, this website will showcase some brick sets I have been working on. The passion of building architectural pieces up is real
                                    and gives satisfaction when assessing the progress throughout the work.
                                </p>
                            </Col>
                            <Col sm={4}>
                                <Image src={img2} thumbnail fluid className="h-75" data-aos="flip-right"  data-aos-delay="500"></Image>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
        </div>

    )
}

export default AboutMe;