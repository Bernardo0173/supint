import React, { useState, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import GlobalContext from "../GlobalVariable/GlobalContext";
import { toast } from "react-hot-toast";

function ValInc(props) {
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Enviar");
  const { url, token } = useContext(GlobalContext);


  const handleSend = async () => {
    setButtonText("Enviando...");

    try {
      const response = await fetch(`http://${url}/cliente/telefonoPorZona/${props.zona}`, {
        headers: { Authorization: `Bearer ${token}`}});
      if (!response.ok) {
        throw new Error(`Error fetching phone numbers: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);

      data.forEach(async (element) => {
        console.log(element.Celular);
        try {
          const response = await fetch(
            `http://${url}/sns/send-message`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                phoneNumber: element.Celular,
                message: message,
              }),
            }
          );
          if (!response.ok) {
            throw new Error(`Error sending message: ${response.statusText}`);
          }
        } catch (error) {
          console.error("Error sending message:", error);
        }
      });
    } catch (error) {
      console.error("Error fetching phone numbers:", error);
    } finally {
      toast.success("Mensaje enviado correctamente");
      setMessage("");
      setButtonText("Enviar");
    }
  };

  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header>
        <strong>{props.tipoIncidencia}</strong>
      </Accordion.Header>
      <Accordion.Body>
        <Form>
          <Form.Group
            className="mb-3 text-start"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>
              <strong>Prioridad: </strong>
              {props.prioridad}
            </Form.Label>
            <br />
            <Form.Label>
              <strong>Descripcion: </strong>
              {props.descripcion}
            </Form.Label>{" "}
            <br />
            <Form.Label>
              <strong>Zona: </strong>
              {props.zona}
            </Form.Label>{" "}
            <br />
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
