import React, { useState } from 'react';
import DoughnutChart from "./DoughnutChart";
import PolarAreaChart from "./PolarAreaChart";
import { ButtonGroup, Button } from 'react-bootstrap';

const InfoCirculo = () => {
  const [activeChart, setActiveChart] = useState(0);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ButtonGroup style={{ marginBottom: '20px' }}>
        <Button
          variant="secondary"
          className={activeChart === 0 ? 'active' : ''}
          onClick={() => setActiveChart(0)}
        >
          Llamadas en tiempo ideal
        </Button>
        <Button
          variant="secondary"
          className={activeChart === 1 ? 'active' : ''}
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
