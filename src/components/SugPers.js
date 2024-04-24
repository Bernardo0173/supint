// SugPers.js
import React from 'react';
import '../styles/sugPers.css'; // Asegúrate de cambiar el nombre del archivo de estilos

const SugPers = ({ isOpen, toggle }) => {
  if (!isOpen) return null;

  return (
    <div className="sugPers-container">
      <h2 className="sugPers-title">Sugerencia de sistema</h2>
      <p className="sugPers-content">Recomendamos tener mas agentes en este periodo debido al desempeño analizado.</p>
      <button className="sugPers-button">Ver acciones</button>
    </div>
  );
};

export default SugPers;
