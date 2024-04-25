import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
//import Card from "./AgentCard";
//import PopUp from "./PopUp";
//import CardComponent from "./BootstapCard";
import BootstrapCard from "./BootstapCard";

const MainScreen = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="main-container">
      <div className="left-panel">
        <BootstrapCard Title = "Agent: Alfredo Azamar" Subtitle1 = "Client: Benny Gonzáles" Subtitle2 = "Call time: 0.53" Subtitle3 ="Solved problems: 5" Text1 = "Description: The client description problem. This text come from de IVR." style = "bg-danger text-white"/>
        <BootstrapCard Title = "Agent: Alfredo Azamar" Subtitle1 = "Client: Benny Gonzáles" Subtitle2 = "Call time: 0.53" Subtitle3 ="Solved problems: 5" Text1 = "Description: The client description problem. This text come from de IVR." style = "bg-danger text-white"/>
        <BootstrapCard Title = "Agent: Alfredo Azamar" Subtitle1 = "Client: Benny Gonzáles" Subtitle2 = "Call time: 0.53" Subtitle3 ="Solved problems: 5" Text1 = "Description: The client description problem. This text come from de IVR." style = "bg-warning text-dark"/>
        <BootstrapCard Title = "Agent: Alfredo Azamar" Subtitle1 = "Client: Benny Gonzáles" Subtitle2 = "Call time: 0.53" Subtitle3 ="Solved problems: 5" Text1 = "Description: The client description problem. This text come from de IVR." style = "bg-warning text-dark"/>
        <BootstrapCard Title = "Agent: Alfredo Azamar" Subtitle1 = "Client: Benny Gonzáles" Subtitle2 = "Call time: 0.53" Subtitle3 ="Solved problems: 5" Text1 = "Description: The client description problem. This text come from de IVR." style = "bg-success text-white"/>
        <BootstrapCard Title = "Agent: Alfredo Azamar" Subtitle1 = "Client: Benny Gonzáles" Subtitle2 = "Call time: 0.53" Subtitle3 ="Solved problems: 5" Text1 = "Description: The client description problem. This text come from de IVR." style = "bg-success text-white"/>
      </div>
      <div className="right-panel">
        <div className="top-section">
          Sección Superior
          <div>WAKALA</div>
        </div>
        <div className="bottom-section">
          Sección Inferior
          <div>WAKALA</div>
        </div>
      </div>
      <button className="notifications-button" onClick={toggleNotifications}>
        {!isNotificationsOpen
          ? "Mostrar Notificaciones"
          : "Ocultar Notificaciones"}
      </button>
      {isNotificationsOpen && (
        <div className="notifications-panel">Aquí van las notificaciones</div>
      )}
    </div>
  );
};

export default MainScreen;
