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
        <Accordion.Header>Tipo de incidencia: Falla de internet en zona esmeralda</Accordion.Header>
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
      <Accordion.Item eventKey="2">
        <Accordion.Header>Tipo de incidencia: Falla de servicio en zona Tec </Accordion.Header>
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
      <Accordion.Item eventKey="3">
        <Accordion.Header>Tipo de incidencia: Velocidad de internet baja en zona Polanco </Accordion.Header>
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
    </Accordion>
  );
}

export default ValInc;
