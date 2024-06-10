import React from 'react';
import GaugeChartComponent from "./GaugeChart";
import BarChart from './BarChart';

const InfoCC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="chart-section">
        <h5>Emoción general</h5>
        <GaugeChartComponent value={0.5} />
      </div>
      <div className="chart-section">
        <h5>Top 3 agentes</h5>
        <BarChart />
      </div>
    </div>
  );
};

export default InfoCC;
