import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/callCard.css";
import { FaDatabase } from "react-icons/fa";
import { useEffect, useState,useContext } from "react";
import GlobalContext from "../GlobalVariable/GlobalContext";

const ClientContract = (props) => {

  const [paquetes, setPaquetes] = useState([]);
  const { url, token} = useContext(GlobalContext);

  useEffect(() => {
    fetch(`http://${url}/cliente/paquetesPorCliente/${props.celular}`, {
      headers: { Authorization: `Bearer ${token}`}})
      .then((response) => response.json())
      .then((data) => setPaquetes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Row xs={1} md={2} className="g-4">
      {paquetes.map((paquete, idx) => (
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
