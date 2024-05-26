return (
    <Card style={{maxWidth: '400px', overflow: 'hidden'}}>
      <Row>
        <Col sm={3} md={3} className="pe-0">
          <div className={`bg-${callStatus} callStatus`}> {/*Cambia de color*/}
            <PiCellSignalSlashBold size={70} color={btnText[callStatus]}/> {/*Cambia depende el asunto*/}
          </div>
        </Col>
        <Col sm={9} md={9} className="ps-0">
          <Card.Body className="text-start">
            <Card.Title className="mt-2">Nombre del agente</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Nombre del cliente</Card.Subtitle>
            <Card.Text className="fs-6 fw-lighter">
              Problema descrito por el cliente en su interacción con el IVR.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="fs-6">
            <Container>
              <Row className="row justify-content-between">
                <Col>
                  <div>
                    <BsStopwatch /> <br/>
                    00:00:00
                  </div>
                </Col>
                <Col>
                  <div>
                    <BsPersonFillCheck /> <br/>
                    0
                  </div>
                </Col>
                <Col>
                  <Button className={`btn-sm text-${btnText[callStatus]}`} variant={callStatus}> {/*Cambia de color*/}
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