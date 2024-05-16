import React, {useEffect, useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import "bootstrap/dist/css/bootstrap.min.css";
import Stats from "./Stats";
import NotificationsOffCanvas from "./NotificationsOffCanvas";
import ValInc from "./ValInc";
import ButPopMens from "./ButPopMens";
import MoreInfo from "./MoreInfo";

const generativeMainScreen = () => {
  const [agenteNuevo, setAgenteNuevo] = useState([]);
  const [agentUrl, setAgentUrl] = useState(
    "http://127.0.0.1:8080/llamada/llamadasAgentes"
  );
  
  const agentColor = (state) => {
    switch (state) {
      case "Positivo":
        return "fine";
      case "Preventivo":
        return "warning";
      case "Crítico":
        return "danger";
      default:
        return "resting";
    }
  };

  const descargar = useCallback(async () => {
    //equvale a declarar algo estatico (MUY GENERAL)
    const response = await fetch(url);
    const data = await response.json();
    const arrNuevo = data.map((agentes) => {
      const agenteNuevo = {
        name:
          agentes.Empleado.Nombre +
          " " +
          agentes.Empleado.ApellidoP +
          " " +
          agentes.Empleado.ApellidoM,
        client:
          agentes.Cliente.Nombre +
          " " +
          agentes.Cliente.ApellidoP +
          " " +
          agentes.Cliente.ApellidoM,
        callTime: agentes.Llamada.FechaHora,
        problemsSolved: 3,
        description: agentes.Notas,
        style: agentColor(agente.Llamada.Estado),
      };
      return agenteNuevo;
    });
    setAgenteNuevo(arrNuevo);
  }, [agentUrl, setAgenteNuevo]);

  //UseEffect para descargar la informacion
  useEffect(() => {
    descargar();
  }, [descargar]);

  return (
    <div className="main-container">
      <div className="left-panel">
        {agenteNuevo.map((agent) => (
          <MoreInfo
          key={agent.name}
          Title={agent.name}
          Subtitle1={agent.client}
          Subtitle2={agent.callTime}
          Subtitle3= {agent.problemsSolved}
          Text1={agent.description}
          Additional1={agent.additionalInfo}
          style={agent.style}

          />
        ))}
      </div>
      <div className="right-panel">
        <div className="top-section">
          <Stats /> {/* Aquí se renderiza el componente Stats */}
        </div>
        <div className="bottom-section">
          <ValInc /> {/* Aquí se renderiza el componente Reporte */}
          <ButPopMens />
        </div>
      </div>
      <NotificationsOffCanvas />
    </div>
  );
};

export default generativeMainScreen;