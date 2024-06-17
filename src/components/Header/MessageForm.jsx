/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is the form to send a message to all the agents.
 */

import React, { useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GlobalContext from '../GlobalVariable/GlobalContext';
import { toast } from 'react-hot-toast';

function MessageForm() {
  const { url, token, title, setTitle, message, setMessage } = useContext(GlobalContext);
  
  // This function sends the message to all the agents, taking the values from the inputs
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://${url}/notificacion/crearNotificacion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ 
          Titulo: title, 
          Descripcion: message,
          FechaHora: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);

      setTitle('');
      setMessage('');
      toast.success('Mensaje enviado correctamente');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar mensaje');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="titulo" label="Título de mensaje" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Título de mensaje"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="mensaje" label="Mensaje" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Mensaje"
          style={{ height: '100px' }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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

export default MessageForm;