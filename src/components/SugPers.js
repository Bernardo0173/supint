import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';
import '../styles/sugPers.css'; // Asegúrate de tener este archivo CSS

function SugPers({ isOpen, toggle }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="sugpers-container">
      {isOpen && (
        <div>
          <h2 className="sugpers-title">Sugerencia de sistema</h2>
          <p className="sugpers-content">Recomendamos tener más agentes en este periodo debido al desempeño analizado.</p>
          <Button variant="primary" onClick={handleExpand} className="sugpers-button">
            Ver Acciones
          </Button>
          <CSSTransition
            in={isExpanded}
            timeout={300}
            classNames="expand"
            unmountOnExit
          >
            <div className="expandable-content">
              <div className="action-item">Acción 1</div>
              <div className="action-item">Acción 2</div>
              <div className="action-item">Acción 3</div>
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

export default SugPers;
