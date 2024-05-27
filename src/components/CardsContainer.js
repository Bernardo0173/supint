import "../styles/mainScreen.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import CallCard from "./CallCard";
//import Container from 'react-bootstrap/Container';
import {Row, Col} from "react-bootstrap";

const socket = io("http://127.0.0.1:8080");

const CardsContainer = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    // Inicialmente cargar datos
    fetch("http://127.0.0.1:8080/llamada/infoTarjetasV2")
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
      socket.off("newCall");
    };
  }, []);

  const emotions = {
    positive: "success",
    negative: "danger",
    neutral: "warning",
    mixed: "resting",
  };

  return (
      <Row lg={2} md={1} sm={1} xs={1}>
        {calls.map((call, index) => (
          <Col key={call.Sentiment} className="hola">
            <CallCard
              initialCallStatus={emotions[call.Sentiment]}
              asunto={call.Asunto}
              notas = {call.Notas}
              nombreCliente = {call.CName +  " " + call.CLastName}
              nombreAgente = {call.Nombre + " " + call.ApellidoP}
              id = {call.IdLlamada}
              zona = {call.ZoneName}
              fecha = {call.Fecha}
              paquete = {call.PName}
              precio = {call.Precio}
              numLlamadas = {call.numLlamadas}
              celular = {call.Celular}
            />
          </Col>
        ))}
      </Row>
  );
};

export default CardsContainer;
