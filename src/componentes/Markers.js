import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { locationIcons } from './locationIcons';
import { popupContent, popupHead, popupText, okText, activateLasers } from "./popupStyles";

const Markers = (props) => {

    const {places} = props;

    const [count, setCount] = useState(0);

    const markers = places.map((places, i) => (

        <div className="marker" onClick={() => setCount(console.log(count + 1))} key={i}>
            <Marker
                // key={i}
                position={places.geometry} 
                icon={locationIcons}
            >
                <Popup className="request-popup">
                    <div style={popupContent}>
                        <img
                        src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
                        width="150"
                        height="150"
                        alt="no img"
                        />
                        <div className="m-2" style={popupHead}>
                        Success!
                        </div>
                        <span style={popupText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </span>
                        <div className="m-2" style={okText}>
                        Okay
                        </div>
                    </div>
                </Popup>
            </Marker>
        </div>
    ));

    return markers;
}

export default Markers;