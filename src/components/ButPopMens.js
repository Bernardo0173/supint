import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ButPopMens() {
  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState('Enviar mensaje'); // Nuevo estado para el texto del botón

  const handleClose = () => {
    setShow(false);
    setButtonText('Enviar mensaje'); // Restablece el texto del botón al cerrar
  };
  const handleShow = () => setShow(true);

  const handleSend = () => {
    setButtonText('Enviando...'); // Cambia el texto del botón al enviar
    setTimeout(handleClose, 1500); // Espera 3 segundos antes de ejecutar handleClose
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Enviar mensaje
      </Button>

      <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje para los clientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje a enviar</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            {buttonText} {/* Usa el estado para el texto del botón */}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButPopMens;
