import ValInc from "./ValInc";
import Accordion from "react-bootstrap/Accordion";
import "../styles/mainScreen.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://127.0.0.1:8080");

const IncideciasPanel = ({ incidencias }) => {

  const [inc, setInc] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/llamada/infoIncidencias")
      .then((response) => response.json())
      .then((data) => setInc(data));

      // Configurar el socket para escuchar eventos
      socket.on("newIncidencia", (incidencias) => {
        console.log("newIncidence received:", incidencias);
        setInc(incidencias);
      });

  }, []);

  const handleDelete = (id) => {
    setInc(inc.filter((incidencia) => incidencia.id !== id));
  };

  return (
    <div className="bottom-section">
      {inc.length === 0 ? (
        <p>No hay reportes de incidencias por el momento</p>
      ) : (
        <Accordion>
          {inc.map((incidencia) => (
            <ValInc
              zona={incidencia.NombreZona}
              descripcion={incidencia.Descripcion}
              key={incidencia.IdReporte}
              eventKey={incidencia.IdReporte.toString()}
              tipoIncidencia={incidencia.NombreIncidencia}
              onDelete={() => handleDelete(incidencia.IdReporte)}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default IncideciasPanel;
