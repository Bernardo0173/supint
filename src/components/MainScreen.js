
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import '../styles/mainScreen.css'; // Asegúrate de tener este archivo CSS en la misma carpeta
import Stats from './Stats';
import NotificationsOffCanvas from './NotificationsOffCanvas';
import ValInc from './ValInc';

const MainScreen = () => {
  return (
    <div className="main-container">
      <div className="left-panel">
        Panel Izquierdo
      </div>
      <div className="right-panel">
        <div className="top-section">
          <Stats /> {/* Aquí se renderiza el componente Stats */}
        </div>
        <div className="bottom-section">
          <ValInc /> {/* Aquí se renderiza el componente Reporte */}
        </div>
      </div>
      <NotificationsOffCanvas/>
    </div>
  );
}

export default MainScreen;
