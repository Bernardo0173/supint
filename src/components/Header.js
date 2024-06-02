import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import SugPers from './SugPers';
import MensForm from './MensForm'; // Actualizado el nombre del componente
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/notificationsOffCanvas.css';
import '../styles/header.css'; // Asegúrate de tener este archivo CSS
import izziLogo from '../elements/izziN.png';
import cartaIcon from '../elements/card-text.svg'; // Asegúrate de tener esta imagen en la carpeta correcta

const initialNotifications = [
  {
    title: "Sugerencia de sistema",
    content: "Recomendamos tener más agentes en este periodo debido al desempeño analizado.",
    actions: ["Acción 1", "Acción 2", "Acción 3"]
  },
  {
    title: "Mantenimiento programado",
    content: "El sistema estará en mantenimiento el próximo fin de semana.",
    actions: ["Acción A", "Acción B"]
  }
  // Puedes añadir más notificaciones aquí
];

function Header() {
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
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} onClick={handleShow} />
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
              {notifications.map((notification, index) => (
                <SugPers
                  key={index}
                  isOpen={true}
                  title={notification.title}
                  content={notification.content}
                  actions={notification.actions}
                  onDelete={() => handleDelete(index)}
                />
              ))}
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
              <Offcanvas.Title id="messageCanvasLabel">Enviar mensaje</Offcanvas.Title>
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
