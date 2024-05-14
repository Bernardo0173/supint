import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function unirse(event) {
  //Alterar para que acá se use el api de amazon connect y el don se una a la llamada
  //Usar el id del agente para unirse a la llamada
  event.preventDefault();
  alert("Unirse a la llamada");
}

function unirse2(event) {
  //Alterar para que acá se use el api de amazon connect y el don se una a la llamada
  //Usar el id del agente para unirse a la llamada
  event.preventDefault();
  alert("Unirse 2");
}


function extendInfo(){
  //popup de la información extendida del agente
  console.log("Extend Info");
}

function BootstapCard(props) {

  return (
    <Card style={{ width: '20rem' }} className={props.style} onClick={unirse2}>
      <Card.Body >
        <Card.Title>{props.Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.Subtitle1}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.Subtitle2}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.Subtitle3}</Card.Subtitle>
        <Card.Text> {props.Text1} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BootstapCard;