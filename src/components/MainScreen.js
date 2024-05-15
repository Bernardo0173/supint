import React from "react";
import "../styles/emotionalstyles.css";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import Stats from './Stats';
import NotificationsOffCanvas from './NotificationsOffCanvas';
import ValInc from './ValInc';
import ButPopMens from './ButPopMens';
import MoreInfo from "./MoreInfo";

const MainScreen = () => {
  const agents = [
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "fine" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    ];

  return (
    <div className="main-container">
      <div className="left-panel">
        {agents.map((agent) => (
          <MoreInfo
          key={agent.name}
          Title={agent.name}
          Subtitle1={agent.client}
          Subtitle2={agent.callTime}
          Subtitle3= {agent.problemsSolved}
          Text1={agent.description}
          Additional1={agent.additionalInfo}
          style={agent.style}
          />
        ))}
      </div>
      <div className="right-panel">
        <div className="top-section">
          <Stats /> {/* Aquí se renderiza el componente Stats */}
        </div>
        <div className="bottom-section">
          <ValInc /> {/* Aquí se renderiza el componente Reporte */}
          <ButPopMens />
        </div>
      </div>
      <NotificationsOffCanvas />
    </div>
  );
};

export default MainScreen;
 