import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { locationIcons } from './locationIcons';
import vuanh from '../imagenes/vu-anh.jpg';
import '../styles/Markers.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { popupContent, popupHead, popupText, okText } from "./popupStyles";

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
                    <Card>
                        <Card.Img src={vuanh} />
                        <Card.Body>
                            <Card.Title>Av. El Cuartel Qta. Puente 01</Card.Title>
                            <Button variant="dark">Nueva</Button>
                            <Card.Text>
                                10 Cuartos <br />
                                4 Baños <br />
                                500M Construidos <br />
                                1.000M de Terreno <br />
                                <span className='monto'>$ 1,000,000</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* <div style={popupContent}>
                        <img
                        src={vuanh}
                        width="300"
                        height="180"
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
                    </div> */}
                </Popup>
            </Marker>
        </div>
    ));

    return markers;
}

export default Markers;