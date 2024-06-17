/**
 * Author: Jose Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is LineChart that shows the number of 
 * calls attended by day of the week
 */

import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import GlobalContext from '../../GlobalVariable/GlobalContext';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const LineChart = () => {

  const [week, setWeek] = useState([]);
  const { url, token } = useContext(GlobalContext);

  // Fetch the amount of calls attended by day of the week
  useEffect(() => {
    fetch(`http://${url}/llamada/llamadasPorDia`, {
      headers: { Authorization: `Bearer ${token}`}})
    .then((response) => response.json())
    .then((data) => {
      setWeek(data);
    });
  }, [token, url]);

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
        type: 'category', 
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
