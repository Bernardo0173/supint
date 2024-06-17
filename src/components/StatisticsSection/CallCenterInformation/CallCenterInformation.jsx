/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Eric Manuel Navarro Martínez
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is a section that contains:
 * 1. The general emotion chart 
 * 2. The top 3 agents chart
 */

import React from 'react';
import GaugeChartComponent from "./GaugeChart";
import BarChart from './BarChart';

const CallCenterInformation = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="chart-section">
        <h5>Emoción general</h5>
        <GaugeChartComponent value={50} />
      </div>
      <div className="chart-section">
        <h5>Top 3 agentes</h5>
        <BarChart />
      </div>
    </div>
  );
};

export default CallCenterInformation;
