import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes que vas a usar
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ labels, datasets }) => {
  const chartData = {
    labels: labels,
    datasets: datasets.map(dataset => ({
      ...dataset,
      fill: false,
    })),
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Asegúrate de que este tipo esté registrado
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
