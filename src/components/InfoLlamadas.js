import React from 'react';
import LineChart from './LineChart';
import NormalDistributionChart from './NormalDistributionChart';

const InfoLlamadas = ({ labels, datasets }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="chart-section">
        <h5>Llamadas atendidad y perdidas</h5>
        <LineChart labels={labels} datasets={datasets} />
      </div>
      <div className="chart-section">
        <h5>Llamadas por hora</h5>
        <NormalDistributionChart />
      </div>
    </div>
  );
};

export default InfoLlamadas;
