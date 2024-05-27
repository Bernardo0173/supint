import "../styles/emotionalStyles.css";
import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import 'bootstrap/dist/css/bootstrap.min.css';
import AgenteCard from "./AgenteCard";
import Stats from './Stats';
import Accordion from 'react-bootstrap/Accordion';
import NotificationsOffCanvas from './NotificationsOffCanvas';
import ValInc from './ValInc';
import ButPopMens from './ButPopMens';
import StatsDisplay from "./StatsDisplay";
import KpiAccordionPanel from "./KpiAccordionPanel";
import StatsCarousel from "./StatsCarousel";
import Header from "./Header";
import MoreInfo from "./MoreInfo";
import Redesign from "./Redesign";

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
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
  ];

  const initialInc = [
    { id: 0, tipoIncidencia: "Robo de cable", zona: "1", desc: "Se robaron el cable a las 14 horas" },
    { id: 1, tipoIncidencia: "Vandalismo", zona: "2", desc: "Vandalizaron el cable y necesita reposición" },
  ];

  const [inc, setInc] = useState(initialInc);

  const handleDelete = (id) => {
    setInc(inc.filter(incidencia => incidencia.id !== id));
  };

  return (
    <div className="main-container">
      <Header />
      <div className="left-panel">
        {agents.map((agent) => (
          <Redesign 
          key={agent.name}
          agent={agent}/>
        ))}
      </div>
      <div className="right-panel">
        <div className="top-section">
          <StatsCarousel />
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
                  zona={incidencia.zona}
                  desc={incidencia.desc}
                  onDelete={() => handleDelete(incidencia.id)}
                />
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
