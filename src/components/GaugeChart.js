import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChartComponent = ({ value }) => {
  return (
    <div>
      <h2>Emotional State</h2>
      <GaugeChart 
        id="gauge-chart"
        nrOfLevels={20}
        percent={value}
        textColor="#000000"
      />
    </div>
  );
};

export default GaugeChartComponent;