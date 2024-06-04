import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';	

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {

  const [internet, setInternet] = useState(0);
  const [telefonia, setTelefonia] = useState(0);
  const [television, setTelevision] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/llamada/numPorAsunto`)
      .then((response) => response.json())
      .then((data) => {
        setInternet(data[0].veces);
        setTelefonia(data[1].veces);
        setTelevision(data[2].veces);
      });
  }, []);

  const data = {
    labels: ['Internet', 'Telefonía', 'Televisión'],
    datasets: [
      {
        label: 'Problemas reportados',
        data: [internet, telefonia, television],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1,
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

  return <PolarArea data={data} options={options} />;
};

export default PolarAreaChart;
