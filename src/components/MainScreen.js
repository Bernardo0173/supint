import "../styles/emotionalstyles.css";
import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import Stats from "./Stats";
import NotificationsOffCanvas from "./NotificationsOffCanvas";
import ValInc from "./ValInc";
import Accordion from "react-bootstrap/Accordion";
import CardsContainer from "./CardsContainer";
import IncidenciasPanel from "./IncidenciasPanel";

const MainScreen = () => {

  return (
    <div className="main-container">
      <CardsContainer />
      <div className="right-panel">
        <div className="top-section">
          <Stats /> {/* Aquí se renderiza el componente Stats */}
        </div>
        <IncidenciasPanel /> {/* Aquí se renderiza el componente IncidenciasPanel */}
      </div>
      <NotificationsOffCanvas />
    </div>
  );
};

export default MainScreen;
