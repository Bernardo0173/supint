// SugPers.js
import React, { useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';
import '../../styles/sugPers.css'; // Asegúrate de tener este archivo CSS
import GlobalContext from '../GlobalVariable/GlobalContext';

function TiempoPromedio({ isOpen, title, content, actions, onDelete, openPanel }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { url, token, setToken, titleC, setTitleC, description, setDescription } = useContext(GlobalContext);

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
            Eliminar
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
              <div key = "99" className='action-item' onClick={openPanel} >3. Mandar mensajes a agentes 📧</div>
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

export default TiempoPromedio;
