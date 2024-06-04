import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes que vas a usar
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const LineChart = () => {

  const [week, setWeek] = useState([]);

  useEffect(() => {
    // Inicialmente cargar datos
    fetch("http://127.0.0.1:8080/llamada/llamadasPorDia")
    .then((response) => response.json())
    .then((data) => {
      setWeek(data);
    });
  }, []);

  const labels = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const chartData = {
    labels: labels,
    datasets: [{
      label: "Número de llamadas",
      data: week,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      fill: false
    }]
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
