import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

const StatCard = ({ title, subtitle, chartType, chartData }) => {
  const ChartComponent = chartType;

  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      <Card.Body>
        <div style={{ width: '100%', height: '200px' }}>
          <ChartComponent data={chartData} />
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
