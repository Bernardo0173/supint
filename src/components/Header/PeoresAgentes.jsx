// SugPers.js
import React, { useState, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';
import '../../styles/sugPers.css'; // Asegúrate de tener este archivo CSS
import GlobalContext from '../GlobalVariable/GlobalContext';

function PeoresAgentes({ isOpen, title, content, actions, onDelete, openPanel }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { url, token, setToken, titleC, setTitleC, description, setDescription } = useContext(GlobalContext);
  const [peoresAgentes, setPeoresAgentes] = useState([]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    fetch(`http://${url}/llamada/topPeoresAgentes/2`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setPeoresAgentes(data);
      })

  })

  return (
    <div className="sugpers-container">
      {isOpen && (
        <div>
          <h2 className="sugpers-title">{title}</h2>
          <p className="sugpers-content">{content}</p>
          <Button variant="primary" onClick={handleExpand} className="sugpers-button">
            Ver agentes
          </Button>
          <Button variant="danger" onClick={onDelete} className="sugpers-button">
            Eliminar
          </Button>
          <CSSTransition
            in={isExpanded}
            timeout={300}
            classNames="expand"
            unmountOnExit
          >
            <div className="expandable-content">
              {
                peoresAgentes.map((agente, index) => (
                  <div key={index} className="action-item">{agente.Nombre} {agente.ApellidoP}</div>
                ))}
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

export default PeoresAgentes;
