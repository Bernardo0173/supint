import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import PromLlamada from "./PromLlamada";
import PromEmoc from "./PromEmoc";
import TimeCC from "./TimeCC";
import IdealCalls from "./IdealCalls";
import "../styles/stats.css";

const Stats = () => {
  const fakeCalls = [
    { duration: 1 }, { duration: 3 }, { duration: 2 }, { duration: 5 }, { duration: 1 },
  ];

  const avgEmoc = [
    { emotion: 55 }, { emotion: 63 }, { emotion: 69 }, { emotion: 88 }, { emotion: 94 },
  ];

  const timeCC = [
    { time: 6 }, { time: 9 }, { time: 16 }, { time: 18 }, { time: 25 },
  ];

  const popoverPromLlamada = (
    <Popover id="popover-prom-llamada">
      <Popover.Title as="h3">Tiempo Promedio de Llamada</Popover.Title>
      <Popover.Content>
        <PromLlamada calls={fakeCalls} />
      </Popover.Content>
    </Popover>
  );

  const popoverPromEmoc = (
    <Popover id="popover-prom-emoc">
      <Popover.Title as="h3">Promedio de Emociones</Popover.Title>
      <Popover.Content>
        <PromEmoc emoc={avgEmoc} />
      </Popover.Content>
    </Popover>
  );

  const popoverTimeCC = (
    <Popover id="popover-time-cc">
      <Popover.Title as="h3">Tiempo Productivo del Call Center</Popover.Title>
      <Popover.Content>
        <TimeCC timeCallCenter={timeCC} />
      </Popover.Content>
    </Popover>
  );

  const popoverIdealCalls = (
    <Popover id="popover-ideal-calls">
      <Popover.Title as="h3">Llamadas en Tiempo Ideal</Popover.Title>
      <Popover.Content>
        <IdealCalls calls={fakeCalls} />
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="stats">
      <div className="button-row">
        <OverlayTrigger trigger="click" placement="right" overlay={popoverPromLlamada}>
          <Button variant="success">Tiempo promedio de cada llamada</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverPromEmoc}>
          <Button variant="success">Promedio de emociones por llamada</Button>
        </OverlayTrigger>
      </div>
      <div className="button-row">
        <OverlayTrigger trigger="click" placement="right" overlay={popoverTimeCC}>
          <Button variant="success">Tiempo productivo del Call Center</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverIdealCalls}>
          <Button variant="success">% de llamadas en tiempo ideal (1 min)</Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default Stats;
