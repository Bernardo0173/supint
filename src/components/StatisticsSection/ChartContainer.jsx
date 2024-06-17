/**
 * Author: José Antonio Moreno Tahuilan
 *         Alfredo Azamar Lopez
 *         Bernardo Limon Montes de Oca
 * 
 * Description: This component is the container of the charts that are going to be shown in the right panel of the application.
 * We have three types of charts:
 * 1. The information of the call center
 * 2. The information of the calls
 * 3. The performance of the call center.
 * Depending on the selection of the button, we are going to show a different chart.
 */

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import InfoLlamadas from './CallsInformation/InfoLlamadas';
import CallCenterInformation from './CallCenterInformation/CallCenterInformation';
import CircularCharts from './CircularCharts/CircularCharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/grafs.css';

function ChartContainer() {
  // We use this state to determine which chart to display
  const [activeChart, setActiveChart] = useState(0);

  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={`btn btn-secondary ${activeChart === 0 ? 'active' : ''}`}
              onClick={() => setActiveChart(0)}
            >
              Información call center
            </button>
            <button
              type="button"
              className={`btn btn-secondary ${activeChart === 1 ? 'active' : ''}`}
              onClick={() => setActiveChart(1)}
            >
              Información de llamadas
            </button>
            <button
              type="button"
              className={`btn btn-secondary ${activeChart === 2 ? 'active' : ''}`}
              onClick={() => setActiveChart(2)}
            >
              Desempeño call center
            </button>
          </div>
          <div className="chart-container" style={{ marginTop: '20px' }}>
            {/* Display different information based on the selected button */}
            {activeChart === 0 && <CircularCharts />}
            {activeChart === 1 && <InfoLlamadas />}
            {activeChart === 2 && <CallCenterInformation />}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ChartContainer;
