import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

function KpiAccordionItem({ kpiData, eventKey, onDelete }) {
  const data = {
    labels: kpiData.labels,
    datasets: [
      {
        label: kpiData.label,
        data: kpiData.data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{kpiData.title}</Accordion.Header>
      <Accordion.Body>
        <Bar data={data} options={options} />
        <div className="mt-3 d-flex justify-content-end">
          <Button variant="danger" onClick={onDelete}>
            Eliminar KPI
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default KpiAccordionItem;
