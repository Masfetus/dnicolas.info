import React, { useEffect, useRef, useState } from "react";
import anvers from "../../assets/img/bricks/anvers.png"
import berlin from "../../assets/img/bricks/berlin.png"
import london from "../../assets/img/bricks/london.png"
import nyc from "../../assets/img/bricks/nyc.png"
import paris from "../../assets/img/bricks/paris.png"
import tokyo from "../../assets/img/bricks/tokyo.png"
import vegas from "../../assets/img/bricks/vegas.png"
import venice from "../../assets/img/bricks/venice.png"
import sf from "../../assets/img/bricks/san-francisco.png"
import dubai from "../../assets/img/bricks/dubai.png"
import sydney from "../../assets/img/bricks/sydney.png"


import minecraft from "../../assets/img/bricks/minecraft.png"
import hogwarts from "../../assets/img/bricks/hogwarts.png"
import butterfly from "../../assets/img/bricks/butterfly.png"


import arc_triomphe from "../../assets/img/bricks/arc-triomphe.png"
import eiffel from "../../assets/img/bricks/eiffel.png"
import notre_dame from "../../assets/img/bricks/notre-dame.png"
import pisaTower from "../../assets/img/bricks/pisa-tower.png"
import santorini from "../../assets/img/bricks/santorini.png"
import louvre from "../../assets/img/bricks/louvre.png"


import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Container, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import CarouselElement from "../../components/CarouselElement";
import { useTranslation } from "react-i18next";


const pageTitle = `DN - Bricks`


function BrickPage({ theme, setTheme }) {
    const {t, i18n} = useTranslation("bricksPage")
    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
    });
    
    return (
        <div data-bs-theme={theme} className={`${theme === "dark"? "text-light": "text-dark"} bg-body-tertiary`} data-aos="fade-up" data-aos-delay="100">
            <Container className="container-fluid p-5" data-aos="zoom-in-up" data-aos-delay="100">
                <h2 className="my-5 p-3 text-start border-bottom">{t("section1.title")}</h2>
                <Carousel
                    autoPlay
                    emulateTouch
                    infiniteLoop
                    showStatus={false}
                    swipeable
                    useKeyboardArrows
                    stopOnHover
                    data-aos="zoom-in-up"
                    className="border">
                    <CarouselElement image={anvers} title={t("section1.item1.title")} description={t("section1.item1.description")} />
                    <CarouselElement image={berlin} title={t("section1.item2.title")} description={t("section1.item2.description")} />
                    <CarouselElement image={london} title={t("section1.item3.title")} description={t("section1.item3.description")}/>
                    <CarouselElement image={nyc} title={t("section1.item4.title")} description={t("section1.item4.description")}/>
                    <CarouselElement image={paris} title={t("section1.item5.title")} description={t("section1.item5.description")}/>
                    <CarouselElement image={tokyo} title={t("section1.item6.title")} description={t("section1.item6.description")}/>
                    <CarouselElement image={vegas} title={t("section1.item7.title")} description={t("section1.item7.description")}/>
                    <CarouselElement image={venice} title={t("section1.item8.title")} description={t("section1.item8.description")}/>
                    <CarouselElement image={sydney} title={t("section1.item9.title")} description={t("section1.item9.description")}/>
                    <CarouselElement image={sf} title={t("section1.item10.title")} description={t("section1.item10.description")}/>
                    <CarouselElement image={dubai} title={t("section1.item11.title")} description={t("section1.item11.description")}/>

                </Carousel>
            </Container>
            <Container className="container-fluid p-5" data-aos="zoom-in-up" data-aos-delay="100">
                <h2 className="my-5 p-3 text-start border-bottom">{t("section2.title")}</h2>
                <Carousel
                    autoPlay
                    emulateTouch
                    infiniteLoop
                    showStatus={false}
                    swipeable
                    useKeyboardArrows
                    stopOnHover
                    
                    className="border">
                    <CarouselElement image={arc_triomphe} title={t("section2.item1.title")} description={t("section2.item1.description")} />
                    <CarouselElement image={eiffel} title={t("section2.item2.title")} description={t("section2.item2.description")} />
                    <CarouselElement image={notre_dame} title={t("section2.item3.title")} description={t("section2.item3.description")}/>
                    <CarouselElement image={pisaTower} title={t("section2.item4.title")} description={t("section2.item4.description")}/>
                    <CarouselElement image={santorini} title={t("section2.item5.title")} description={t("section2.item5.description")}/>
                    <CarouselElement image={louvre} title={t("section2.item6.title")} description={t("section2.item6.description")}/>

                </Carousel>
            </Container>
            <Container className="container-fluid p-5">
                <h2 className="my-5 p-3 text-start border-bottom">{t("section3.title")}</h2>
                <Carousel
                    autoPlay
                    emulateTouch
                    infiniteLoop
                    showStatus={false}
                    swipeable
                    useKeyboardArrows
                    stopOnHover
                    className="border">
                    <CarouselElement image={minecraft} title={t("section3.item1.title")} description={t("section3.item1.description")} />
                    <CarouselElement image={hogwarts} title={t("section3.item2.title")} description={t("section3.item2.description")} />
                    <CarouselElement image={butterfly} title={t("section3.item3.title")} description={t("section3.item3.description")} />

                </Carousel>
            </Container>
        </div>


    )
}

export default BrickPage;