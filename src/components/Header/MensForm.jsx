import React, { useState, useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GlobalContext from '../GlobalVariable/GlobalContext';
import { toast } from 'react-hot-toast';

function MensForm() {
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const {url, token} = useContext(GlobalContext);
  const [prueba, setPrueba] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();

    const date = new Date().toISOString();
    console.log("Fecha", date);

    fetch(`http://${url}/notificacion/crearNotificacion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
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
      .then(() => toast.success('Mensaje enviado correctamente'))
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Error al enviar mensaje');
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