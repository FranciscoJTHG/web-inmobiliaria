import React, { useState } from 'react';
import '../styles/ResultadosFiltro.scss';
import { Row, Button, Form } from 'react-bootstrap';


const ResultadosFiltro = () => {

    const [ value, onChange ] = useState({
        valDef: 50
    });

	return (
        <Row className='resFil'>
            <div className='col-6 result'>
                <p><strong>Resultados de:</strong> Caracas</p>
                <p>18 Propiedades Encontradas</p>
            </div>
            <div className='col-6 fil'>
                <Button variant="outline-secondary" className='filButton1' disabled>{value.valDef}</Button>
                <div className='range'>
                    <input type="range" className="form-range" id="customRange1" value={value} onChange={({ target: { value:  radius }}) => {
                        console.log(value, radius, value.valDef);
                        onChange(radius);
                    } }/>
                </div>
                <Button variant="outline-secondary" className='filButton2' disabled>prueba</Button>
                <div className='mt-3 checks'>
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Propiedades Nuevas"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="En Venta"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    // disabled
                                    label="En Renta"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                            </div>
                        ))}
                    </Form>
                </div>
            </div>
        </Row>
	);
}

export default ResultadosFiltro;
