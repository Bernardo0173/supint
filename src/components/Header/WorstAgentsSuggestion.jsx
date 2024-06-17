// SugPe
import React, { useState, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';
import '../../styles/sugPers.css';
import GlobalContext from '../GlobalVariable/GlobalContext';

function WorstAgentsSuggestion({ isOpen, title, content}) {

  const { url, token } = useContext(GlobalContext);
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [worstAgents, setWorstAgents] = useState([]);

  /**
   * This value return us the numeber of worst agents that we want to show.
   * This should be a value that the supervisor can change 
   * */ 

  const [numberWorstAgent, ] = useState(3);
  

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // We obtain the worst agents from the API
  useEffect(() => {
    fetch(`http://${url}/llamada/topPeoresAgentes/${numberWorstAgent}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setWorstAgents(data);
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
          <CSSTransition
            in={isExpanded}
            timeout={300}
            classNames="expand"
            unmountOnExit
          >
            <div className="expandable-content">
              {
                worstAgents.map((agente, index) => (
                  <div key={index} className="action-item">{agente.Nombre} {agente.ApellidoP}</div>
                ))}
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

export default WorstAgentsSuggestion;
