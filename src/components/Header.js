// Header.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SugPers from './SugPers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/notificationsOffCanvas.css';
import '../styles/header.css'; // Asegúrate de tener este archivo CSS
import izziLogo from '../elements/izziN.png'

function Header() {
    const [show, setShow] = useState(false);
    const [isSugPersOpen, setIsSugPersOpen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleSugPers = () => setIsSugPersOpen(!isSugPersOpen); // Alternar visibilidad de SugPers

    return (
        <>
            <Navbar expand={false} className="header-navbar">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src={izziLogo}
                            alt="Izzi"
                            height="45"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} onClick={handleShow} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                        show={show}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Notificaciones
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <SugPers isOpen={isSugPersOpen} toggle={toggleSugPers} />
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
