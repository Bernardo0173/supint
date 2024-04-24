import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import Card from "./AgentCard";
import PopUp from "./PopUp";

const MainScreen = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="main-container">
      <div className="left-panel">
        <PopUp>
          <Card
            name="Ferdi Azaoceano"
            callTime="1:30"
            metrica="90%"
            ranking="No. 5"
            restTime="1:00"
          />
        </PopUp>
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
        <Card
          name="Ferdi Azaoceano"
          callTime="1:30"
          metrica="90%"
          ranking="No. 5"
          restTime="1:00"
        />
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
