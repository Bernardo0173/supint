import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import BootstrapCard from "./BootstapCard";
import Card from "./AgentCard";
import PopUp from "./PopUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from './Stats';
import NotificationsOffCanvas from './NotificationsOffCanvas';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ValInc from './ValInc';
import ButPopMens from './ButPopMens';

const MainScreen = () => {
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
