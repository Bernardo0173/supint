//Autor: Eric Manuel Navarro Martínez
//Componente que permite hacer click en las tarjetas de agente, haciendo que estas desplieguen más información sobre la llamada
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/emotionalStyles.css";
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
    <div className="cardcontainer">
      <div className={props.cardStyle} onClick={getInfo}>
        <div className="agentName">{props.Title}</div>
        <div className="clientName"> {props.Subtitle1} </div>
        <div className="description"> {props.Subtitle2} </div>
        <div className="description"> {props.Subtitle3} </div>
        <div className="description">{props.Text1}</div>
        <div>
        {props.cardStyle !== "resting" && (
          <BsExclamationOctagonFill className="intervene" onClick={intervene} />
        )}</div>
      </div>
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
        <Modal.Body>
          <p>{props.Additional1}</p>
          <p>{props.Additional1}</p>
          <p>{props.Additional1}</p>
          <p>{props.Additional1}</p>
          <p>{props.Additional1}</p>
        </Modal.Body>
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
