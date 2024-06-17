/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is a circular chart that shows the number of each
 * incidents reported by the users divided by:
 * 
 * 1. Internet
 * 2. Telefonia
 * 3. Television
 */

import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState, useContext } from 'react';	
import GlobalContext from '../../GlobalVariable/GlobalContext';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {

  const [internet, setInternet] = useState(0);
  const [telephony, setTelephony] = useState(0);
  const [television, setTelevision] = useState(0);
  const {url, token} = useContext(GlobalContext);

  // Fetch the amount of incidents reported by the users grouped by the type of incident
  useEffect(() => {
    fetch(`http://${url}/llamada/numPorAsunto`, {
      headers: { Authorization: `Bearer ${token}`}})
      .then((response) => response.json())
      .then((data) => {
        setInternet(data[0].veces);
        setTelephony(data[1].veces);
        setTelevision(data[2].veces);
      });
  }, [url, token]);

  const data = {
    labels: ['Internet', 'Telefonía', 'Televisión'],
    datasets: [
      {
        label: 'Problemas reportados',
        data: [internet, telephony, television],
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
