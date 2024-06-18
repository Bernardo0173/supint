/**
 * Author: Hector Gonzales Sanchez
 *         José Antonio Moreno Tahuilan
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is a card that contains the information of a call
 *              and the actions that can be done with it. The card have 4 sections:
 *              1. Live Call transcript
 *              2. Client contracts
 *              3. Send message to agent
 *              4. Agent KPIs
 */

import { Button, Card, Col, Container, Modal, Nav, Row } from "react-bootstrap";
import ClientContracts from "./ClientContract";
import AgentKpis from "./AgentKpis";
import MessageToAgent from "./MessageToAgent";
import "../../styles/callCard.css";
import {
  BsStopwatch,
  BsPersonFillCheck,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import {
  PiCellSignalSlashBold,
  PiPhoneX,
  PiTelevisionThin,
} from "react-icons/pi";
import { IoWarningOutline } from "react-icons/io5";
import { RiZzzFill } from "react-icons/ri";
import { useState, useEffect, useContext } from "react";
import Chatbox from "./Chatbox";
import GlobalContext from "../GlobalVariable/GlobalContext";
import io from "socket.io-client";
import { toast } from "react-hot-toast";

const socket = io('backloadbalancer-1550033804.us-east-1.elb.amazonaws.com');

function CallCard({initialCallStatus, type, state, clientName, agentName, phone, notes, date, numCalls, id, employeeId}) {
  // Show modal containing call details
  const initialTime = Math.floor(Math.random() * 60);

  const [callStatus, setCallStatus] = useState(initialCallStatus);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [seconds, setSeconds] = useState(initialTime);
  const { url, token  } = useContext(GlobalContext);
  const [emergencyId, setEmergencyId] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [Icon, setIcon] = useState(
    <PiCellSignalSlashBold size={70} color="black" />
  );

  // An adapter to change the key words of Amazon Connet emotions to the corresponding color
  const emotions = {
    positive: "success",
    negative: "danger",
    neutral: "warning",
    inactivo: "info",
  };


  /**
   * Depending on the state of the call, the icon will change.
   * Also, if the call is an emergency, the icon will change to a warning icon.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    // If the call is an emergency, the icon will change to a warning icon
    if (emergencyId === id) {
      setIcon(<RiZzzFill size={70} color="black" />);
    }

    // If the call is inactive, the icon will change to a sleeping icon, otherwise, it will change to the corresponding icon
    if (!state) {
      setIcon(<RiZzzFill size={70} color="black" />);
    } else {
      switch (type) {
        case "internet":
          setIcon(<PiCellSignalSlashBold size={70} color="black" />);
          break;
        case "telefonia":
          setIcon(<PiPhoneX size={70} color="black" />);
          break;
        case "television":
          setIcon(<PiTelevisionThin size={70} color="black" />);
          break;
        default:
          setIcon(<PiCellSignalSlashBold size={70} color="black" />);
      }
    }
    // Listen for sentiment changes, and update the call status
    const interval2 = setInterval(() => {
      fetch(`http://${url}/llamada/obtenerSentimiento/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => response.json())
        .then(data => {
          if (data.Sentiment !== undefined) {
            if (isEmergency === false) {
              setCallStatus(emotions[data.Sentiment]);
              console.log(callStatus);
            }
          }
        })
        .then(() => console.log("Call status:", callStatus))
        .catch((error) => console.error("Error:", error));
    }, 2500);

    // Listen for sentiment changes, and update the call status
    socket.on("sentiment", ({ sentiment }) => {
      if (sentiment !== undefined) {
        console.log("sentiment", sentiment);
        setCallStatus(emotions[sentiment]);
        setIsEmergency(true);
      }
    });

    // If the call is an emergency, the icon will change to a warning icon and a toast will be displayed
    socket.on("EMERGENCIA", (pr) => {
      console.log("EMERGENCIA", pr);
      setEmergencyId(pr.id);

      if (pr.id === id) {
        setCallStatus("danger");
        setIcon(<IoWarningOutline size={70} color="black" />);
        setIsEmergency(true);
        toast.error((t) => (
          <div className="custom-toast">
            <div className="toast-content">
              <strong>¡Urgente!</strong> {pr.nombre} {pr.apellido} necesita ayuda inmediata en su llamada.
            </div>
            <button className="toast-button" onClick={() => { handleShow(); }}>Abrir<br/>tarjeta</button>
          </div>
        ), {
          duration: 5000,
          position: "top-left",
          style: {
            fontSize: '20px',
            background: '#f8d7da',
          }
        });
      }
    });

    return () => {
      clearInterval(interval);
      socket.off("EMERGENCIA");
      socket.off("sentiment");
      clearInterval(interval2);
    };
  }, [state, type, emergencyId]);

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  // Modal tabs
  const [activeTab, setActiveTab] = useState("liveCall");
  const handleSelect = (k) => setActiveTab(k);

  const renderContent = () => {
    switch (activeTab) {
      case "liveCall":
        return (
          <Chatbox
            clientName={clientName}
            agentName={agentName}
            id={id}
          />
        );

      // Depending on the tab, the corresponding component will be rendered
      case "contracts":
        return <ClientContracts phone={phone} />;
      case "msg":
        return <MessageToAgent id={employeeId} />;
      case "kpis":
        return <AgentKpis numCalls = {numCalls} id = {employeeId}/>;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Call card */}
      <Card className="fixed-height-card">
        <Row style={{ maxWidth: "400px", overflow: "hidden" }}>
          <Col sm={3} md={3} className="pe-0" onClick={handleShow}>
            <div
              className={`bg-${state ? callStatus : "info"} callStatus`}
            >
              {Icon}
            </div>
          </Col>
          <Col sm={9} md={9} className="ps-0">
            <Card.Body className="text-start">
              <Card.Title className="mt-2 nombreAgente">
                {agentName}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted nombreCliente">
                {clientName}
              </Card.Subtitle>
              <Card.Text className="fs-6 fw-lighter descripcion">
                Descripción: {notes}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="fs-6 footer">
              <Container>
                <Row className="row justify-content-between align-items-center text-center">
                  <Col>
                    <div>
                      <BsStopwatch /> <br />
                      {minutes.toString().padStart(2, "0")}:
                      {displaySeconds.toString().padStart(2, "0")}
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <BsPersonFillCheck /> <br />
                      {numCalls}
                    </div>
                  </Col>
                  <Col>
                    <Button className={`bg-${state ? callStatus : 'info'} btn-sm text-black border border-0`} onClick = {() => { handleShow(); }} >
                      <BsFillTelephoneOutboundFill /> Intervenir
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Footer>
          </Col>
        </Row>
      </Card>

      {/* Modal to display call details */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="xl"
      >
        <Modal.Body className="px-0 py-0">
          <Card className="border-0">
            <Card.Header>
              <Nav
                variant="tabs"
                defaultActiveKey="liveCall"
                onSelect={handleSelect}
              > 
                <Nav.Item>
                  <Nav.Link eventKey="liveCall">Llamada en vivo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contracts">Paquetes del cliente</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="msg">Enviar mensaje</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="kpis">Desempeño del agente</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>{" "}
            {/* px-3 py-2 */}
            <Card.Body>
              <Row className="px-3 py-2">
                <Col sm={5} md={5} className="fw-light">
                  <Row>
                    <Card.Title>Información de la llamada</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      ID: {id}
                    </Card.Subtitle>
                  </Row>
                  <Row className="fs-6">
                    <Col className="fw-lighter">
                      <p>
                        Asunto de la llamada:
                        <a className="text-black text-decoration-none">
                          {" "}
                          {type}
                        </a>
                      </p>

                      <p>
                        Nombre del agente:
                        <a className="text-black text-decoration-none">
                          {" "}
                          {agentName}
                        </a>
                      </p>

                      <p>
                        Nombre del cliente:
                        <a className="text-black text-decoration-none">
                          {" "}
                          {clientName}
                        </a>
                      </p>

                      <p>
                        Número del cliente:
                        <a className="text-black text-decoration-none">
                          {" "}
                          {phone}
                        </a>
                      </p>

                      <p>
                        Hora de inicio:
                        <a className="text-black text-decoration-none">
                          {" "}
                          {date.substring(11, 19)}
                        </a>
                      </p>

                      <p>
                        Duración:
                        <a className="text-black text-decoration-none">
                          {" "}
                          {minutes.toString().padStart(2, "0")}:
                          {displaySeconds.toString().padStart(2, "0")}
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col sm={7} md={7} className="ps-4">
                  {renderContent()}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CallCard;
