import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import SugPers from "./SugPers";
import MensForm from "./MensForm"; // Actualizado el nombre del componente
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/notificationsOffCanvas.css";
import "../styles/header.css"; // Asegúrate de tener este archivo CSS
import izziLogo from "../elements/izziN.png";
import cartaIcon from "../elements/card-text.svg"; // Asegúrate de tener esta imagen en la carpeta correcta

const initialNotifications = [
  {
    title: "Sugerencia de sistema",
    content:
      "Recomendamos tener más agentes en este periodo debido al desempeño analizado.",
    actions: ["Acción 1", "Acción 2", "Acción 3"],
  },
  {
    title: "Mantenimiento programado",
    content: "El sistema estará en mantenimiento el próximo fin de semana.",
    actions: ["Acción A", "Acción B"],
  },
  // Puedes añadir más notificaciones aquí
];

function Header() {
  const [agentesInactivos, setAgectesInactivos] = useState(0);
  const [emocionesNegativas, setEmocionesNegativas] = useState(0);
  const [tiempoLlamada, setTiempoLlamada] = useState(0);

useEffect(() => {
  const fetchApiData = () => {
    console.log("Fetching data...");
    
    const urls = [
      "http://127.0.0.1:8080/llamada/averageCallDuration",
      "http://127.0.0.1:8080/llamada/negativeCallsCount",
      "http://127.0.0.1:8080/empleado/agentesActivos"
    ];

    Promise.all(urls.map(url =>
      fetch(url).then(response => response.json())
    ))
    .then(dataArray => {
      setTiempoLlamada(dataArray[0][0].averageDuration);
      setEmocionesNegativas(dataArray[1][0].count);
      setAgectesInactivos(dataArray[2][0].Inactivos);

      console.log(dataArray[0][0].averageDuration);
      console.log(dataArray[1][0].count);
      console.log(dataArray[2][0].Inactivos);

      console.log(dataArray);
    })
    .catch(error => console.error("Error fetching data:", error));
  };

  // Llama a fetchApiData inmediatamente y luego cada 5 segundos
  fetchApiData();
  const intervalId = setInterval(fetchApiData, 5000); // 5000 ms = 5 segundos

  // Limpiar el intervalo cuando el componente se desmonte
  return () => clearInterval(intervalId);
}, []);

  const [show, setShow] = useState(false);
  const [showMessageCanvas, setShowMessageCanvas] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMessageClose = () => setShowMessageCanvas(false);
  const handleMessageShow = () => setShowMessageCanvas(true);

  const handleDelete = (index) => {
    const newNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(newNotifications);
  };

  return (
    <>
      <Navbar expand={false} className="header-navbar">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={izziLogo}
              alt="Izzi"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            onClick={handleShow}
          />
          <Button variant="link" onClick={handleMessageShow} className="ms-3">
            <img src={cartaIcon} alt="Enviar mensaje" height="30" />
          </Button>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Notificaciones
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {agentesInactivos < 1 ? (
                <SugPers
                  key={1}
                  isOpen={true}
                  title={"Agentes inactivos"}
                  content={`Actualmente hay ${agentesInactivos} agentes inactivos.`}
                  actions={[
                    "1. Cambiar agentes a otras areas",
                    "2. Disminuir cantidad de agentes (cambiar horario de agentes)",
                  ]}
                  onDelete={() => handleDelete(1)}
                />
              ) : null}

              {emocionesNegativas > 1 ? (
                <SugPers
                  key={2}
                  isOpen={true}
                  title={"Emociones negativas."}
                  content={`Actualmente hay ${emocionesNegativas} conversaciones con emociones negativas.`}
                  actions={[
                    "1. Verifique las llamadas",
                    "2. Recordar a los agentes la importancia de la empatía",
                    "3. Realizar una capacitación",
                    "4. Realizar una encuesta",
                  ]}
                  onDelete={() => handleDelete(1)}
                />
              ) : null}

              {tiempoLlamada > 1 ? (
                <SugPers
                  key={3}
                  isOpen={true}
                  title={"Tiempo de llamada."}
                  content={
                    "Actualmente el tiempo de llamada promedio es mayor que el esperado."
                  }
                  actions={[
                    "1. Verificar la cantidad de agentes",
                    "2. Checar llamadas actuales con duracion mayor a tiempo ideal.",
                    "3. Recordar a agentes tiempo promedio / ideal.",
                  ]}
                  onDelete={() => handleDelete(3)}
                />
              ) : null}
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Offcanvas
            id="messageCanvas"
            aria-labelledby="messageCanvasLabel"
            placement="end"
            show={showMessageCanvas}
            onHide={handleMessageClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="messageCanvasLabel">
                Enviar mensaje
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <MensForm />
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
