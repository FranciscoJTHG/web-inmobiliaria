import React,  { useState } from 'react';
import '../styles/PublicarLogin.scss';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

const PublicarLogin = () => {

    const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (
        <div className='col-2 align-self-center'>
            <Button className='btn btn-success align-items-center btnPry' onClick={handleShow}>Publicar Propiedad</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <div className='logo'>
                        <i className="bi bi-house-fill"></i>
                        {/* <p className='logo'>HOUSIFY</p> */}
                    </div>
                </Modal.Header>
                <Modal.Title className='titulo'> HOUSIFY </Modal.Title>
                <p className='iniText'>Iniciar sesión en su cuenta</p>
                <Modal.Body>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <i className="bi bi-envelope-fill"></i>
                    </InputGroup.Text>
                        <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                        <i className="bi bi-key-fill"></i>
                        </InputGroup.Text>
                        <FormControl
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                    <Button className='botonLog'>Login</Button>
                    <a href="http://" className='olvidoContraseña'>Olvido su contraseña. Haga clic aqui para restablece</a>
                    <Button variant="outline-secondary" className='registrar'>Registrar una Cuenta Nueva</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default PublicarLogin;