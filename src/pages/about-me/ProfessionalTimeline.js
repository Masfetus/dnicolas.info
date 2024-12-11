import React, { useEffect, useRef, useState } from "react";
import { Container, Image, Badge } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import imgNgpa from "../../assets/img/logos/ngpa.png"
import imgAGCO from "../../assets/img/logos/agco-logo.png"
import imgFendt from "../../assets/img/logos/fendt-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCode, faTools, faVrCardboard, faIndustry} from "@fortawesome/free-solid-svg-icons";


const pageTitle = `DN - Experience`
const contentStyleDark= { background: 'rgb(70, 70, 70)', color: '#fff', }
const contentStyleLight= { background: 'rgb(220, 220, 220)', color: '#000' }
const contentArrowStyleDark = { borderRight: "7px solid  rgb(70, 70, 70)" }
const contentArrowStyleLight = { borderRight: "7px solid  rgb(220, 220, 220)"}
const iconStyle = { background: 'rgb(60, 60, 60)', color: '#fff' }
const imageStyle = { display: "block", maxWidth: "100%", height: "auto" }

function ProfessionalTimeline({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className={`${theme === "dark"? "text-light" : "text-dark"} bg-body-tertiary`} data-aos="fade-up" data-aos-delay="100">
            <h2>Experience</h2>
            <VerticalTimeline lineColor={theme === "dark"? "white" : "black"}>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    contentStyle={theme === "dark"? contentStyleDark : contentStyleLight}
                    contentArrowStyle={theme === "dark"? contentArrowStyleDark : contentArrowStyleLight}
                    date="2023 - Now"
                    iconStyle={iconStyle}
                    icon={<FontAwesomeIcon icon={faIndustry}/>}

                >
                    <Image fluid src={imgFendt} className="my-3" style={imageStyle} />
                    <h4 className="vertical-timeline-element-title fw-bold">IT Analyst</h4>
                    <h5 className="vertical-timeline-element-subtitle">
                        <a href="https://agcocorp.com" className="text-secondary">
                            AGCO Corporation, Marktoberdorf, Germany
                        </a>
                    </h5>
                    <ul className="m-3">
                        <li>IT support on the 3D visualization area of Windchill</li>
                        <li>Developed Thingworx applications consuming manufacturing data for reporting purposes</li>
                        <li>Coordinated communication between IT teams and business teams</li>
                        <li>Designed architectures to build pipelines relying on our PLM and external systems</li>

                    </ul>
                    <Container>
                        <Badge bg="secondary" className="mx-2">Architecture</Badge>
                        <Badge bg="secondary" className="mx-2">PLM</Badge>
                        <Badge bg="secondary" className="mx-2">Windchill</Badge>
                        <Badge bg="secondary" className="mx-2">Thingworx</Badge>
                        <Badge bg="secondary" className="mx-2">JavaScript</Badge>
                        <Badge bg="secondary" className="mx-2">Communication</Badge>
                        <Badge bg="secondary" className="mx-2">SAFe</Badge>
                        <Badge bg="secondary" className="mx-2">Azure DevOps</Badge>
                    </Container>
                </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    contentStyle={theme === "dark"? contentStyleDark : contentStyleLight}
                    contentArrowStyle={theme === "dark"? contentArrowStyleDark : contentArrowStyleLight}
                    date="2023"
                    iconStyle={iconStyle}
                    icon={<FontAwesomeIcon icon={faVrCardboard}/>}

                >
                    <Image fluid src={imgFendt} className="my-3" style={imageStyle} />
                    <h4 className="vertical-timeline-element-title fw-bold">IT Engineer Industry 4.0 - Internship</h4>
                    <h5 className="vertical-timeline-element-subtitle">
                        <a href="https://agcocorp.com" className="text-secondary">
                            AGCO Corporation, Marktoberdorf, Germany
                        </a>
                    </h5>
                    <ul className="m-3">
                        <li>Designed solutions to enable 3D data pipelines connected to different systems: PLM, MES, AR tools</li>
                        <li>Cross-site workshop to gather business requirements from the worlwide quality departments</li>
                    </ul>
                    <Container>
                        <Badge bg="secondary" className="mx-2">Architecture</Badge>
                        <Badge bg="secondary" className="mx-2">PLM</Badge>
                        <Badge bg="secondary" className="mx-2">Windchill</Badge>
                        <Badge bg="secondary" className="mx-2">Vuforia</Badge>
                        <Badge bg="secondary" className="mx-2">SAFe - Agile</Badge>
                    </Container>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    contentStyle={theme === "dark"? contentStyleDark : contentStyleLight}
                    contentArrowStyle={theme === "dark"? contentArrowStyleDark : contentArrowStyleLight}
                    date="2022 - 2023"
                    iconStyle={iconStyle}
                    icon={<FontAwesomeIcon icon={faTools}/>}

                >
                    <Image fluid src={imgAGCO} className="my-3" style={imageStyle} />
                    <h4 className="vertical-timeline-element-title fw-bold">IT MES Developer - Apprenticeship</h4>
                    <h5 className="vertical-timeline-element-subtitle">
                        <a href="https://agcocorp.com" className="text-secondary">
                            AGCO Corporation, Beauvais, France
                        </a>
                    </h5>
                    <ul className="m-3">
                        <li>Analyzed production requirements and developed features in the MES</li>
                        <li>Developed standalone app to register logistic trucks at the entrance</li>
                    </ul>
                    <Container>
                        <Badge bg="secondary" className="mx-2">C#</Badge>
                        <Badge bg="secondary" className="mx-2">WPF</Badge>
                        <Badge bg="secondary" className="mx-2">MES</Badge>
                        <Badge bg="secondary" className="mx-2">MS-SQL</Badge>
                    </Container>
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    contentStyle={theme === "dark"? contentStyleDark : contentStyleLight}
                    contentArrowStyle={theme === "dark"? contentArrowStyleDark : contentArrowStyleLight}
                    date="2020 - 2022"
                    iconStyle={iconStyle}
                    icon={<FontAwesomeIcon icon={faCube}/>}

                >
                    <Image fluid src={imgAGCO} className="my-3" style={imageStyle} />
                    <h3 className="vertical-timeline-element-title">IT Engineer - Apprenticeship</h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        <a href="https://agcocorp.com" className="text-secondary">
                            AGCO Corporation, Beauvais, France
                        </a>
                    </h5>
                    <ul className="m-3">
                        <li>Developed 3D application based on the Unity Engine connected to internal APIs</li>
                        <li>Continuous technology monitoring on AR/VR/OCR</li>
                    </ul>
                    <Container>
                        <Badge bg="secondary" className="mx-2">Unity</Badge>
                        <Badge bg="secondary" className="mx-2">C#</Badge>
                        <Badge bg="secondary" className="mx-2">ASP.NET</Badge>
                        <Badge bg="secondary" className="mx-2">Python</Badge>
                    </Container>
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work text-start"
                    contentStyle={theme === "dark"? contentStyleDark : contentStyleLight}
                    contentArrowStyle={theme === "dark"? contentArrowStyleDark : contentArrowStyleLight}
                    date="2020"
                    iconStyle={iconStyle}
                    icon={<FontAwesomeIcon icon={faCode}/>}

                >
                    <Image fluid src={imgNgpa} className="m-2" />
                    <h3 className="vertical-timeline-element-title">Fullstack Web Developer - Internship</h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        <a href="https://ngpa.com/" className="text-secondary">
                            Media Data Services - ISAGRI, Beauvais, France 
                        </a>
                    </h5>
                    <ul className="m-3">
                        <li>Developed web apps displaying charts on tractor registration data</li>
                    </ul>
                    <Container>
                        <Badge bg="secondary" className="mx-2">JavaScript</Badge>
                        <Badge bg="secondary" className="mx-2">ASP.NET</Badge>
                        <Badge bg="secondary" className="mx-2">C#</Badge>
                        <Badge bg="secondary" className="mx-2">MS-SQL</Badge>
                        <Badge bg="secondary" className="mx-2">Agile</Badge>
                        <Badge bg="secondary" className="mx-2">Azure DevOps</Badge>
                    </Container>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
                </VerticalTimeline>
        </div>


    )
}

export default ProfessionalTimeline;