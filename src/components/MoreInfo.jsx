//Autor: Eric Manuel Navarro Martínez
//Componente que permite hacer click en las tarjetas de agente, haciendo que estas desplieguen más información sobre la llamada
import { Modal, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "../styles/moreinfo.css";
import { BsExclamationOctagonFill } from "react-icons/bs";

const MoreInfo = (props) => {
  const [showMore, setshowMore] = useState(false);

  const getInfo = () => {
    setshowMore(!showMore);
  };

  const intervene = () => {
    alert("Interviniendo");
    console.log("Interviniendo");
  };

  return (
    <div className="more-info-container">
      <Card className={props.cardStyle} onClick={getInfo}>
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {props.Subtitle1}{" "}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {props.Subtitle2}{" "}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {props.Subtitle3}{" "}
          </Card.Subtitle>
          <Card.Text>{props.Text1}</Card.Text>
        </Card.Body>
      </Card>
      <button className="intervene" onClick={intervene}>
        <BsExclamationOctagonFill />
      </button>

      <Modal
        show={showMore}
        onHide={() => setshowMore(!showMore)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Información de la llamada</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.Additional1}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowMore(!showMore)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MoreInfo;
