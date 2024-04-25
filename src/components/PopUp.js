import React, { useState } from 'react';
import '../styles/Popup.css'; // Archivo CSS para estilos

function Popup(props) {
  const [popupAbierto, setPopupAbierto] = useState(false);

  const abrirPopup = () => {
    setPopupAbierto(true);
  };

  const cerrarPopup = () => {
    setPopupAbierto(false);
  };

  return (
    <div>
      {/* Contenido variable */}
      <div onClick={abrirPopup}>
        {props.children}
      </div>

      {/* Popup */}
      {popupAbierto && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-contenido">
              {/* Contenido adicional */}
              <p>Más información aquí...</p>
              <button onClick={cerrarPopup}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
