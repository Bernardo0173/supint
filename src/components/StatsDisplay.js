import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Asegúrate de incluir Button aquí
import StatisticsModal from './StatisticsModal'; // Asegúrate de que este archivo esté correctamente enlazado


const StatsDisplay = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const data = {
    callDuration: { title: "Duración de Llamadas", content: "Promedio: 2.4 minutos" },
    emotionAverage: { title: "Promedio de Emociones", content: "Promedio: 78%" },
    productiveTime: { title: "Tiempo Productivo", content: "Total: 74 minutos" },
    idealCallPercentage: { title: "Llamadas en Tiempo Ideal", content: "40% dentro de 1 min" }
  };

  const handleOpenModal = (key) => {
    setModalContent(data[key]);
    setShowModal(true);
  };

  return (
    <div>
      {Object.keys(data).map(key => (
        <Button key={key} onClick={() => handleOpenModal(key)} variant="primary" className="m-2">
          {data[key].title}
        </Button>
      ))}
      <StatisticsModal show={showModal} handleClose={() => setShowModal(false)}>
        <p>{modalContent?.content}</p>
      </StatisticsModal>
    </div>
  );
};

export default StatsDisplay;
