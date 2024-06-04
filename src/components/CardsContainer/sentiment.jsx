import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

const Sentiment = ({ sentiment }) => {

	const data = {
    labels: ['1min', '2min', '3min', '4min', '5min', '6min', '7min'],
    datasets: [
      {
        label: 'Estado del cliente',
        data: [65, 100, 20, 81, 56, 55, 10],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }, 
      {
        label: 'Estado del agente',
        data: [35, 50, 70, 19, 44, 45, 90],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

	Chart.register(...registerables);

  return (
    <Line data={data} options={options} /> 
  );
};

export default Sentiment;