import {CardGroup, Container, Card, Button, CardHeader, Carousel, Image} from 'react-bootstrap';
import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import santorini from '../assets/img/bricks/santorini1.jpg';
import CarouselImage from "../components/CarouselImage";
import Blur from "react-css-blur";
const title = "Home"

function Home() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = title;
  });
    return (
        <Container>
            <Carousel fade className="h-50">
                <Carousel.Item>
                    <CarouselImage image={santorini}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage image={santorini}/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage image={santorini}/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>


    )
}

export default Home;