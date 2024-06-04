import React from 'react';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes que vas a usar
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const NormalDistributionChart = () => {

  const [hour, setHour] = useState([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8080/llamada/llamadasPorHoras")
    .then((response) => response.json())
    .then((data) => {
      setHour(data);
      console.log(data);
    });
  }, []);


  const chartData = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    datasets: [
      {
        label: 'Llamadas por hora',
        data: hour,
        borderColor: 'rgba(0, 0, 0, 0.8)',
        borderWidth: 1,
        fill: false,
        pointRadius: 0, // Remove points to match the style
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Llamadas por hora',
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          autoSkip: true,
          maxTicksLimit: 24,
          callback: (val) => val,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => val.toFixed(1),
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default NormalDistributionChart;
