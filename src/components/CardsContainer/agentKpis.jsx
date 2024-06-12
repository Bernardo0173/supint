import {Card, Col, Row} from "react-bootstrap";
import "../../styles/callCard.css";
import Sentiment from "./sentiment";

const AgentKpis = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="kpi-card">
            <Card.Body>
              <Card.Text>
                <Sentiment />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AgentKpis;