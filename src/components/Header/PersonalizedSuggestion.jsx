/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is a personalized suggestion that is going to be shown in the 
 * header of the application.
 */

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';
import '../../styles/sugPers.css';

function PersonalizedSuggestion({ isOpen, title, content, actions }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="sugpers-container">
      {isOpen && (
        <div>
          <h2 className="sugpers-title">{title}</h2>
          <p className="sugpers-content">{content}</p>
          <Button
            variant="primary"
            onClick={handleExpand}
            className="sugpers-button"
          >
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
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

export default PersonalizedSuggestion;
