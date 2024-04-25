import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import '../styles/mainScreen.css'; // Asegúrate de tener este archivo CSS en la misma carpeta
import Card from "./AgentCard";
import PopUp from "./PopUp";
import Stats from './Stats';
import NotificationsOffCanvas from './NotificationsOffCanvas';
import ValInc from './ValInc';
import ButPopMens from './ButPopMens';


const MainScreen = () => {
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
          <Stats /> {/* Aquí se renderiza el componente Stats */}
        </div>
        <div className="bottom-section">
          <ValInc /> {/* Aquí se renderiza el componente Reporte */}
          <ButPopMens/>
        </div>
      </div>
      <NotificationsOffCanvas/>
    </div>
  );
};

export default MainScreen;
