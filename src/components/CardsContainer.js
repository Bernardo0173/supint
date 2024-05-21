import "../styles/mainScreen.css";
import React, { useState, useEffect } from "react";
import MoreInfo from "./MoreInfo";
import io from "socket.io-client";

const socket = io("http://127.0.0.1:3001");

const CardsContainer = ({ cards }) => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/llamada/consultarLlamadas")
      .then((response) => response.json())
      .then((data) => setCalls(data));

    socket.on("newCall", (newCall) => {
      setCalls((prevCalls) => [...prevCalls, newCall]);
    });

    return () => {
      socket.off("newCall");
    };
  }, []);

  return (
    <div className="left-panel">
      {calls.map((call) => (
        <MoreInfo
          cardStyle={call.IdLlamada}
          key={call.IdLlamada}
          Title={call.IdLlamada}
          Subtitle1={call.IdLlamada}
          Subtitle2={call.IdLlamada}
          Subtitle3={call.IdLlamada}
          Text1={call.IdLlamada}
          Additional1={call.IdLlamada}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
