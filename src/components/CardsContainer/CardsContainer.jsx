import "../../styles/mainScreen.css";
import "../../styles/emotionalStyles.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import CallCard from "./CallCard";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from "../GlobalVariable/GlobalContext";

const socket = io("http://44.209.22.101:8080");

const CardsContainer = () => {
  const { url, token } = React.useContext(GlobalContext);
  const [calls, setCalls] = useState([]);


  useEffect(() => {
    // Inicialmente cargar datos
    fetch(`http://${url}/llamada/infoTarjetasV2`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error("Error fetching data:", error));

    // Configurar el socket para escuchar eventos
    socket.on("newPage", (llamadas) => {
      console.log("newCall received:", llamadas);
      setCalls(prevCalls => {
        // Crear un nuevo array que contenga los elementos de prevCalls
        const newCalls = [...prevCalls];

        // Iterar sobre las nuevas llamadas
        for (const call of llamadas) {
          // Buscar el índice de la llamada existente
          const existingCallIndex = newCalls.findIndex(c => c.Nombre === call.Nombre);

          if (existingCallIndex !== -1) {
            // Si la llamada existe, reemplazarla con la nueva
            newCalls[existingCallIndex] = call;
          } else {
            // Si la llamada no existe, agregarla al array
            newCalls.push(call);
          }
        }

        // Devolver el nuevo array
        return newCalls;
      });
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
          <Col key={call.IdEmpleado} className="hola">
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
                estado={call.Estado}
              />
            )}{" "}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsContainer;
