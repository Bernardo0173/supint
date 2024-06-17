/**
 * Author: Bernardo Limón Montes de Oca
 *         José Antonio Moreno Tahuilan
 *          Alfredo Azamar Lopez
 * 
 * Description: This component is a circular chart that shows the number of agents that 
 * are above and below the time
 */

import React, { useEffect, useState, useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import GlobalContext from '../../GlobalVariable/GlobalContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

  const [actives, setActives] = useState(0);
  const [inactives, setInactives] = useState(0);
  const { url, token } = useContext(GlobalContext);

  // Fetch the amount of agents that are above and below the time
  useEffect(() => {
    fetch(`http://${url}/llamada/llamadasArribaDelTiempo/60`, {
      headers: { Authorization: `Bearer ${token}`}})
      .then((response) => response.json())
      .then((data) => {
        setActives(data[0].ArribaDelTiempo);
        setInactives(data[0].AbajoDelTiempo);
      });
  }, [url, token]);

  const data = {
    labels: ['En tiempo', 'Fuera de tiempo'],
    datasets: [
      {
        label: 'Agentes',
        data: [inactives, actives],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
