import React, { useState } from 'react';
import '../styles/Header.scss';
import { Row, Button, Nav } from 'react-bootstrap';

import PublicarLogin from './PublicarLogin';

const Header = () => {
	return (
		<Row className='mt-3'>
			<div className='col-2'>
				<i className="bi bi-house-fill"></i>
				<p className='logo'>HOUSIFY</p>
			</div>
			<div className='col-5 align-self-center'>
				<Nav className="navbar navbar-light bg-light">
					<form className="container-fluid">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Buscar en Housify" aria-label="Username" aria-describedby="basic-addon1"/>
							<span className='input-group-text'>
								<i className='bi bi-search'></i>
							</span>
						</div>
					</form>
				</Nav>
			</div>
			<div className='col-3 align-self-center'>
				<Button variant="outline-secondary" className='ms-5'>Comprar</Button>
				<Button variant="outline-secondary" className='ms-3'>Vender</Button>
				
			</div>

			<PublicarLogin />

		</Row>
	);
}

export default Header;
