import React, { useEffect } from "react";
import { Container, Image, Badge } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import imgNgpa from "../../assets/img/logos/ngpa.png"
import imgAGCO from "../../assets/img/logos/agco-logo.png"
import imgFendt from "../../assets/img/logos/fendt-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCode, faTools, faVrCardboard, faIndustry} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


const pageTitle = `DN - Experience`
const contentStyleDark= { background: 'rgb(70, 70, 70)', color: '#fff', }
const contentStyleLight= { background: 'rgb(220, 220, 220)', color: '#000' }
const contentArrowStyleDark = { borderRight: "7px solid  rgb(70, 70, 70)" }
const contentArrowStyleLight = { borderRight: "7px solid  rgb(220, 220, 220)"}
const iconStyle = { background: 'rgb(60, 60, 60)', color: '#fff' }
const imageStyle = { display: "block", maxWidth: "100%", height: "auto" }

function ProfessionalTimeline({ theme, setTheme }) {
    const {t} = useTranslation("experiencePage")

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className={`${theme === "dark"? "text-light" : "text-dark"} bg-body-tertiary`} data-aos="fade-up" data-aos-delay="100">
            <Container>
                <h2 className="border-bottom p-3 text-start">{t('title')}</h2>
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
                        <h4 className="vertical-timeline-element-title fw-bold">{t('exp1.title')}</h4>
                        <h5 className="vertical-timeline-element-subtitle">
                            <a href="https://agcocorp.com" className="text-secondary">
                            {t('exp1.location')}
                            </a>
                        </h5>
                        <ul className="m-3">
                            <li>{t('exp1.item1')}</li>
                            <li>{t('exp1.item2')}</li>
                            <li>{t('exp1.item3')}</li>
                            <li>{t('exp1.item4')}</li>

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
                        <h4 className="vertical-timeline-element-title fw-bold">{t('exp2.title')}</h4>
                        <h5 className="vertical-timeline-element-subtitle">
                            <a href="https://agcocorp.com" className="text-secondary">
                            {t('exp2.location')}
                            </a>
                        </h5>
                        <ul className="m-3">
                            <li>{t('exp2.item1')}</li>
                            <li>{t('exp2.item2')}</li>
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
                        <h4 className="vertical-timeline-element-title fw-bold">{t('exp3.title')}</h4>
                        <h5 className="vertical-timeline-element-subtitle">
                            <a href="https://agcocorp.com" className="text-secondary">
                            {t('exp3.location')}
                            </a>
                        </h5>
                        <ul className="m-3">
                            <li>{t('exp3.item1')}</li>
                            <li>{t('exp3.item2')}</li>
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
                        <h3 className="vertical-timeline-element-title">{t('exp4.title')}</h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            <a href="https://agcocorp.com" className="text-secondary">
                            {t('exp4.location')}
                            </a>
                        </h5>
                        <ul className="m-3">
                            <li>{t('exp4.item1')}</li>
                            <li>{t('exp4.item2')}</li>
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
                        <h3 className="vertical-timeline-element-title">{t('exp5.title')}</h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            <a href="https://ngpa.com/" className="text-secondary">
                            {t('exp5.location')}
                            </a>
                        </h5>
                        <ul className="m-3">
                            <li>{t('exp5.item1')}</li>
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
            </Container>
        </div>


    )
}

export default ProfessionalTimeline;