import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import "../styles/callCard.css";
import {
  BsStopwatch,
  BsPersonFillCheck,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { PiCellSignalSlashBold, PiPhoneX, PiTelevisionThin } from "react-icons/pi";
//import { FiPhoneMissed } from "react-icons/fi";
import { useState } from "react";

/*
  To change the color of the call card, you must pass the initial:
  - success -> green (Call in good condition)
  - warning -> yellow (Call in poor condition)
  - danger -> red (Call in critical condition)
  - info -> blue (Call in standby condition)

  <CallCard initialCallStatus={'warning'}/>

  CallCard props should also include what is shown in the modal after clicking on the card.
*/

function CallCard(props) {
  const btnText = {
    success: "black",
    warning: "black",
    danger: "black",
    info: "black",
  };

  // Show modal containing call details
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal tabs
  const [key, setKey] = useState("#call");
  const handleSelect = (k) => setKey(k);

  // Charts data and configuration
  Chart.register(...registerables);

  const data = {
    labels: ['1min', '2min', '3min', '4min', '5min', '6min', '7min'],
    datasets: [
      {
        label: 'Estado del cliente',
        data: [65, 100, 20, 81, 56, 55, 10],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }, 
      {
        label: 'Estado del agente',
        data: [35, 50, 70, 19, 44, 45, 90],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const callStatus = props.initialCallStatus;

  return (
    <>
      {/* Call card */}
      <div className="container">
        <Card style={{ maxWidth: "400px", overflow: "hidden" }}>
          <Row>
            <Col sm={3} md={3} className="pe-0" onClick={handleShow}>
              <div className={`bg-${callStatus} callStatus`}>
                {" "} 
                {props.asunto === 'internet' ? (
                  <PiCellSignalSlashBold size={70} color={btnText[callStatus]}  className="container" />
                ) : props.asunto === 'telefonia' ? (
                  <PiPhoneX size={70} color={btnText[callStatus]} />
                ) : props.asunto === 'television' ? (
                  <PiTelevisionThin size={70} color={btnText[callStatus]} />
                ) : null}

              </div>
            </Col>
            <Col  md={9} sm={9} xs={9} className="ps-0">
              <Card.Body className="text-start">
                <Card.Title className="mt-2">{props.nombreAgente}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {props.nombreCliente}
                </Card.Subtitle>
                <Card.Text className="fs-6 fw-lighter">
                  {props.asunto}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="fs-6">
                <Container>
                  <Row className="row justify-content-between align-items-center text-center">
                    <Col>
                      <div>
                        <BsStopwatch /> <br />
                        00:00:00
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <BsPersonFillCheck /> <br />0
                      </div>
                    </Col>
                    <Col>
                      <Button
                        className={`btn-sm text-${btnText[callStatus]}`}
                        variant={callStatus}
                      >
                        {" "}
                        {/*Cambia de color*/}
                        <BsFillTelephoneOutboundFill /> Intervenir
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Col>
          </Row>
        </Card>
        </div>

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
              <Nav variant="tabs" activeKey={key} onSelect={handleSelect}>
                <Nav.Item>
                  <Nav.Link eventKey="#call">Análisis sentimental</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="#contracts">Paquetes del cliente</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="#kpis">Desempeño del agente</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body>
              {key === "#call" && (
                <>
                  <Row>
                    <Card.Title>Información de la llamada</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      ID: {props.id}
                    </Card.Subtitle>
                  </Row>
                  <Row className="fs-6">
                    <Col md={3} className="fw-lighter">
                      <p>Asunto de la llamada</p>
                      <p>Método de inicialización</p>
                      <p>Hora de inicio</p>
                      <p>Duración</p>
                      <p>Nombre del agente</p>
                      <p>Nombre del cliente</p>
                      <p>Número del cliente</p>
                    </Col>
                    <Col md={3}>
                      <p>{props.asunto}</p>
                      <p>Llamada entrante</p>
                      <p>{props.fecha}</p>
                      <p>00:05:19</p>
                      <p>{props.nombreAgente}</p>
                      <p>{props.nombreCliente}</p>
                      <p>{props.celular}</p>
                    </Col>
                    <Col>
                      <p>Paquetes del cliente</p>
                      <Line data={data} options={options} />
                      <p>KPI's del agente</p>
                    </Col>
                  </Row>
                </>
              )}
              {key === "#contracts" && (
                <>
                  <Row>
                    <Card.Title>Paquetes del cliente</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      Detalles sobre los paquetes contratados por el cliente.
                    </Card.Subtitle>
                  </Row>
                  <Row className="fs-6">
                    <Col md={6}>
                      <p>Paquete 1: Internet 100Mbps</p>
                      <p>Paquete 2: Televisión HD</p>
                      <p>Paquete 3: Telefonía ilimitada</p>
                    </Col>
                    <Col md={6}>
                      <p>Estado: Activo</p>
                      <p>Fecha de contratación: 01/01/2023</p>
                      <p>Fecha de expiración: 01/01/2024</p>
                    </Col>
                  </Row>
                </>
              )}
              {key === "#kpis" && (
                <>
                  <Row>
                    <Card.Title>Desempeño del agente</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      Métricas de desempeño del agente durante las llamadas.
                    </Card.Subtitle>
                  </Row>
                  <Row className="fs-6">
                    <Col md={6}>
                      <p>Llamadas atendidas: 120</p>
                      <p>Llamadas resueltas: 115</p>
                      <p>Promedio de duración: 00:05:00</p>
                    </Col>
                    <Col md={6}>
                      <p>Índice de satisfacción: 4.8/5</p>
                      <p>Evaluaciones positivas: 110</p>
                      <p>Evaluaciones negativas: 5</p>
                    </Col>
                  </Row>
                </>
              )}
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            className={`btn-md text-${btnText[callStatus]}`}
            variant={callStatus}
          >
            <BsFillTelephoneOutboundFill /> Intervenir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CallCard;
