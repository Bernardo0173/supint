import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [names, setNames] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    // Inicialmente cargar datos
    fetch("http://127.0.0.1:8080/llamada/top4Agentes")
      .then((response) => response.json())
      .then((data) => {
        setNames(data.map((item) => item.Nombre + " " + item.ApellidoP));
        console.log(names);
        setValues(data.map((item) => item.cali));
        console.log(values);
      });
  }, []);

  const data = {
    labels: names,
    datasets: [
      {
        label: "Dataset 1",
        data: values,
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: values[0], 
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
