import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/redesign.css";
import { BsStopwatch, BsPersonFillCheck, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { PiCellSignalSlashBold } from "react-icons/pi";
import { useState } from "react";


function Redesign({ agent }) {

  const [showMore, setshowMore] = useState(false);

  const getInfo = () => {
    alert("getInfo")
  };

  const intervene = () => {
    alert("Interviniendo");
    console.log("Interviniendo");
  };


  const [callStatus, setCallStatus] = useState(false);

  const btnText = {
    success: 'black',
    warning: 'black',
    danger: 'white',
    info: 'black'
  }



  return (
    <Card className={agent.style}>
      <Row>
        <Col sm={3} md={3} className="pe-0">
          <div className={`bg-${callStatus} callStatus`}> {/*Cambia de color*/}
            <PiCellSignalSlashBold size={70} color={btnText[callStatus]} onClick={getInfo}/> {/*Cambia depende el asunto*/}
          </div>
        </Col>
        <Col sm={9} md={9} className="ps-0">
          <Card.Body className="text-start">
            <Card.Title className="mt-2">{agent.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{agent.client}</Card.Subtitle>
            <Card.Text className="fs-6 fw-lighter">
              {agent.issue}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="fs-6">
            <Container>
              <Row className="row justify-content-between">
                <Col>
                  <div>
                    <BsStopwatch /> <br/>
                    {agent.callTime}
                  </div>
                </Col>

                <Col>
                  <div>
                    <BsPersonFillCheck /> <br/>
                    {agent.problemsSolved}
                  </div>
                </Col>
                
                <Col>
                  <Button className={`btn-sm text-${btnText[callStatus]}`} variant={callStatus} onClick={intervene}> {/*Cambia de color*/}
                    <BsFillTelephoneOutboundFill/> Intervenir
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
    
  );
}

export default Redesign;