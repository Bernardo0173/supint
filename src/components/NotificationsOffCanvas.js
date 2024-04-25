import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/notificationsOffCanvas.css'
import SugPers from './SugPers';


function NotificationsOffCanvas() {
    const [show, setShow] = useState(false);
    const [isSugPersOpen, setIsSugPersOpen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleSugPers = () => setIsSugPersOpen(!isSugPersOpen); // Alternar visibilidad de SugPers

    return (
        <>
            {!show && (
                <div className="button">
                    <Button variant="primary" onClick={handleShow}>
                        Notificaciones
                    </Button>
                </div>
            )}

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Notificaciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SugPers isOpen={isSugPersOpen} toggle={toggleSugPers} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NotificationsOffCanvas;