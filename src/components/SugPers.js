// SugPers.js
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';
import '../styles/sugPers.css'; // Asegúrate de tener este archivo CSS

function SugPers({ isOpen, title, content, actions, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="sugpers-container">
      {isOpen && (
        <div>
          <h2 className="sugpers-title">{title}</h2>
          <p className="sugpers-content">{content}</p>
          <Button variant="primary" onClick={handleExpand} className="sugpers-button">
            Ver Acciones
          </Button>
          <Button variant="danger" onClick={onDelete} className="sugpers-button">
            Eliminar Notificación
          </Button>
          <CSSTransition
            in={isExpanded}
            timeout={300}
            classNames="expand"
            unmountOnExit
          >
            <div className="expandable-content">
              {actions.map((action, index) => (
                <div key={index} className="action-item">{action}</div>
              ))}
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

export default SugPers;
