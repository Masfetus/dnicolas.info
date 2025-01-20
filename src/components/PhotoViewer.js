import'maplibre-gl';
import React, {useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import { Card, Container, Image, Modal, Row } from 'react-bootstrap';



function PhotoViewer ({ theme, visible, onClose, images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
  return (

    <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={visible}
        onHide={() => {
            setCurrentIndex(0)
            onClose()
        }}
        >
        <Card data-bs-theme={theme}>

            <Modal.Body>
                <Carousel
                    autoPlay
                    emulateTouch
                    infiniteLoop
                    swipeable
                    showThumbs={false}
                    showIndicators={false}
                    useKeyboardArrows
                    stopOnHover
                    onChange={(index) => setCurrentIndex(index)}
                    className=''>
                    {images.map((item) => {
                        return (
                            <Row className='d-flex flex-wrap text-center h-100'>
                                <Image style={{resize:"vertical", maxHeight: "40vw"}} className='m-auto align-middle w-auto '  thumbnail fluid src={`/maps-pics/${item.src}`}/>
                            </Row>
                                )
                    })}
                </Carousel>
            </Modal.Body>

            <Modal.Footer className='justify-content-center'>
                <p className='legend'>{images[currentIndex].legend}</p>
            </Modal.Footer>            
        </Card>

    </Modal>

  )
};

export default PhotoViewer;