import { Badge, Button, Card, Col, Image, Row} from "react-bootstrap";
import React from "react";
import { useTranslation } from "react-i18next";
import { faArrowRight, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardStyle = {
    minWidth: '22rem', 
    height: '100%'
}
const cardImageStyle = {
    width: "100%",
    height: "15vw",
    objectFit: "cover"
}
function CardElement({image, title, description, btnRef, inWork, t}) {
    return (
        <Card style={cardStyle} className='' data-aos='zoom-in' data-aos-delay="200"> 
            <Card.Img src={image} className="h-50" style={cardImageStyle} />
            <Card.Body className='d-flex flex-column text-justify-bottom'>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="secondary" className="mt-auto mx-auto" size="m" disabled={inWork} href={btnRef}>{t('learnMore')} {inWork? <Badge pill bg="warning">In work</Badge> : <FontAwesomeIcon icon={faArrowRight}/>}  </Button>
            </Card.Body>
        </Card>
            )
}

export default CardElement;