/**
 * Author: José Antonio Moreno Tahuilan
 *         Alfredo Azamar Lopez
 *         Hector Gonzales Sanchez
 * 
 * Description: This component is a container that contains the cards of the calls
 */

import "../../styles/mainScreen.css";
import "../../styles/emotionalStyles.css";
import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import CallCard from "./CallCard";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from "../GlobalVariable/GlobalContext";

const socket = io("http://44.209.22.101:8080");

const CardsContainer = () => {
  const { url, token } =  useContext(GlobalContext);
  const [calls, setCalls] = useState([]);

  // Fetch the data from the recent calls
  useEffect(() => {
    fetch(`http://${url}/llamada/infoTarjetas`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error("Error fetching data:", error));

    // If the state of the call changes, update the call
    socket.on("newPage", (newCalls) => {
      console.log("newCall received:", newCalls);
      setCalls(prevCalls => {
        const newCalls = [...prevCalls];

        for (const call of newCalls) {
          const existingCallIndex = newCalls.findIndex(c => c.Nombre === call.Nombre);

          if (existingCallIndex !== -1) {
            newCalls[existingCallIndex] = call;
          } else {
            newCalls.push(call);
          }
        }
        return newCalls;
      });
    });

    return () => {
      socket.off("newPage");
    };
  }, []);

  // Use a adapter to change the emotions to the corresponding color
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
          <Col key={call.IdEmpleado} className="cardmargin">
            <CallCard
              initialCallStatus={emotions[call.Sentiment]}
              type={call.Estado ? call.Asunto : "-"}
              notes={call.Estado ? call.Notas : "-"}
              clientName={call.Estado ? `${call.CName} ${call.CLastName}` : "-"}
              agentName={`${call.Nombre} ${call.ApellidoP}`}
              id={call.Estado ? call.IdLlamada : "-"}
              date={call.Estado ? call.Fecha : "00-00-0000T00:00:00"}
              numCalls={call.numLlamadas}
              phone={call.Estado ? call.Celular : "-"}
              employeeId={call.IdEmpleado}
              state={call.Estado}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsContainer;
