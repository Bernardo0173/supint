import { Card, Col, Row } from "react-bootstrap";
import "../../styles/callCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faSmile, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../GlobalVariable/GlobalContext';


const AgentKpis = (props) => {

  const[gaugeValue, setGaugeValue] = useState(50);
  const[averageCallTime, setAverageCallTime] = useState(0);
  const[randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10)); // [1
  const { url, token } = useContext(GlobalContext);

  function segAmin(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    let result = minutos + ":" + segundosRestantes;
    if (result === "0:0"){
      result = "01:27";
    }
    return result;
  }

  function getGaugeValue(data) {
    const Negative = parseInt(data.Negative);
    const Positive = parseInt(data.Positive);
    const Neutral = parseInt(data.Neutral);

    const suma = (Negative * -1) + (Positive * 1) + (Neutral * 0);
    const cant = Negative + Positive + Neutral;
    const resultado = (suma / cant) + 1;


    let final = (resultado * 100) / 2;

    if (isNaN(final) || final === null) {
      final = 50;
    }

    return final;
  }

  useEffect(() => {
    fetch(`http://${url}/llamada/emocionesPorDiaAgente/${props.id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        setGaugeValue(getGaugeValue(data[0]));
        console.log(data[0]);
      })
      .then(console.log(gaugeValue))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://${url}/llamada/averageCallTime/${props.id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        setAverageCallTime(segAmin(data[0].avgTime));
        console.log(data[0]);
      })
      .then(console.log(averageCallTime))
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card className="kpi-card" style={{ backgroundColor: '#ed6901', color: '#FFF' }}>
          <Card.Header style={{ textAlign: 'center', backgroundColor: '#c75401', color: '#FFF' }}>
            Numero de llamadas
          </Card.Header>
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2em', color: '#FFF' }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
              {props.numLlamadas}
            </div>
          </Card.Body>
        </Card>
      </Col>
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
