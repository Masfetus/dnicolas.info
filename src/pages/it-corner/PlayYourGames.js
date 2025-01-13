import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody, Col, Container, Image, Row } from "react-bootstrap";
import pyg from "../../assets/img/icons/pyg.png"
import pyg_header from "../../assets/img/logos/Banniere_PYG_anime_2.gif"
import agario from "../../assets/img/pyg/agario.png"
import bot_discord1 from "../../assets/img/pyg/bot discord.png"
import bot_discord2 from "../../assets/img/pyg/chat-agario.png"


import TextLink from "../../components/TextLink";


const pageTitle = `DN - Play Your Games`

function PlayYourGames({ theme, setTheme }) {

    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div className='bg-body-tertiary py-1' data-aos="fade-up" data-aos-delay="100">
            <Container>
                <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} border-bottom p-3 text-start my-5`}>
                    Play Your Games
                </h2>  
                <Card className="my-4 p-4 text-start">
                    <Image thumbnail fluid src={pyg_header}/>
                    <Row>
                        <Col sm={4} className="d-flex flex-wrap align-items-center text-center">
                            <Image src={pyg} fluid className="h-75 mx-auto d-block text-center" data-aos="flip-left"  data-aos-delay="500"></Image>
                        </Col>
                        <Col sm={8} >
                            <CardBody>
                                <h4 className="text-start border-bottom py-2">
                                    Introduction
                                </h4>
                                <p>
                                    Play Your Games is a community created in 2017 out of the SA-MP server we had (<TextLink href="/it/pawn" text="go to the page"/>). As part of the growing Discord's community and the features that enabled more possibilities, we decided to open this Discord server to host our community by providing a place to discuss apart from the SA-MP server. 
                                </p>
                                <p>
                                    The initial idea was to get this server supporting the SA-MP server. However, as the SA-MP's community has been decreasing and people were turning towards other games, it made sense to expand the scope and welcome all players coming from all kind of games. We intended to make this community as a gaming placeholder where people had the opportunity to play together, share advice.
                                    Thus, many games were represented among the community such as Rocket League, Eco, Minecraft, Ark, GTA V, and many others. Our role has consequently changed. We committed to entertaining the community as much as possible through different ways. Online servers (Ark, Minecraft, Gta), offline & online events, gaming sessions; we really wanted to unite games' communities into a single one.
                                </p>
                                
                            </CardBody>   
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p>
                                The community consisted of more than 150 players splitted on the different activities we were offering. In order to manage such server, a staff team of 10 people was present and has been assigned different roles: Administrators, Developers, Event Organizers, Moderators. Each of them was highly important to keep the server active respectfully and in a pleasant atmosphere.
                                I was part of this team as an Administrator/Developer and truly enjoyed working under such a team spirit. Everyone was involved in making decisions to move forward. 
                            </p>
                            <p>
                                The success of our community was real and required a demanding amount of time from every staff member. But it also pushed us to think about new ways of entertainment, through partnerships with other communities for example. Being a partner of another Discord server brought us another vision on how to handle a community but also a wider range of players. In that way, new kinds of events were
                                organized like inter-community gaming sessions or tournaments.
                            </p>
                        </Col>

                    </Row>
                </Card>
                <Card className="my-4 p-2 text-start">
                    <Row>

                        <Col sm={7} >
                            <CardBody>
                                <h4 className="border-bottom py-2">
                                    Agario & Servers
                                </h4>
                                <p>
                                    As our main goal was to entertain the community organizing events & sessions, we also deployed a couple of game servers hosted on a dedicated machine. I took care of the servers' deployments as well as the system administration to keep them alive. 
                                </p>
                                <p>
                                    Agario is a good example of the server we made available for the community. Even if the development of the game was not made by ourselves (<TextLink href="https://github.com/owenashurst/agar.io-clone" text="Github Repo"/>), it remained a place to gather community and to organize events around.  
                                </p>
                            </CardBody>   
                        </Col>
                        <Col sm={5} className="d-flex flex-wrap align-items-center text-center">
                            <Image src={agario} fluid className="mx-auto d-block text-center" data-aos="flip-left"  data-aos-delay="500"></Image>
                        </Col>
                    </Row>
                </Card>
            </Container>
      
            
        </div>


    )
}

export default PlayYourGames;