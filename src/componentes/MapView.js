import React, { useState } from 'react';

// import { Map } from 'react-leaflet';
import { MapContainer as Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapView.scss';
import Markers from './Markers';

import data from '../servicios/data.json';

const MapView = () => {

    const [state, setState] = useState({
        currentLocation: {
            lat: '10.4895475',
            lng: '-66.8657376'
        },
        zoom: 12,
        data
    });

    return <Map center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        <Markers places={state.data.places} /> 
    </Map>
}

export default MapView;