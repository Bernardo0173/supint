import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MensForm() {
  return (
    <>
      <FloatingLabel controlId="titulo" label="Título de mensaje" className="mb-3">
        <Form.Control type="text" placeholder="Título de mensaje" />
      </FloatingLabel>
      <FloatingLabel controlId="mensaje" label="Mensaje" className="mb-3">
        <Form.Control as="textarea" placeholder="Mensaje" style={{ height: '100px' }} />
      </FloatingLabel>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Enviar
        </Button>
      </div>
    </>
  );
}

export default MensForm;
