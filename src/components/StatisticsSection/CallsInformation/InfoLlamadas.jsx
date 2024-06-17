/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is a section that contains:
 * 1. The calls attended by day of the week chart
 * 2. The calls by hour chart
 */

import React from 'react';
import LineChart from './LineChart';
import NormalDistributionChart from './NormalDistributionChart';

const InfoLlamadas = ({ labels, datasets }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="chart-section">
        <h5>Llamadas atendidas por día de la semana</h5>
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
