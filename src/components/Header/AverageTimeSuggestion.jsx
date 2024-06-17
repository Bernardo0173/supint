/**
 * Author: Bernardo Limón Montes de Oca
 *         José Antonio Moreno Tahuilan
 * 
 * Description: This component is a suggestion for the supervisor to improve the average time of the calls.
 */

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';
import '../../styles/sugPers.css'; 

function AverageTimeSuggestion({ isOpen, title, content, actions, openPanel }) {
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
              <div key="99" className='action-item' onClick={openPanel} >3. Mandar mensajes a agentes 📧</div>
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

export default AverageTimeSuggestion;
