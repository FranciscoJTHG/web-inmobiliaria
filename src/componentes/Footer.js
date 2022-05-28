import React from 'react';
import '../styles/Footer.scss';
import { Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row>
            <div className='col-4'>
                <p className='copy'>Copyright &copy; 2022 HOUSIFY, inc</p>
            </div>
            <div className='col-4 redes'>
                <a href="https://es-la.facebook.com">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="https://www.youtube.com/">
                    <i className="bi bi-youtube"></i>
                </a>
            </div>
            <div className='col-4'>
                <p className='politicas'>Politicas de Privacidad - Terminos</p>
            </div>
        </Row>
    )
}

export default Footer;