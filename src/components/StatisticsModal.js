import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const StatisticsModal = ({ show, handleClose, children }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Detalles de las Estadísticas</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default StatisticsModal;
