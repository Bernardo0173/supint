//Autor: Eric Manuel Navarro Martínez
//Componente que permite hacer click en las tarjetas de agente, haciendo que estas desplieguen más información sobre la llamada
import { Modal, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";


const MoreInfo = (props) => {

  const [showMore, setshowMore] = useState(false);

  const getInfo = () => {
    setshowMore (!showMore);
  };
  
  const intervene = () => {
    alert("Interviniendo");
    console.log("Interviniendo");
  };


  return (
    <div>
      <Card style={{ width: "15rem" }} className={props.cardStyle} onClick={getInfo}>
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {props.Subtitle1} </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> {props.Subtitle2} </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> {props.Subtitle3} </Card.Subtitle>
          <Card.Text>{props.Text1}</Card.Text>
        </Card.Body>
      </Card>
      <button className="intervene" onClick={intervene}>Intervene</button>
      <Modal show={showMore} onHide={() => (setshowMore (!showMore))} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        
        <Modal.Header closeButton>
          <Modal.Title>Indormación de la llamada</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {props.Additional1}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => (setshowMore (!showMore))}>
            Cerrar
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  );
};
export default MoreInfo;
