
/**
 * Author : Hector Gonzales Sanchez
 *          Alfredo Azamar Lopez
 *          José Antonio Moreno Tahuilan
 * 
 * Description : This components send notifications to a specific agent
 */

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GrSend } from "react-icons/gr";
import { useState, useContext } from "react";
import GlobalContext from "../GlobalVariable/GlobalContext";
import moment from 'moment-timezone';
import { toast } from "react-hot-toast";

const MessageToAgent = ({id}) => {

  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const { url, token} = useContext(GlobalContext);
  const date = moment().tz("America/Mexico_City").format();

  // Function to send a message to the agent
  const handleSubjectChange = async () => {
  try {
    const response = await fetch(`http://${url}/notificacion/crearNotificacionAgente`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
      },
      body: JSON.stringify({
        FechaHora: date,
        Titulo: subject,
        Descripcion: content,
        IdEmpleado: id
      }),
    });
    console.log(date);
    console.log(response);

    if (!response.ok) {
      throw new Error(`Error setting subject: ${response.statusText}`);
    }

    // Reset the subject and content
    setSubject('');
    setContent('');
    // Show a success message
    toast.success("Mensaje enviado correctamente");

  } catch (error) {
    // Show an error message
    console.error("Error setting subject:", error);
    toast.error("Error al enviar el mensaje");
  }
};

  return (
    <Card>
      <Card.Header className="fw-semibold">Enviar mensaje al agente</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="email" value={subject} onChange={e => setSubject(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contenido</Form.Label>
              <Form.Control as="textarea" rows={3} value={content} onChange={e => setContent(e.target.value)}/>
            </Form.Group>
          </Form>
        </Card.Text>
        <Button variant="primary" onClick={handleSubjectChange}><GrSend className="me-2" /> Enviar</Button>
      </Card.Body>
    </Card>
  );
};

export default MessageToAgent;