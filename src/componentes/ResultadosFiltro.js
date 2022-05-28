import React, { useState } from 'react';
import '../styles/ResultadosFiltro.scss';
import { Row, Button, Form } from 'react-bootstrap';


const ResultadosFiltro = () => {

    const [slider, setSlider] = useState(0);


        //para el input
    var Input = document.getElementById('customRange1');
    // Input.style.setProperty("--value", Input.value);

    // if (Input) {
    //     var w = parseInt(window.getComputedStyle(Input, null).getPropertyValue('width'));

    // Input.addEventListener("input", function(evt) {
    //     console.log('even');
    //     Input.style.setProperty("--value", Input.value);
    // },false);

    // //para la etiqueta
    // var etq = document.querySelector('.etiqueta');
    // if (etq) {
        
    //     etq.innerHTML = Input.value+"%";

    //     var pxls = w / 100;

    //     etq.style.left = ((Input.value * pxls) - 15) + 'px';

    //     Input.addEventListener('input', function() {
        
    //     etq.innerHTML = Input.value+"%";
    //     etq.style.left = ((Input.value * pxls) - 15) + 'px';

    //     }, false);
    // }
    // }

	return (
        <Row className='resFil'>
            <div className='col-6 result'>
                <p><strong>Resultados de:</strong> Caracas</p>
                <p>18 Propiedades Encontradas</p>
            </div>
            <div className='col-6 fil'>
                {/* <Button variant="outline-secondary" className='filButton1' disabled>{slider}</Button> */}
                <div className='range'>
                    <input type="range" className="form-range" min='1000' max='5000' id="customRange1" onChange={(ev) => setSlider(ev.target.value)}/>
                </div>
                <Button variant="outline-secondary" className='filButton2' disabled>{slider}$</Button>
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
