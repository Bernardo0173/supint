import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function BootstapCard(props) {
  return (
    <Card style={{ width: '15rem' }} className={props.style}>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.Subtitle1}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.Subtitle2}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.Subtitle3}</Card.Subtitle>
        <Card.Text>
          {props.Text1}
        </Card.Text>
        <Button variant="dark">Danger</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default BootstapCard;