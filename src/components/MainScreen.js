import React, {useState} from 'react';
import '../styles/mainScreen.css'; // Asegúrate de tener este archivo CSS en la misma carpeta

const MainScreen = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="main-container">
      <div className="left-panel">
        Panel Izquierdo
      </div>
      <div className="right-panel">
        <div className="top-section">
          Sección Superior
        </div>
        <div className="bottom-section">
          Sección Inferior
        </div>
      </div>
      <button className="notifications-button" onClick={toggleNotifications}>
        {!isNotificationsOpen ? 'Mostrar Notificaciones' : 'Ocultar Notificaciones'}
      </button>
      {isNotificationsOpen && (
        <div className="notifications-panel">
          Aquí van las notificaciones
        </div>
      )}
    </div>
  );
}

export default MainScreen;
