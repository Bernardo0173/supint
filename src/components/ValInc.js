import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ValInc() {
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Enviar");

  const handleSend = () => {
    // Aquí puedes manejar el envío del mensaje
    setButtonText("Enviando...");
    setTimeout(() => {
      setButtonText("Enviar");
      alert('Mensaje enviado: ' + message); // Simula el envío del mensaje
      setMessage("");
    }, 2000); // Simula un envío de 2 segundos
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tipo de incidencia: Robo de cable</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje a enviar</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSend}>
              {buttonText}
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tipo de incidencia: Interrupción del Servicio de Internet por Falla en el Nodo Principal</Accordion.Header>
        <Accordion.Body>
          Este reporte detalla una interrupción del servicio de internet en la zona comercial de Centro Urbano, Ciudad del Este, debido a una falla en el nodo principal de la red. La incidencia ha afectado a numerosos negocios y residentes, causando inconvenientes significativos en sus actividades diarias y operaciones comerciales. La falla se detectó el 23 de abril de 2024 a las 10:30 a.m. y se está trabajando arduamente para restablecer el servicio lo antes posible. Se mantendrá actualizada a la comunidad sobre el progreso de las reparaciones y la estimación del tiempo de recuperación del servicio.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ValInc;
