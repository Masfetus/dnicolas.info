import { Image} from "react-bootstrap";
import React from "react";
import Blur from "react-css-blur";

function CarouselImage({image}) {

    return (
            <Image src={image} thumbnail borderRadius="20" className="d-block w-100"/>
    )
}

export default CarouselImage;