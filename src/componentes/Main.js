import React from 'react';
import '../styles/Main.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import vuanh from '../imagenes/vu-anh.jpg';

import MapView from './MapView';

const Main = () => {
    return (
        <Row className='main'>
            <div className='col-6 cards'>
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col key={idx}>
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
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className='col-6 mapa'>
                <MapView />
            </div>
        </Row>
    );
}

export default Main;
