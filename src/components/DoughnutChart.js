import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {


  const [activos, setActivos] = useState(0);
  const [inactivos, setInactivos] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/llamada/llamadasArribaDelTiempo/60`)
      .then((response) => response.json())
      .then((data) => {
        setActivos(data[0].ArribaDelTiempo);
        setInactivos(data[0].AbajoDelTiempo);
      });
  }, []);

  const data = {
    labels: ['En tiempo', 'Fuera de tiempo'],
    datasets: [
      {
        label: 'Agentes',
        data: [inactivos, activos],
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
