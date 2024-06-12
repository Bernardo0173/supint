import React, { useState } from 'react';
import DoughnutChart from "./DoughnutChart";
import PolarAreaChart from "./PolarAreaChart";
import { ButtonGroup, Button } from 'react-bootstrap';

const InfoCirculo = () => {
  const [activeChart, setActiveChart] = useState(0);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ButtonGroup className="d-flex flex-row flex-md-column flex-sm-column">
        <Button
          variant="secondary"
          className="m-1"
          onClick={() => setActiveChart(0)}
        >
          Llamadas en tiempo ideal
        </Button>
        <Button
        
          variant="secondary"
          className="m-1"
          onClick={() => setActiveChart(1)}
        >
          Problemas comunes
        </Button>
      </ButtonGroup>
      <div className="chart-section">
        {activeChart === 0 && (
          <>
            <h5>Llamadas en tiempo ideal</h5>
            <DoughnutChart />
          </>
        )}
        {activeChart === 1 && (
          <>
            <h5>Problemas comunes</h5>
            <PolarAreaChart />
          </>
        )}
      </div>
    </div>
  );
};

export default InfoCirculo;
