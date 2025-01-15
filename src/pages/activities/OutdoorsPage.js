import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Modal, Row } from "react-bootstrap";
import MapElement from "../../components/MapElement";

import maplibregl from "maplibre-gl";
import { PhotoSlider, PhotoView } from "react-photo-view";
const iconSize = [1, 1]
const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                imageURL: "matala.jpg",
                images: ["matala.jpg"],
                iconSize: iconSize
            },
            geometry: {
                type: 'Point',
                coordinates: [24.749451, 34.994965]
            }
        },
    ]
};

const pageTitle = `DN - Outdoors`

function OutdoorsPage({ theme, setTheme }) {
    const [markerClicked, setMarkerClicked] = useState(geojson.features[0]);
    const [visible, setVisible] = useState(false)
    const mapIsReadyCallback = (map) => {
        
        geojson.features.forEach((marker) => {
            // create a DOM element for the marker
            const el = document.createElement('img');
            el.className = 'marker';
            el.style.backgroundImage = `url('/maps-pics/${marker.properties.imageURL}')`
            el.style.backgroundRepeat = 'no-repeat'
            el.style.backgroundSize = 'cover'
            el.style.width = `${marker.properties.iconSize[0]}vw`;
            el.style.height = `${marker.properties.iconSize[1]}vw`;
            el.addEventListener('click', () => {
                setMarkerClicked(marker)
                setVisible(true)
            })
            // add marker to map
            new maplibregl.Marker({element: el})
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        })
        console.log("Map loaded")
    }
    useEffect(() => {
        // Update the document title using the browser API
        document.title = pageTitle;
        console.log(markerClicked)
    });
    
    return (
        <div className='bg-body-tertiary pb-3' data-aos="fade-up" data-aos-delay="100">
            <Container className="pb-3">
                <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} border-bottom p-3 text-start my-5`}>
                    Interactive Gallery
                </h2>  
                <MapElement mapIsReadyCallback={mapIsReadyCallback}/>
                <PhotoSlider
                    images={markerClicked.properties.images.map((item) => ({ src: item, key: item }))}
                    visible={visible}
                    onClose={() => setVisible(false)}
                />
            </Container>

            <Container className="pb-3">
                <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} border-bottom p-3 text-start my-5`}>
                    Interactive Gallery
                </h2>              
            </Container>

        </div>


    )
}

export default OutdoorsPage;