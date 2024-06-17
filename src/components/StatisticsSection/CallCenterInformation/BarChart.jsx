/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is a bar chart that shows the top of agents with 
 * the best performance
 */

import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../../GlobalVariable/GlobalContext";
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

  /**
   * Number of agents to show [default: 4], this can be changed to show more agents
   * In future versions this value can be changed by the user
   */

  const [numberAgents, ] = useState(3); // Number of agents to show [default: 3
  const { url, token } = useContext(GlobalContext);

  useEffect(() => {
    // Fetch the top agents with the best performance
    fetch(`http://${url}/llamada/topAgents/${numberAgents}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        setNames(data.map((item) => item.Nombre + " " + item.ApellidoP));
        console.log(names);
        setValues(data.map((item) => item.cali));
        console.log(values);
      });
  }, [url, token, numberAgents]);

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
