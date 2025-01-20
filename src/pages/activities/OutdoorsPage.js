import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Modal, Row } from "react-bootstrap";
import MapElement from "../../components/MapElement";
import geojson from "../../config/geojson.json"
import maplibregl from "maplibre-gl";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import PhotoViewer from "../../components/PhotoViewer";

const pageTitle = `DN - Outdoors`
var loadedMap = null


function OutdoorsPage({ theme, setTheme }) {
    const [markerClicked, setMarkerClicked] = useState(geojson.features[0]);
    const [visible, setVisible] = useState(false)


    function onClosePhotoViewer() {
        setVisible(false)
        loadedMap.flyTo({
            center: geojson.initialPoint,
            zoom: geojson.initialZoom
        })
    }
    const mapIsReadyCallback = (map) => {
        loadedMap = map
        geojson.features.forEach((marker) => {
            // create a DOM element for the marker
            const el = document.createElement('img');
            el.className = 'marker img-fluid p-0 mx-auto d-block img-thumbnail';
            el.style.backgroundImage = `url('/maps-pics/${marker.properties.imageURL}')`
            el.style.backgroundRepeat = 'no-repeat'
            el.style.backgroundSize = 'cover'
            el.style.width = `${geojson.iconSize[0]}px`;
            el.style.height = `${geojson.iconSize[1]}px`;

            el.addEventListener('mouseenter', () => {
                el.style.width = `${geojson.iconSize[0] * 5}px`
                el.style.height = `${geojson.iconSize[1] * 5}px`
            })
            el.addEventListener('mouseleave', () => {
                el.style.width = `${geojson.iconSize[0]}px`
                el.style.height = `${geojson.iconSize[1]}px`
            })
            el.addEventListener('click', () => {
                loadedMap.flyTo({
                    center: marker.geometry.coordinates,
                    zoom: 10
                })
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

    });
    
    return (
        <div className='bg-body-tertiary pb-3' data-aos="fade-up" data-aos-delay="100">
            <PhotoViewer
            visible={visible}
            images={markerClicked.properties.images}
            onClose={onClosePhotoViewer}
            theme={theme}/>
            <Container className="pb-3">
                <h2 className={`${theme === "dark" ? 'text-white ': 'text-dark '} border-bottom p-3 text-start my-5`}>
                    Interactive Gallery
                </h2>  

                <MapElement mapIsReadyCallback={mapIsReadyCallback}/>

            </Container>
        </div>


    )
}

export default OutdoorsPage;