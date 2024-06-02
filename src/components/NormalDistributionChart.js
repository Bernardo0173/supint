import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes que vas a usar
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const NormalDistributionChart = () => {
  const chartData = {
    labels: Array.from({ length: 61 }, (_, i) => (i - 30) / 10), // Labels from -3 to 3
    datasets: [
      {
        label: 'Normal Distribution',
        data: Array.from({ length: 61 }, (_, i) => {
          const x = (i - 30) / 10;
          return (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
        }), // Data points for normal distribution
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
        text: 'Normal Distribution',
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
          callback: (val, index) => (index % 5 === 0 ? val.toFixed(1) : ''),
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
