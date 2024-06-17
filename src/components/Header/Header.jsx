/**
 *  Author: José Antonio Moreno Tahuilan
 *          Bernardo Limon Montes de Oca
 *          Alfredo Azamar Lopez
 * 
 * Description: This component is the header of the application. It contains the notification 
 * zone and the message to all the agents zone.
 */

import GlobalContext from "../GlobalVariable/GlobalContext";
import AverageTimeSuggestion from "./AverageTimeSuggestion";
import WorstAgentsSuggestion from "./WorstAgentsSuggestion";
import PersonalizedSuggestion from "./PersonalizedSuggestion";
import NegativeEmotionSuggestion from "./NegativeEmotionSuggestion"; 
import MessageForm from "./MessageForm"; 
import "../../styles/notificationsOffCanvas.css";
import "../../styles/header.css";
import { useState, useEffect, useContext } from "react";
import { Container, Navbar, Offcanvas, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import izziLogo from "../../elements/izziN.png";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";

function Header() {
  const [inactiveAgents, setInactiveAgents] = useState(0);
  const [negativeEmotions, setNegativeEmotions] = useState(0);
  const [timeCall, setTimeCall] = useState(0);

  /**
   * This values are going to be compared with the actual value
   * in future implementations we should me modify for the suppervisor
   * to be able to change this values
   */

  const [idealInactiveAgent, ] = useState(0);
  const [idealNegativeEmotions, ] = useState(0);
  const [idealTimeCall, ] = useState(0);

  const { url, token, setTitle, setMessage } = useContext(GlobalContext);

  // Depending of the data that we get from the API we are going to show or not a type of notification
  
  useEffect(() => {
    const fetchApiData = () => {
      console.log("Fetching data...");

      const urls = [
        `http://${url}/llamada/averageCallDuration`,
        `http://${url}/llamada/negativeCallsCount`,
        `http://${url}/empleado/agentesActivos`,
      ];

      Promise.all(
        urls.map((url) => fetch(url, {headers: { Authorization: `Bearer ${token}`}}).then((response) => response.json()))
      )
        .then((dataArray) => {

          console.log(dataArray);

          setTimeCall(dataArray[0][0].averageDuration);
          setNegativeEmotions(parseInt(dataArray[1][0].count));
          setInactiveAgents(parseInt(dataArray[2][0].Inactivos));

          console.log(dataArray[0][0].averageDuration);
          console.log(dataArray[1][0].count);
          console.log(parseInt(dataArray[2][0].Inactivos));

          console.log(dataArray);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchApiData();
    const intervalId = setInterval(fetchApiData, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  const [show, setShow] = useState(false);
  const [showMessageCanvas, setShowMessageCanvas] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMessageClose = () => setShowMessageCanvas(false);
  const handleMessageShow = () => setShowMessageCanvas(true);

  // Depending of the notification that we want to show we are going to personalisable the message
  
  const handleNegativeEmotionSuggestion = () => {
    setShowMessageCanvas(true);
    setTitle("Emociones negativas");
    setMessage("Queridos agentes hemos notado que hay un incremento en las emociones negativas en las llamadas, por favor recordar la importancia de la empatía en el trato con los clientes. Muchas gracias");
  };

  const handleAverageTimeSuggestion = () => {
    setShowMessageCanvas(true);
    setTitle("Tiempo promedio de llamada");
    setMessage("Queridos agentes hemos notado que el tiempo promedio de llamada es mayor al esperado, por favor recordar la importancia de mantener un tiempo adecuado en las llamadas. Muchas gracias");
     
  };

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
              className="izzilogo"
            />
          </Navbar.Brand>

          <div className="ms-auto">
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            onClick={handleShow}
            className="border border-0"
          >
            <IoMdNotifications size={30} color="#2C2C2C"/>
          </Navbar.Toggle>

          <Button variant="link" onClick={handleMessageShow} className="ms-3">
            <RiMessage2Line size={30} color="#2C2C2C"/>
          </Button>
          </div>
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

            {/* Depending of the notification that we want to show we are going to personalisable 
                the type of notification and the message */}

            <Offcanvas.Body>

              {/* If are more than one inactive agent. */}

              {inactiveAgents > idealInactiveAgent ? (
                <PersonalizedSuggestion
                  key={1}
                  isOpen={true}
                  title={"Agentes inactivos"}
                  content={`Actualmente hay ${inactiveAgents} agentes inactivos.`}
                  actions={[
                    "1. Cambiar agentes a otras areas",
                    "2. Disminuir cantidad de agentes (cambiar horario de agentes)",
                  ]}
                />
              ) : null}

              {/* If are more than one call with a negative emotion. */}

              {negativeEmotions > idealNegativeEmotions ? (
                <NegativeEmotionSuggestion
                  key={2}
                  isOpen={true}
                  title={"Emociones negativas."}
                  content={`Actualmente hay ${negativeEmotions} conversaciones con emociones negativas.`}
                  actions={[
                    "1. Verifique las llamadas",
                    "2. Realizar una capacitación",
                    "3. Realizar una encuesta",
                  ]}
                  openPanel = {handleNegativeEmotionSuggestion}
                />
              ) : null}

              {/* If the average time of the call is greater than 20 seconds. */}

              {timeCall > idealTimeCall ? (
                <AverageTimeSuggestion
                  key={3}
                  isOpen={true}
                  title={"Tiempo de llamada."}
                  content={
                    "Actualmente el tiempo de llamada promedio es mayor que el esperado."
                  }
                  actions={[
                    "1. Verificar la cantidad de agentes",
                    "2. Checar llamadas actuales con duracion mayor a tiempo ideal."
                  ]}
                  openPanel = {handleAverageTimeSuggestion}
                />
              ) : null}

              {/* If the agent has a bad performance. */}

              <WorstAgentsSuggestion
                  key={2}
                  isOpen={true}
                  title={"Capacitación agentes"}
                  content={`Hemos analizado el desempeño de tus agentes y recomendamos que los siguiente agentes tomen capacitación.`}
                  actions={[
                    "1. Verifique las llamadas",
                    "2. Realizar una capacitación",
                    "3. Realizar una encuesta",
                  ]}
                  onDelete={() => handleDelete(1)}
                  openPanel = {handleNegativeEmotionSuggestion}
                />
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
              <MessageForm />
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
