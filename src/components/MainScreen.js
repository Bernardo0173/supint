import "../styles/emotionalStyles.css";
import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import Stats from './Stats';
import NotificationsOffCanvas from './NotificationsOffCanvas';
import ValInc from './ValInc';
import Accordion from 'react-bootstrap/Accordion';
import ButPopMens from './ButPopMens';
import MoreInfo from "./MoreInfo";

const MainScreen = () => {
  const agents = [
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "fine" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "fine" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "fine" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    ];

  const initialInc = [
    { id: 0, tipoIncidencia: "Robo de cable" },
    { id: 1, tipoIncidencia: "Vandalismo" },
  ];

  const [inc, setInc] = useState(initialInc);

  const handleDelete = (id) => {
    setInc(inc.filter(incidencia => incidencia.id !== id));
  };

  return (
    <div className="main-container">
      <div className="left-panel">
        {agents.map((agent) => (
          <MoreInfo
          cardStyle={agent.style} 
          key={agent.name}
          Title={agent.name}
          Subtitle1={agent.client}
          Subtitle2={agent.callTime}
          Subtitle3= {agent.problemsSolved}
          Text1={agent.description}
          Additional1={agent.description}
          />
        ))}
      </div>
      <div className="right-panel">
        <div className="top-section">
          <Stats /> {/* Aquí se renderiza el componente Stats */}
        </div>
        <div className="bottom-section">
          {inc.length === 0 ? (
            <p>No hay reportes de incidencias por el momento</p>
          ) : (
            <Accordion>
              {inc.map((incidencia) => (
                <ValInc
                  key={incidencia.id}
                  eventKey={incidencia.id.toString()}
                  tipoIncidencia={incidencia.tipoIncidencia}
                  onDelete={() => handleDelete(incidencia.id)}
                />
              ))}
            </Accordion>
          )}
        </div>
      </div>
      <NotificationsOffCanvas />
    </div>
  );
};

export default MainScreen;
