import Card from 'react-bootstrap/Card';
import Grafs from './Grafs';


function GrafCard() {
  return (
    <Card style={{ width: '100%'}}>
      <Card.Body>
        <Grafs/>
      </Card.Body>
    </Card>
  );
}

export default GrafCard;