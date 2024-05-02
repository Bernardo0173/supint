import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './Stats';
import NotificationsOffCanvas from './NotificationsOffCanvas';
import ValInc from './ValInc';
import ButPopMens from './ButPopMens';
import AgenteCard from "./AgenteCard";

const MainScreen = () => {
  const agents = [
    // Cambiar a useefect y useCallBack
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "bg-success text-white" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "bg-success text-white" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "bg-warning text-white" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "bg-success text-white" },
    { name: "David Romero", client: "Cecilia Méndez", callTime: "3.01", problemsSolved: 2, description: "Questions about service renewal. Information from email correspondence.", style: "bg-danger text-white" },
    { name: "Carlos Mendoza", client: "Ana Ramirez", callTime: "1.22", problemsSolved: 2, description: "Issue with account billing. Information sourced from customer call.", style: "bg-success text-white" },
    { name: "Carlos Mendoza", client: "Ana Ramirez", callTime: "1.22", problemsSolved: 2, description: "Issue with account billing. Information sourced from customer call.", style: "bg-success text-white" }, 
    { name: "Carlos Mendoza", client: "Ana Ramirez", callTime: "1.22", problemsSolved: 2, description: "Issue with account billing. Information sourced from customer call.", style: "bg-warning text-white" },
    { name: "Carlos Mendoza", client: "Ana Ramirez", callTime: "1.22", problemsSolved: 2, description: "Issue with account billing. Information sourced from customer call.", style: "bg-danger text-white" }
  ]
  return (
    <div className="main-container">
      <div className="left-panel">
        {agents.map((agent) => (
          <AgenteCard
            key={agent.name}
            agentName={agent.name}
            clientName={agent.client}
            callTime={agent.callTime}
            solvedProblems={agent.problemsSolved}
            description={agent.description}
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
