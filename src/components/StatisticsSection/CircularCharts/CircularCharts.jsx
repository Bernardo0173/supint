/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component two charts:
 * 
 * 1. The first chart shows the number of agents that are above and below the time
 * 2. The second chart shows the number of each incidents reported by the users divided by:
 *   - Internet
 *   - Telefony
 *   - Television
 */

import React, { useState } from 'react';
import DoughnutChart from "./DoughnutChart";
import PolarAreaChart from "./PolarAreaChart";
import { ButtonGroup, Button } from 'react-bootstrap';

const CircularCharts = () => {
  const [activeChart, setActiveChart] = useState(0);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* Bottons to select the graphics */}
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
      {/* Display the selected chart */}
      <div className="chart-section" style={{ marginTop: '20px' }}>
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

export default CircularCharts;