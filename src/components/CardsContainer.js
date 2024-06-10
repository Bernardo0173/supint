import "../styles/mainScreen.css";
import "../styles/emotionalStyles.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import CallCard from "./CardsContainer/CallCard";
//import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from "./GlobalVariable/GlobalContext";

const socket = io("http://44.209.22.101:8080");

const CardsContainer = () => {
  const { url, token} = React.useContext(GlobalContext);
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    // Inicialmente cargar datos
    fetch(`http://${url}/llamada/infoTarjetasV2`, {
      headers: { Authorization: `Bearer ${token}`}})
      .then((response) => response.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error("Error fetching data:", error));

    // Configurar el socket para escuchar eventos
    socket.on("newPage", (llamadas) => {
      console.log("newCall received:", llamadas);
      setCalls(llamadas);
    });

    // Limpiar el socket al desmontar el componente
    return () => {
      socket.off("newPage");
    };
  }, []);

  const emotions = {
    positive: "success",
    negative: "danger",
    neutral: "warning",
    mixed: "resting",
  };

  return (
    <div className="left-panel">
      <Row lg={3} md={1} sm={1} xs={1}>
        {calls.map((call, index) => (
          <Col key={call.Sentiment} className="hola">
            {call.Estado ? (
              <CallCard
                initialCallStatus={emotions[call.Sentiment]}
                asunto={call.Asunto}
                notas={call.Notas}
                nombreCliente={call.CName + " " + call.CLastName}
                nombreAgente={call.Nombre + " " + call.ApellidoP}
                id={call.IdLlamada}
                zona={call.ZoneName}
                fecha={call.Fecha}
                paquete={call.PName}
                precio={call.Precio}
                numLlamadas={call.numLlamadas}
                celular={call.Celular}
                idEmpleado={call.IdEmpleado}
                estado={call.Estado}
              />
            ) : (
              <CallCard
                initialCallStatus={emotions[call.Sentiment]}
                asunto="-"
                notas="-"
                nombreCliente="-"
                nombreAgente={call.Nombre + " " + call.ApellidoP}
                id="-"
                zona="-"
                fecha="00-00-0000T00:00:00"
                paquete="-"
                precio="-"
                numLlamadas={call.numLlamadas}
                celular="-"
                idEmpleado="-"
                estado= {call.Estado}
              />
            )}{" "}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsContainer;
