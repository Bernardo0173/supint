import React from 'react';
import { Accordion } from 'react-bootstrap';
import KpiAccordionItem from './KpiAccordionItem';

function KpiAccordionPanel() {
  const kpis = [
    { 
      title: 'KPI 1: Duración de Llamadas', 
      labels: ['Enero', 'Febrero', 'Marzo'],
      data: [10, 20, 30],
      label: 'Minutos'
    },
    { 
      title: 'KPI 2: Satisfacción del Cliente', 
      labels: ['Enero', 'Febrero', 'Marzo'],
      data: [75, 82, 89],
      label: '% Satisfacción'
    }
  ];

  const handleDeleteKpi = (index) => {
    console.log("Eliminar KPI:", index);
  };

  return (
    <Accordion defaultActiveKey="0">
      {kpis.map((kpi, index) => (
        <KpiAccordionItem 
          key={index} 
          eventKey={index.toString()} 
          kpiData={kpi} 
          onDelete={() => handleDeleteKpi(index)}
        />
      ))}
    </Accordion>
  );
}

export default KpiAccordionPanel;
