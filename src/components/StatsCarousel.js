import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import StatCard from './StatCard';

// Registrar los componentes de Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend);

const StatsCarousel = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <StatCard
          title="Llamadas diarias"
          subtitle="(+15%) Aumento de llamadas hoy."
          chartType={Line}
          chartData={chartData}
        />
      </Carousel.Item>
      <Carousel.Item>
        <StatCard
          title="Website Views"
          subtitle="Last Campaign Performance"
          chartType={Bar}
          chartData={chartData}
        />
      </Carousel.Item>
      <Carousel.Item>
        <StatCard
          title="Daily Sales"
          subtitle="(+15%) increase in today sales."
          chartType={Line}
          chartData={chartData}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default StatsCarousel;
