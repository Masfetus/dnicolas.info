import { Col, Image, Row} from "react-bootstrap";
import React from "react";
import Blur from "react-css-blur";

const imageStyle = {
    objectFit: "cover"
}
function CarouselElement({image, title, description}) {

    return (
        <Row className="justify-content-center text-center">       
            <Col xs={7} className="py-5 align-self-center">
                <Image fluid src={image} style={imageStyle} />
            </Col> 
            <Col className="align-self-center p-5">               
                <h3>
                    {title}
                </h3>
                <p className="justify-content-center full-height">{description}</p>
            </Col>
        </Row>
            )
}

export default CarouselElement;