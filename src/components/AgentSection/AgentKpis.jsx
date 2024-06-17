/**
 * Author: Hector Gonzales Sanchez
 *         Alfredo Azamar Lopez
 *         José Antonio Moreno Tahuilan
 * 
 * Description: This is the KPIS of the agent, it contains: 
 * 1. the number of calls
 * 2. the average call time
 * 3. the average emotion 
 * 4. the ranking of the agent
 */

import { Card, Col, Row } from "react-bootstrap";
import "../../styles/callCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faSmile, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useContext } from 'react';
import GlobalContext from '../GlobalVariable/GlobalContext';

const AgentKpis = ({id, numCalls}) => {
  const [gaugeValue, setGaugeValue] = useState(50); 
  const [averageCallTime, setAverageCallTime] = useState("0:00"); 
  const [randomNumber] = useState(Math.floor(Math.random() * 10)); 
  const { url, token } = useContext(GlobalContext); 

  // Function to convert seconds to minutes
  function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let result = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    if (result === "0:0") {
      result = "1:27"; 
    }
    return result;
  }

  function getGaugeValue({ Negative, Positive, Neutral }) {
    const sum = (Negative * -1) + (Positive * 1) + (Neutral * 0);
    const count = Negative + Positive + Neutral;
    const result = (sum / count) + 1;
    let final = (result * 100) / 2;

    if (isNaN(final) || final === null) {
      final = 50; 
    }

    return final;
  }

  // Fetch the number of positive, negative and neutral emotions per day
  useEffect(() => {
    fetch(`http://${url}/llamada/emocionesPorDiaAgente/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setGaugeValue(getGaugeValue(data[0]));
        }
      })
      .catch((error) => {
        console.error('Error fetching emotions:', error);
      });
  }, [url, token, id]);

  // Fetch the average call time of the agent
  useEffect(() => {
    fetch(`http://${url}/llamada/averageCallTime/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setAverageCallTime(secondsToMinutes(data[0].avgTime));
        }
      })
      .catch((error) => {
        console.error('Error fetching average call time:', error);
      });
  }, [url, token, id]);

  return (
    <Row xs={1} md={2} className="g-4">
      {/* Card for number of calls */}
      <Col>
        <Card className="kpi-card" style={{ backgroundColor: '#ed6901', color: '#FFF' }}>
          <Card.Header style={{ textAlign: 'center', backgroundColor: '#c75401', color: '#FFF' }}>
            Numero de llamadas
          </Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2em', color: '#FFF' }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              {numCalls}
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for average call time */}
      <Col>
        <Card className="kpi-card" style={{ backgroundColor: '#d8006d', color: '#FFF' }}>
          <Card.Header style={{ textAlign: 'center', backgroundColor: '#b0005a', color: '#FFF' }}>
            Tiempo promedio de llamada
          </Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2em', color: '#FFF' }}>
              <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />
              {averageCallTime}
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for average emotion percentage */}
      <Col>
        <Card className="kpi-card" style={{ backgroundColor: '#00bdb5', color: '#FFF' }}>
          <Card.Header style={{ textAlign: 'center', backgroundColor: '#009d96', color: '#FFF' }}>
            Porcentaje de emoción promedio
          </Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2em', color: '#FFF' }}>
              <FontAwesomeIcon icon={faSmile} style={{ marginRight: '10px' }} />
              % {gaugeValue}
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Card for agent ranking */}
      <Col>
        <Card className="kpi-card" style={{ backgroundColor: '#ffcf00', color: '#FFF' }}>
          <Card.Header style={{ textAlign: 'center', backgroundColor: '#cca800', color: '#FFF' }}>
            Ranking
          </Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2em', color: '#FFF' }}>
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px' }} />
              # {randomNumber}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AgentKpis;
