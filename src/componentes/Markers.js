import React from 'react';
import { Marker } from 'react-leaflet';
import { locationIcons } from './locationIcons';

const Markers = (props) => {

    const {places} = props;

    const markers = places.map((places, i) => (

        <Marker
            key={i}
            position={places.geometry} 
            icon={locationIcons}
        />
    ));

    return markers;
}

export default Markers;