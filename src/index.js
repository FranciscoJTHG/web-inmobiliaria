import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import Header from './componentes/Header';
import ResultadosFiltro from './componentes/ResultadosFiltro';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import PaginationBasic from './componentes/Pagination';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<ResultadosFiltro />
		<Main />
		<PaginationBasic />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
