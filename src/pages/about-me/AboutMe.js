import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/img/profile/profile-img.JPG"
import img2 from "../../assets/img/profile/profile-img2.jpg"
import { Row, Container, Card, CardBody, CardTitle, Image, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const pageTitle = `DN - About me`

function AboutMe({ theme, setTheme }) {
    const {t, i18n} = useTranslation("aboutMePage")
    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className="bg-body-tertiary">
            <Container className='py-5' data-aos="fade-up" data-aos-delay="100">
                <Row className='my-3 ' >
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} justify-content-center text-center my-5`}>
                        {t('title')}
                    </h2>
                </Row>
                <Row className="justify-content-start text-left "> 
                    <Card>
                        <Row className="m-5">
                            <CardTitle className="text-end">{t('subTitle')}</CardTitle>

                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Image src={img} thumbnail fluid className="h-75" data-aos="flip-left"  data-aos-delay="500"></Image>
                            </Col>
                            <Col sm={8}>                        
                                <CardBody className="justify-content-start text-start p-5 " data-aos="flip-up"  data-aos-delay="500">
                                    <p>
                                        {t('p1')}
                                    </p>
                                    <p>
                                        {t('p2')}   
                                    </p>
                                    <p>
                                        {t('p3')}
                                    </p>

                                </CardBody>
                            </Col>
                        </Row>
                        <Row className="justify-content-start text-start mx-5">
                            <Col sm={8} data-aos="flip-up"  data-aos-delay="500">
                                <p>
                                    {t('p4')} 
                                </p>
                                <p>
                                    {t('p5')}   
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