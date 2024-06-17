/**
 *  Author: Hector Gonzales Sanchez
 *          Alfredo Azamar Lopez
 *          José Antonio Moreno Tahuilan
 * 
 *  Description: This component is the client contract card that contains the 
 *  information of the contract of the client
 */

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/callCard.css";
import { FaDatabase } from "react-icons/fa";
import { useEffect, useState,useContext } from "react";
import GlobalContext from "../GlobalVariable/GlobalContext";

const ClientContract = ({phone}) => {

  const [packages, setPackages] = useState([]);
  const { url, token} = useContext(GlobalContext);

  // Fetch the packages of the client
  useEffect(() => {
    fetch(`http://${url}/cliente/paquetesPorCliente/${phone}`, {
      headers: { Authorization: `Bearer ${token}`}})
      .then((response) => response.json())
      .then((data) => setPackages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [url, token, phone]);

  return (
    <Row xs={1} md={2} className="g-4">
      {packages.map((paquete, idx) => (
        <Col key={idx}>
          <Card className="contract-content-card">
            <Card.Body className="d-flex align-items-center">
              <div className="contract-icon-container">
                <FaDatabase className="icon" />
              </div>
              <div className="contract-text-container">
                <Card.Title className="contract-card-title">{paquete.Nombre}</Card.Title>
                <Card.Text className="contract-card-text">${paquete.Precio} mxn</Card.Text>
                <Card.Text className="contract-card-text">Fecha de contratación: {paquete.Fecha.substring(0, 10)} </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ClientContract;
