import React, { useEffect, useRef, useState } from "react";
import pawnLogo from "../../assets/img/logos/Pawn_logo.png"
import sampLogo from "../../assets/img/logos/samp-logo.png"
import rctdmLogo from "../../assets/img/logos/rctdm-logo.webp"
import { Container, Row, Card, CardTitle, Col, Image, CardBody, ButtonGroup, Button, Accordion, Stack, NavLink } from "react-bootstrap";
import { CodeBlock, atomOneDark, atomOneLight, CopyBlock, vs2015, paraisoDark, paraisoLight, a11yDark, a11yLight } from "react-code-blocks";
import { Link } from "react-scroll";
import { faExternalLink, faChessPawn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWikipediaW } from "@fortawesome/free-brands-svg-icons";

const pageTitle = `DN - Pawn`
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
function PawnLanguage({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className="bg-body-tertiary">
            <Container className='py-5' data-aos="fade-up" data-aos-delay="100">
                <Row className='my-3 ' >
                    <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} border-bottom p-3 text-start my-5`}>
                        Pawn & SA-MP
                    </h2>
                </Row>
                <Row className="justify-content-start text-left my-3"> 
                    <Card>
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
                                        <Accordion.Header className="fw-bold">Introduction</Accordion.Header>
                                        <Accordion.Body>
                                        Disclaimer for chess players, nothing to do with it! In fact, Pawn was formerly named as Small refering to Small-C and its similarities to the C language. Despite its C-like syntax, the process is working differently and each Pawn program is compiled for an abstract machine. CompuPhase (creator of Pawn) defined the keywords as: run-time efficiency, stability, simplicity. In deed, Pawn truly aims to run low-resources programs in microcontrollers for example. The language is, up to this date, free to use and under an Apache License.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Use Cases</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li><span class="fw-bold">Microcontrollers: </span>ARM Cortex M0, LPC2106 or Texas Instrument's MSP430F1611</li>
                                                <li><span class="fw-bold">Spatial: </span> 
                                                The Command and Data Handling System (CDHS) of the ESTCube-1, an Estonian satellite
                                                <a href="https://www.estcube.eu/projekt/ESTCube-1" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-3">See more <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                                <li><span class="fw-bold">Audiocontrollers:</span>
                                                    Programmable audio players - Model H0430, H0440 
                                                    <a href="https://www.compuphase.com/productmp3_en.htm" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">See more <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                    
                                                </li>
                                                <li><span class="fw-bold">Apple: </span>SMALL abstract machine as part of the Apple iPod firmware updates</li>
                                                <li><span class="fw-bold">Network: </span>
                                                    SMALL solution to remotely control a PC via a TCP/IP connection. 
                                                    <a href="https://www.logmein.com/fr/remotelyanywhere" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">See more <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                                <li><span class="fw-bold">Web: </span>
                                                    Solution from PMX allowing web development from Pawn scripts 
                                                    <a href="https://www.pmx.it/software/sws.asp" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">See more <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                                <li><span class="fw-bold">Console Games: </span>Baldur's Gate: Dark Alliance - for PS2, Xbox and Gamecube</li>
                                                <li><span class="fw-bold">MMORPG: </span>
                                                    <a href="http://www.eternal-lands.com/" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Eternal Lands <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a> - MMORPG scriptable with SMALL
                                                     
                                                </li>
                                                <li><span class="fw-bold">San Andreas - Multiplayer: </span>
                                                    A well-known multiplayer mod for GTA San Andreas enabling Pawn scripts to create cores of servers and side-mods. 
                                                    <a href="http://www.sa-mp.com/" className="mx-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">See more <FontAwesomeIcon icon={faExternalLink} size="2xs"/></a>
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Why that much of Pawn?</Accordion.Header>
                                        <Accordion.Body>
                                            Pawn is not only an intriguing language, but also my very first language. It gave me this curiosity of coding, and made me face my first frustrations. I have been developing and learning Pawn for many years before college and keep good memories. The satisfaction of fixing, the appreciation from the users, the progress throughout the journey; all of these aspects bring me back to this language that started it all. Despite the language's downsides, that surely taught me to deal with low resources and pay close attention to optimization.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>More documentation</Accordion.Header>
                                        <Accordion.Body>
                                            If this language aroused curiosity, you will find below a few links to official documentations including the Wikipedia page I maily contributed to.
                                            <Stack direction="horizontal" className="my-3" gap={2}>
                                                <Button variant="secondary" size="sm" href="https://www.compuphase.com/pawn/pawn.htm"><FontAwesomeIcon icon={faChessPawn}/> PAWN Introduction</Button>
                                                <Button variant="secondary" size="sm" href="https://github.com/compuphase/pawn"><FontAwesomeIcon icon={faGithub}/> GitHub Repository</Button>
                                                <Button variant="secondary" size="sm" href="https://fr.wikipedia.org/wiki/Pawn_(langage)"><FontAwesomeIcon icon={faWikipediaW}/> Wikipedia Page</Button>

                                            </Stack>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Code snippet 1: Get Distance between two points</Accordion.Header>
                                        <Accordion.Body className="p-5">
                                            <p>
                                                Here is a code sample, from a gamemode I have been working on. It returns the distance between two sets of coordinates (x, y, z):
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
                                        <Accordion.Header>Code snippet 2: Rebase a number from the hexadecimal base on the decimal one  </Accordion.Header>
                                        <Accordion.Body className="p-5">
                                            <p>
                                                This sample converts a hexadecimal number to a decimal one. In the SA-MP development context, we use it often for color values computing:
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
                        <Row className="m-5">
                            <CardTitle className="text-start border-bottom py-2" id="samp">San Andreas: Multiplayer</CardTitle>
                        </Row>
                        <Image src={sampLogo} fluid className="w-25 mx-auto d-block text-center" data-aos="flip-left"  data-aos-delay="500"></Image>
                        <Row>
                            <Col sm={12}>                        
                                <CardBody className="justify-content-start text-start p-4" data-aos="flip-up"  data-aos-delay="500">
                                <p>
                                    San Andreas Multiplayer is a multiplayer mod allowing people to play online together on a server. This mod is based on the famous GTA San Andreas from Rockstar Games. All of the servers consist of game modes, scripts, and other entities to provide the users with a customized experience.
                                </p>
                                <p>
                                    As part of this mod, I contributed to many gamemodes with truly enjoyed working on it together with friends. You will find below the gamemodes I contributed to.
                                </p>
                                </CardBody>
                                <Card className="p-3">
                                    <CardTitle className="border-bottom p-2">RCTDM - Mode-Libre (Freeroam) </CardTitle>
                                    <Row className="p-3">
                                        <Col sm={4} className="d-flex flex-wrap align-items-center">
                                            <Image fluid src={rctdmLogo} className=""/>

                                        </Col>
                                        <Col sm={8} className="text-start px-5">
                                            <h5 className="text-start">
                                                Mode-Libre? Freeroam?
                                            </h5>
                                            <p>
                                                As you know, SA-MP allows the developers to provide players any kind of experience. That means, various game modes coexist within the SA-MP community such as RPG (RolePlayGame), DM (DeathMatch), Mini-Game, and so on... Freeroam is one of them where the experience is inspired by all of other modes. Thus, some features from RPG are available (jobs, property management, objects & inventory) while excluding the RPG rules and constraints. These features are also combined with DM (DeathMatch) sessions and gang territory captures. In addition, the freeroam mod gives the opportunity of having fun through mini-games, races, stunts, and some other in-game missions.
                                                This way, users are free to play and benefits from any features matching their gameplay.

                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} className="text-start px-5">
                                            <h5 className="text-start">
                                                Birth of the server
                                            </h5>
                                            <p>
                                                This server has a long story since the core was initially developed in 2008. It had been running for many years, until 2014 when it came to an end due to many reasons and turnover within the staff. In parallel to this server, <a href="https://benjamin-wirtz.com/" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Benjamin W.</a> & I started our first steps into Pawn coding and SA-MP development. 
                                                We contributed together to this new gamemode that later led to RCTDM - Mode Libre. The idea was to reborn the villages across San Andreas that were mostly left unused by many servers. This gamemode was released in 2015 and has continously been improved by Benjamin. I took over the development activities starting from 2017, and added features suggested or requested by the community. The experience was enriching since regular updates were made, and I have been well-supported by the staff team.
                                            </p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                        </Row>
                    </Card>
                </Row>
            </Container>
        </div>


    )
}

export default PawnLanguage;