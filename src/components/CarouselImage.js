import { Image} from "react-bootstrap";
import React from "react";
import Blur from "react-css-blur";

function CarouselImage({image}) {

    return (
        <Blur radius="3px">
            <Image src={image} borderRadius="20" className="d-block w-100"/>
        </Blur>
    )
}

export default CarouselImage;