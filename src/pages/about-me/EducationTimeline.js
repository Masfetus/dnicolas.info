import React, { useEffect, useRef, useState } from "react";
import { Row, Image, Badge, Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import imgUTC from "../../assets/img/logos/utc-logo.png"
import imgIUT from "../../assets/img/logos/iut-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from "@fortawesome/free-solid-svg-icons";


const pageTitle = `DN - Experience`
const contentStyleDark= { background: 'rgb(70, 70, 70)', color: '#fff', }
const contentStyleLight= { background: 'rgb(220, 220, 220)', color: '#000' }
const contentArrowStyleDark = { borderRight: "7px solid  rgb(70, 70, 70)" }
const contentArrowStyleLight = { borderRight: "7px solid  rgb(220, 220, 220)"}
const iconStyle = { background: 'rgb(60, 60, 60)', color: '#fff' }
const imageStyle = { display: "block", maxWidth: "100%", height: "auto" }

function EducationTimeline({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className={`${theme === "dark"? "text-light" : "text-dark"} bg-body-tertiary`} data-aos="fade-up" data-aos-delay="100">
            <h2>Education</h2>
            <VerticalTimeline lineColor={theme === "dark"? "white" : "black"}>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    contentStyle={theme === "dark"? contentStyleDark : contentStyleLight}
                    contentArrowStyle={theme === "dark"? contentArrowStyleDark : contentArrowStyleLight}
                    date="2020 - 2023"
                    iconStyle={iconStyle}
                    icon={<FontAwesomeIcon icon={faUniversity}/>}

                >
                    <Image fluid src={imgUTC} className="my-3" style={imageStyle} />
                    <h4 className="vertical-timeline-element-title fw-bold">Engineering Degree in Computer Science</h4>
                    <h5 className="vertical-timeline-element-subtitle">
                        <a href="https://www.utc.fr/en/courses-and-training/the-utc-engineering-diploma/computer-sciences-and-engineering-gi/" className="text-secondary">
                            Université de Technologie de Compiègne, Compiègne, France
                        </a>
                    </h5>
                    <ul className="m-3">
                        <li>Computer Engineering, apprenticeship (dual-program)</li>
                    </ul>
                    <Container>
                        <Badge bg="secondary" className="mx-2">Network</Badge>
                        <Badge bg="secondary" className="mx-2">Architecture</Badge>
                        <Badge bg="secondary" className="mx-2">IoT</Badge>
                        <Badge bg="secondary" className="mx-2">OOP</Badge>
                        <Badge bg="secondary" className="mx-2">UML</Badge>
                        <Badge bg="secondary" className="mx-2">QA</Badge>
                        <Badge bg="secondary" className="mx-2">Project Management</Badge>
                    </Container>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    contentStyle={theme === "dark"? contentStyleDark : contentStyleLight}
                    contentArrowStyle={theme === "dark"? contentArrowStyleDark : contentArrowStyleLight}
                    date="2018 - 2020"
                    iconStyle={iconStyle}
                    icon={<FontAwesomeIcon icon={faUniversity}/>}

                >
                    <Image fluid src={imgIUT} className="my-3" style={imageStyle} />
                    <h4 className="vertical-timeline-element-title fw-bold">IT Bachelor Degree</h4>
                    <h5 className="vertical-timeline-element-subtitle">
                        <a href="https://www.iut-amiens.fr/" className="text-secondary">
                            Institut Universitaire de Technologie, Amiens, France
                        </a>
                    </h5>
                    <ul className="m-3">
                        <li>Technical Bachelor Degree</li>
                    </ul>
                    <Container>
                        <Badge bg="secondary" className="mx-2">Fundamentals</Badge>
                        <Badge bg="secondary" className="mx-2">Coding</Badge>
                        <Badge bg="secondary" className="mx-2">DB</Badge>
                        <Badge bg="secondary" className="mx-2">Embedded Hardware</Badge>
                    </Container>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
                </VerticalTimeline>
        </div>


    )
}

export default EducationTimeline;