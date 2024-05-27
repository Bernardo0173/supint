import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ValInc(props) {
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Enviar");

  const handleSend = () => {
    setButtonText("Enviando...");
    setTimeout(() => {
      alert('Mensaje enviado: ' + message);
      setButtonText("Enviar");
      setMessage("");
      props.onDelete();  // Eliminar la incidencia después de enviar el mensaje
    }, 2000);
  };

  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header><strong>{props.tipoIncidencia}</strong></Accordion.Header>
      <Accordion.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label><strong>Descripcion: </strong>{props.descripcion}</Form.Label>
            <br></br>
            <Form.Label><strong>Zona: </strong>{props.zona}</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="danger" onClick={props.onDelete}>
              Eliminar
            </Button>
            <Button variant="primary" onClick={handleSend}>
              {buttonText}
            </Button>
          </div>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default ValInc;
