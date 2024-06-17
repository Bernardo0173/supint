/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 * 
 * Description: This component is the incident that is going to be shown in the incident panel. The incident send information a 
 * message to the users that are in the zone of the incident.
 */

import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-hot-toast';
import GlobalContext from '../GlobalVariable/GlobalContext';

const Incident = ({
  eventKey,
  type,
  priority,
  description,
  zone,
  onDelete
}) => {
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Enviar');
  // The url where the APIs are hosted and the token are stored in the global context
  const { url, token } = useContext(GlobalContext);

  // Function that take the text of the message and send the message to the users in the zone of the incident
  const handleSend = async () => {
    setButtonText('Enviando...');

    try {

      // Fetch the phone numbers of the users in the zone of the incident
      const response = await fetch(`http://${url}/cliente/telefonoPorZona/${zone}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error(`Error fetching phone numbers: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);

      // Send the message to the users in the zone of the incident
      await Promise.all(data.map(async (element) => {
        const sendMessageResponse = await fetch(
          `http://${url}/sns/send-message`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              phoneNumber: element.Celular,
              message
            })
          }
        );
        if (!sendMessageResponse.ok) {
          throw new Error(`Error sending message: ${sendMessageResponse.statusText}`);
        }
      }));

      // Show a success message
      toast.success('Mensaje enviado correctamente');
    } catch (error) {
      // Show an error message
      console.error('Error fetching phone numbers or sending message:', error);
      toast.error('Error al enviar el mensaje');
    } finally {
      // Reset the message and the button text
      setMessage('');
      setButtonText('Enviar');
    }
  };

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <strong>{type}</strong>
      </Accordion.Header>
      <Accordion.Body>
        <Form>
          <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <strong>Prioridad: </strong>{priority}
            </Form.Label>
            <br />
            <Form.Label>
              <strong>Descripción: </strong>{description}
            </Form.Label>
            <br />
            <Form.Label>
              <strong>Zona: </strong>{zone}
            </Form.Label>
            <br />
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="danger" onClick={onDelete}>
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
};

export default Incident;
