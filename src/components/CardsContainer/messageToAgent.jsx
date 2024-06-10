import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GrSend } from "react-icons/gr";
import { useState, useContext } from "react";
import axios from "axios";
import GlobalContext from "../GlobalVariable/GlobalContext";

const MessageToAgent = (props) => {

  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const { url, token} = useContext(GlobalContext);

  const handleSubjectChange = async () => {
  try {
    const response = await fetch(`http://${url}/notificacion/crearNotificacion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
      },
      body: JSON.stringify({
        EsGlobal: false,
        FechaHora: new Date().toISOString(),
        Titulo: subject,
        Descripcion: content,
        IdEmpleado: props.id
      }),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error setting subject: ${response.statusText}`);
    }

    setSubject('');
    setContent('');

  } catch (error) {
    console.error("Error setting subject:", error);
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