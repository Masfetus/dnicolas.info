import React, { useEffect, useRef, useState } from "react";
import pawnLogo from "../../assets/img/logos/Pawn_logo.png"
import sampLogo from "../../assets/img/logos/samp-logo.png"
import rctdmLogo from "../../assets/img/logos/rctdm-logo.webp"
import { Container, Row, Card, CardTitle, Col, Image, CardBody, ButtonGroup, Button, Accordion, Stack, NavLink } from "react-bootstrap";
import { CodeBlock, atomOneDark, atomOneLight, CopyBlock, vs2015, paraisoDark, paraisoLight, a11yDark, a11yLight } from "react-code-blocks";
import { Element, scroller } from "react-scroll";
import { faExternalLink, faChessPawn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import YouTube from "react-youtube";
import samp from "../../assets/img/samp/Sa-mp-007.webp"
import samp1 from "../../assets/img/samp/sa-mp-112.png"
import samp2 from "../../assets/img/samp/unknown.png"
import samp3 from "../../assets/img/samp/Sa-mp-002-0.webp"
import samp4 from "../../assets/img/samp/Sa-mp-046.webp"
import sao1 from "../../assets/img/samp/sao1.png"
import surviveall from "../../assets/img/logos/surviveall-logo.png"

import { Carousel } from "react-responsive-carousel";
import TextLink from "../../components/TextLink";
import { useTranslation } from "react-i18next";

const pageTitle = `DN - Pawn & SA-MP`
const snippet1 = 
`Float:GetDistance( Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2 )
{
	new Float:distance = floatsqroot( floatpower( (x1 - x2),2) + floatpower( (y1 - y2), 2) + floatpower( (z1 - z2), 2) );
	return distance;
}`
const snippet2=`
HexToInt(string[])
{
    if(!string[0]) return 0;
    new cur = 1, res = 0;
    for(new i = strlen(string); i > 0; i--)
    {
        res += cur * (string[i - 1] - ((string[i - 1] < 58) ? (48) : (55)));
        cur = cur * 16;
    }
    return res;
}`
const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };
function _onReady(event) {
    event.target.pauseVideo();
}
function PawnLanguage({ theme, setTheme }) {
    const {t, i18n} = useTranslation("pawnPage")

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
        console.log(window.location.hash)
        if(window.location.hash === "#samp") {
            console.log("scrolling")
            scroller.scrollTo('samp', {
                smooth: true,
                containerId: 'containerSamp'
            })
        }
    });
    
    return (
        <div className="bg-body-tertiary py-1">
            <Container  data-aos="fade-up" data-aos-delay="100">
                <Row className='my-3 ' >
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} border-bottom p-3 text-start my-5`}>
                        Pawn & SA-MP
                    </h2>
                </Row>
                <Row className="justify-content-start text-left my-3"> 
                    <Card className="py-3" id="cardId">
                        <Row className="m-5">
                            <CardTitle className="text-start border-bottom py-3">Introduction</CardTitle>

                        </Row>
                        <Row>
                            <Col sm={4} className="d-flex flex-wrap align-items-center text-center">
                                <Image src={pawnLogo} fluid className="h-50 mx-auto d-block text-center" data-aos="flip-left"  data-aos-delay="500"></Image>
                            </Col>
                            <Col sm={8}>                        
                                <CardBody className="justify-content-start text-start " data-aos="flip-up"  data-aos-delay="500">
                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="fw-bold">{t('section1.title')}</Accordion.Header>
                                        <Accordion.Body>
                                        {t('section1.text')}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>{t('section2.title')}</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>{t('section2.li1')}</li>
                                                <li>{t('section2.li2')}
                                                <a href="https://www.estcube.eu/projekt/ESTCube-1" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-3">{t('section2.seeMore')} <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                                <li>{t('section2.li3')}
                                                    <a href="https://www.compuphase.com/productmp3_en.htm" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{t('section2.seeMore')} <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                    
                                                </li>
                                                <li>{t('section2.li4')}</li>
                                                <li>{t('section2.li5')} 
                                                    <a href="https://www.logmein.com/fr/remotelyanywhere" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{t('section2.seeMore')} <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                                <li>{t('section2.li6')} 
                                                    <a href="https://www.pmx.it/software/sws.asp" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{t('section2.seeMore')} <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                                <li>{t('section2.li7')}</li>
                                                <li>MMORPG: <a href="http://www.eternal-lands.com/" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Eternal Lands <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a> - {t('section2.li8')}
                                                     
                                                </li>
                                                <li>{t('section2.li9')} 
                                                    <a href="http://www.sa-mp.com/" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{t('section2.seeMore')} <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>{t('section3.title')}</Accordion.Header>
                                        <Accordion.Body>
                                        {t('section3.text')}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>{t('section4.title')}</Accordion.Header>
                                        <Accordion.Body>
                                        {t('section4.text')}
                                            <Stack direction="horizontal" className="my-3" gap={2}>
                                                <Button variant="secondary" size="sm" href="https://www.compuphase.com/pawn/pawn.htm"><FontAwesomeIcon icon={faChessPawn}/> PAWN Introduction</Button>
                                                <Button variant="secondary" size="sm" href="https://github.com/compuphase/pawn"><FontAwesomeIcon icon={faGithub}/> GitHub Repository</Button>
                                                <Button variant="secondary" size="sm" href="https://fr.wikipedia.org/wiki/Pawn_(langage)"><FontAwesomeIcon icon={faWikipediaW}/> Wikipedia Page (fr)</Button>

                                            </Stack>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>{t('section5.title')}</Accordion.Header>
                                        <Accordion.Body className="p-5">
                                            <p>
                                            {t('section5.text')}
                                            </p>
                                            <div className="border">
                                                <CopyBlock
                                                    text={snippet1}
                                                    language="c"
                                                    showLineNumbers={false}
                                                    customStyle={{fontFamily: 'Fira Code'}}
                                                    theme={theme === "dark"? atomOneDark: atomOneLight}
                                                    codeBlock
                                                />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>{t('section6.title')}  </Accordion.Header>
                                        <Accordion.Body className="p-5">
                                            <p>
                                            {t('section6.text')}
                                            </p>
                                            <div className="border">
                                                <CopyBlock
                                                    text={snippet2}
                                                    language="c"
                                                    showLineNumbers={false}
                                                    customStyle={{fontFamily: 'Fira Code'}}
                                                    theme={theme === "dark"? atomOneDark: atomOneLight}
                                                    codeBlock
                                                />
                                            </div>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                </CardBody>

                            </Col>
                        </Row>
                        <Row id="containerSamp" className="m-5">
                            <Element name="samp">
                                <CardTitle className="text-start border-bottom py-2" >San Andreas: Multiplayer</CardTitle>

                            </Element>
                        </Row>
                        <Image src={sampLogo} fluid className="w-25 mx-auto d-block text-center" data-aos="flip-left"  data-aos-delay="500"></Image>
                        <Row>
                            <Col sm={12}>                        
                                <CardBody className="justify-content-start text-start p-4" data-aos="flip-up"  data-aos-delay="500">
                                <p>
                                {t('section7.p1')}
                                </p>
                                <p>
                                {t('section7.p2')}
                                </p>
                                </CardBody>
                                <Accordion >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> 
                                            <h5 className="border-bottom p-2 fw-bold">{t('section8.title')}</h5> 
                                            <Image fluid src={rctdmLogo} className="mx-3 w-25"/>
                                        </Accordion.Header>
                                        <Accordion.Body
                                            data-aos="fade-left">
                                        <Row className="p-3" data-aos="fade-up" data-aos-delay="100">
                                            <Col sm={4} className="d-flex flex-wrap align-items-center">
                                                <Image fluid thumbnail src={samp} className=""/>

                                            </Col>
                                            <Col sm={8} className="text-start px-5">
                                                <h5 className="text-start">
                                                {t('section8.intro.title')}
                                                </h5>
                                                <p>
                                                {t('section8.intro.p1')}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row data-aos="fade-up" data-aos-delay="100">  
                                            <Col sm={8} className="text-start px-5">
                                                <h5 className="text-start">
                                                {t('section8.birth.title')}
                                                </h5>
                                                <p>
                                                {t('section8.birth.p1-1')}<TextLink href="https://benjamin-wirtz.com/" text="Benjamin W."/> {t('section8.birth.p1-2')}
                                                </p>
                                                <p>
                                                {t('section8.birth.p2')}
                                                </p>
                                                <TextLink href="https://rctdm.fandom.com/fr/wiki/Wiki_Mode_Libre_-_Serveur_Fun" text="See the wiki (fr)"/>
                                            </Col>
                                            <Col sm={4}>
                                                <Image fluid src={samp1} className=""/>

                                            </Col>
                                        </Row>
                                        <Row className="p-3" data-aos="fade-up" data-aos-delay="100">
                                            <h5 className="border-bottom text-start p-3">Gallery</h5>
                                            <Col sm={4}>
                                                <Image thumbnail fluid src={samp2} className=""/>

                                            </Col>
                                            <Col sm={4}>
                                                <Image thumbnail fluid src={samp4} className=""/>


                                            </Col>
                                            <Col sm={4}>
                                                <Image thumbnail fluid src={samp3} className=""/>

                                            </Col>
                                        </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header > 
                                            <h5 className="border-bottom p-2 fw-bold">Survive-All</h5> 
                                            <Image fluid src={surviveall} className="w-25 m-2"/>

                                        </Accordion.Header>
                                        <Accordion.Body>
                                        <Row className="p-3">
                                            <Col sm={4} className="d-grid align-content-middle">
                                                <Image thumbnail fluid src={surviveall} className=""/>

                                            </Col>
                                            <Col sm={8} className="text-start px-5">
                                                <h5>
                                                {t('section9.server.title')}
                                                </h5>
                                                <p>
                                                {t('section9.server.p1')}
                                                </p>
                                                <p>
                                                {t('section9.server.p2')} 
                                                 </p>
                                            </Col>
                                        </Row>
                                        <Row className="p-3">
                                            <Col sm={12} className="text-start px-5">
                                                <p>
                                                {t('section9.server.p3-1')} <TextLink href="https://benjamin-wirtz.com/article/2" text={t('section9.server.p3-2')}/>
                                                {t('section9.server.p3-3')}  
                                                </p>
                                                <div className="d-flex justify-content-center">
                                                    <YouTube videoId="e8Lf97ALwfE" opts={options} onReady={_onReady}/>

                                                </div>
                                            </Col>
                                        </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header > 
                                            <h5 className="border-bottom p-2 fw-bold">San Andreas Online</h5> 
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        <Row className="p-3">
                                            <Col sm={4}>
                                                <Image thumbnail fluid src={sao1} className=""/>

                                            </Col>
                                            <Col sm={8} className="text-start px-5">
                                                <h5>
                                                {t('section10.concept.title')}
                                                </h5>
                                                <p>
                                                {t('section10.concept.p1')}   
                                                </p>
                                                <p>
                                                {t('section10.concept.p2')}   
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={8} className="text-start px-5">
                                                
                                            </Col>
                                            <Col sm={4}>

                                            </Col>
                                        </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    </Accordion>
                            </Col>

                        </Row>
                    </Card>
                </Row>
            </Container>
        </div>


    )
}

export default PawnLanguage;