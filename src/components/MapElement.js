import'maplibre-gl';
import React, { useEffect, useRef } from 'react';
import geojson from "../config/geojson.json"
import config from "../config/config.json"
import { Map } from 'maplibre-gl';



function MapElement ({ mapIsReadyCallback }) {
  let mapContainer = useRef(null);
  
  useEffect(() => {
      // Update the document title using the browser API
      const myAPIKey = config.OSM_API_KEY;
      const mapStyle =
        'https://maps.geoapify.com/v1/styles/positron/style.json';
  
      const initialState = {
        lng: geojson.initialPoint[0],
        lat: geojson.initialPoint[1],
        zoom: geojson.initialZoom,
      };
  
      const map = new Map({
        container: mapContainer.current,
        style: `${mapStyle}?apiKey=${myAPIKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,      
      });/* To be triggered when a map object is created */
    mapIsReadyCallback(map);
  }, [mapContainer.current]);

  return (<div className='h-100' style={{minHeight: "40vw"}} ref={mapContainer}></div> )
};

export default MapElement;