import React, { useState, useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GlobalContext from './GlobalVariable/GlobalContext';

function MensForm() {
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const {url} = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://${url}/notificacion/crearNotificacionEsGlobal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        Titulo: titulo, 
        Descripcion: mensaje,
        FechaHora : new Date().toISOString()
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .then(() => {setTitulo(''); setMensaje('');})
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="titulo" label="Título de mensaje" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Título de mensaje"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="mensaje" label="Mensaje" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Mensaje"
          style={{ height: '100px' }}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </FloatingLabel>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
}

export default MensForm;